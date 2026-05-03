import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

    const data = await resend.emails.send({
      from: "Dental Clinic <onboarding@resend.dev>",
      to: ["worsthornedental@hotmail.com"], // 🔥 CHANGE THIS
      subject: "New Appointment Request",
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}