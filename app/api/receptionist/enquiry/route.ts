import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

type ReceptionistEnquiry = {
  clinicId?: string;
  clinicName?: string;
  clinicEmail?: string;
  treatment?: string;
  patientType?: string;
  preferredTime?: string;
  urgency?: string;
  name?: string;
  phone?: string;
  email?: string;
  postcode?: string;
  message?: string;
  consent?: boolean;
  sourcePage?: string;
  submittedAt?: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: corsHeaders,
  });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase environment variables are missing.");
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing.");
  }

  return new Resend(apiKey);
}

function getFromEmail() {
  return (
    process.env.RECEPTIONIST_FROM_EMAIL ||
    "Worsthorne Dental Clinic <onboarding@resend.dev>"
  );
}

function getFallbackClinicEmail() {
  return (
    process.env.RECEPTIONIST_FALLBACK_CLINIC_EMAIL ||
    "worsthornedental@hotmail.com"
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function GET() {
  return jsonResponse({
    success: true,
    message:
      "Receptionist enquiry API is running. Use POST to submit an enquiry.",
  });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ReceptionistEnquiry;

    const clinicId = String(body.clinicId || "").trim();
    const clinicName = String(body.clinicName || "").trim();
    const clinicEmail = String(
      body.clinicEmail || getFallbackClinicEmail()
    ).trim();

    const treatment = String(body.treatment || "").trim();
    const patientType = String(body.patientType || "").trim();
    const preferredTime = String(body.preferredTime || "").trim();
    const urgency = String(body.urgency || "").trim();

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const postcode = String(body.postcode || "").trim();
    const message = String(body.message || "").trim();

    const sourcePage = String(body.sourcePage || "").trim();
    const submittedAt = String(
      body.submittedAt || new Date().toISOString()
    ).trim();

    const consent = Boolean(body.consent);

    if (!clinicId || !clinicName) {
      return jsonResponse({ error: "Clinic details are missing." }, 400);
    }

    if (!isValidEmail(clinicEmail)) {
      return jsonResponse({ error: "Clinic email is invalid." }, 400);
    }

    if (!treatment || !patientType || !preferredTime || !urgency) {
      return jsonResponse({ error: "Enquiry details are incomplete." }, 400);
    }

    if (name.length < 2) {
      return jsonResponse({ error: "Please provide a valid name." }, 400);
    }

    if (phone.replace(/\s/g, "").length < 10) {
      return jsonResponse(
        { error: "Please provide a valid phone number." },
        400
      );
    }

    if (!isValidEmail(email)) {
      return jsonResponse(
        { error: "Please provide a valid email address." },
        400
      );
    }

    if (!consent) {
      return jsonResponse(
        { error: "Consent is required before submitting an enquiry." },
        400
      );
    }

    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("receptionist_enquiries")
      .insert({
        clinic_id: clinicId,
        clinic_name: clinicName,
        treatment,
        patient_type: patientType,
        preferred_time: preferredTime,
        urgency,
        name,
        phone,
        email,
        postcode,
        message,
        consent,
        source_page: sourcePage,
        submitted_at: submittedAt,
        status: "new",
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return jsonResponse({ error: "The enquiry could not be saved." }, 500);
    }

    const enquiryId = data?.id || "Not available";

    const resend = getResendClient();
    const fromEmail = getFromEmail();

    const safeClinicName = escapeHtml(clinicName);
    const safeTreatment = escapeHtml(treatment);
    const safePatientType = escapeHtml(patientType);
    const safePreferredTime = escapeHtml(preferredTime);
    const safeUrgency = escapeHtml(urgency);
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safePostcode = escapeHtml(postcode || "Not provided");
    const safeMessage = escapeHtml(message || "No extra message provided.");
    const safeSourcePage = escapeHtml(sourcePage || "Not available");
    const safeSubmittedAt = escapeHtml(submittedAt);
    const safeEnquiryId = escapeHtml(String(enquiryId));

    const clinicSubject = `New ${clinicName} enquiry: ${treatment}`;
    const patientSubject = `Your enquiry has been received by ${clinicName}`;

    const clinicText = `
New website dental enquiry

Clinic: ${clinicName}
Clinic ID: ${clinicId}
Enquiry ID: ${enquiryId}

Patient details
Name: ${name}
Phone: ${phone}
Email: ${email}
Postcode: ${postcode || "Not provided"}

Enquiry details
Treatment: ${treatment}
Patient type: ${patientType}
Preferred time: ${preferredTime}
Urgency: ${urgency}

Message:
${message || "No extra message provided."}

Consent to contact: ${consent ? "Yes" : "No"}
Source page: ${sourcePage || "Not available"}
Submitted at: ${submittedAt}

Important:
This enquiry does not confirm an appointment. The practice team should contact the patient to confirm availability.
    `.trim();

    const patientText = `
Hello ${name},

Thank you. Your enquiry has been sent to ${clinicName}.

Enquiry summary:
Treatment: ${treatment}
Patient type: ${patientType}
Preferred time: ${preferredTime}
Urgency: ${urgency}

The practice team will review your request and contact you to confirm the next available option.

Please note: this is not a confirmed appointment until the practice contacts you.

If your symptoms become severe, or you have swelling affecting breathing or swallowing, uncontrolled bleeding, or serious trauma, please seek urgent medical help immediately.

Kind regards,

${clinicName}
    `.trim();

    const clinicHtml = `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h2 style="margin-bottom: 4px;">New Website Dental Enquiry</h2>
        <p style="margin-top: 0; color: #6b7280;">A patient has submitted an enquiry from the website widget.</p>

        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin: 18px 0;">
          <h3 style="margin-top: 0;">Patient details</h3>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Postcode:</strong> ${safePostcode}</p>
        </div>

        <div style="background: #ecfdf5; border: 1px solid #99f6e4; border-radius: 12px; padding: 16px; margin: 18px 0;">
          <h3 style="margin-top: 0;">Enquiry details</h3>
          <p><strong>Treatment:</strong> ${safeTreatment}</p>
          <p><strong>Patient type:</strong> ${safePatientType}</p>
          <p><strong>Preferred time:</strong> ${safePreferredTime}</p>
          <p><strong>Urgency:</strong> ${safeUrgency}</p>
        </div>

        <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin: 18px 0;">
          <h3 style="margin-top: 0;">Message</h3>
          <p>${safeMessage}</p>
        </div>

        <p><strong>Consent to contact:</strong> ${consent ? "Yes" : "No"}</p>
        <p><strong>Source page:</strong> ${safeSourcePage}</p>
        <p><strong>Submitted at:</strong> ${safeSubmittedAt}</p>
        <p><strong>Enquiry ID:</strong> ${safeEnquiryId}</p>

        <p style="font-size: 13px; color: #92400e; background: #fffbeb; border: 1px solid #fde68a; border-radius: 10px; padding: 12px;">
          This enquiry does not confirm an appointment. The practice team should contact the patient to confirm availability.
        </p>
      </div>
    `;

    const patientHtml = `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h2>Your enquiry has been received</h2>

        <p>Hello ${safeName},</p>

        <p>Thank you. Your enquiry has been sent to <strong>${safeClinicName}</strong>.</p>

        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin: 18px 0;">
          <h3 style="margin-top: 0;">Your enquiry summary</h3>
          <p><strong>Treatment:</strong> ${safeTreatment}</p>
          <p><strong>Patient type:</strong> ${safePatientType}</p>
          <p><strong>Preferred time:</strong> ${safePreferredTime}</p>
          <p><strong>Urgency:</strong> ${safeUrgency}</p>
        </div>

        <p>The practice team will review your request and contact you to confirm the next available option.</p>

        <p><strong>Please note:</strong> this is not a confirmed appointment until the practice contacts you.</p>

        <p style="font-size: 13px; color: #92400e; background: #fffbeb; border: 1px solid #fde68a; border-radius: 10px; padding: 12px;">
          If your symptoms become severe, or you have swelling affecting breathing or swallowing, uncontrolled bleeding, or serious trauma, please seek urgent medical help immediately.
        </p>

        <p>Kind regards,<br />${safeClinicName}</p>
      </div>
    `;

    console.log("Clinic email should go to:", clinicEmail);
    console.log("Patient email should go to:", email);

    const clinicEmailResult = await resend.emails.send({
      from: fromEmail,
      to: clinicEmail,
      subject: clinicSubject,
      text: clinicText,
      html: clinicHtml,
      replyTo: email,
    });

    if (clinicEmailResult.error) {
      console.error("Clinic email failed:", clinicEmailResult.error);
    } else {
      console.log("Clinic email sent:", clinicEmailResult.data);
    }

    const patientEmailResult = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: patientSubject,
      text: patientText,
      html: patientHtml,
      replyTo: clinicEmail,
    });

    if (patientEmailResult.error) {
      console.error("Patient email failed:", patientEmailResult.error);
    } else {
      console.log("Patient email sent:", patientEmailResult.data);
    }

    return jsonResponse({
      success: true,
      message: "Enquiry received successfully.",
      enquiryId,
      clinicEmailSent: !clinicEmailResult.error,
      patientEmailSent: !patientEmailResult.error,
    });
  } catch (error) {
    console.error("Receptionist enquiry error:", error);

    return jsonResponse(
      {
        error: "Something went wrong while sending the enquiry.",
      },
      500
    );
  }
}