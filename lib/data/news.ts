export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  intro: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
};

export const newsPosts: NewsArticle[] = [
  {
    slug: "what-to-expect-from-your-first-private-dental-consultation",
    title: "What to expect from your first private dental consultation",
    excerpt:
      "A reassuring guide to the patient journey, the consultation process, and how treatment planning works.",
    category: "Patient Advice",
    readTime: "5 min read",
    image: "/news/consultation.jpg",
    intro:
      "For many patients, the first private dental consultation is less about treatment on the day and more about understanding what is happening, what options are available, and what the best next step looks like. A good consultation should feel calm, clear, and informative rather than rushed or overwhelming.",
    sections: [
      {
        heading: "The first appointment is about understanding your needs",
        body: [
          "A private consultation usually begins with a conversation. This is your chance to explain any concerns, symptoms, goals, or worries you may have. Some patients arrive with a specific issue, such as a painful tooth or a damaged filling, while others want advice on whitening, implants, cosmetic improvements, or general long-term dental health.",
          "A strong consultation should give you space to talk openly. It is not only about what the clinician sees clinically, but also about what matters to you as a patient.",
        ],
      },
      {
        heading: "Assessment, examination, and treatment planning",
        body: [
          "After discussing your concerns, the clinician will usually carry out an examination and may recommend imaging or further assessment depending on what is needed. The goal is to build a clear picture of your oral health and understand both immediate priorities and longer-term considerations.",
          "At this stage, treatment planning becomes much easier to understand. You should leave knowing what needs attention now, what can be monitored, and what choices are available if you want to improve function, comfort, or appearance.",
        ],
      },
      {
        heading: "A good consultation should feel reassuring",
        body: [
          "Many patients feel anxious before a first appointment, especially if they have delayed treatment or had a negative dental experience elsewhere. That is why the tone of the consultation matters. Clear explanations, calm communication, and a supportive environment can completely change how a patient feels about moving forward.",
          "If you are preparing for your first visit, it can also help to review relevant treatments, fees, and patient testimonials before attending.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Family Dentistry", href: "/treatments/family-dentistry" },
      { label: "Fees", href: "/fees" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "how-professional-teeth-whitening-compares-to-home-kits",
    title: "How professional teeth whitening compares to home kits",
    excerpt:
      "A practical look at results, safety, and what patients should know before choosing whitening options.",
    category: "Cosmetic Dentistry",
    readTime: "6 min read",
    image: "/news/whitening (2).jpg",
    intro:
      "Teeth whitening is one of the most common cosmetic requests, but many patients are unsure whether professional whitening is worth it compared with home kits. The biggest differences usually come down to safety, predictability, and the quality of the final result.",
    sections: [
      {
        heading: "Home kits may seem convenient, but results can vary",
        body: [
          "Many shop-bought whitening products are appealing because they seem simple and low-cost. However, results are often inconsistent. Some products produce only a limited change, while others may lead to sensitivity or uneven whitening if used incorrectly.",
          "Patients are often disappointed not because whitening cannot work, but because they expected more control, better shade improvement, and a smoother overall process.",
        ],
      },
      {
        heading: "Professional whitening is more structured and predictable",
        body: [
          "Professional whitening is usually based on a clearer assessment of your current tooth shade, oral health, and desired result. It is not just about making teeth look whiter, but doing so in a way that is appropriate, safe, and proportionate.",
          "Because the process is guided properly, patients usually have a much better idea of what kind of improvement is realistic and how to maintain it afterwards.",
        ],
      },
      {
        heading: "The right option depends on your goals",
        body: [
          "If your main aim is a safe, polished, natural-looking improvement, professional whitening is usually the better route. If you also have staining linked to restorations, sensitivity, or other cosmetic concerns, a consultation becomes even more important.",
          "Before deciding, it helps to review cosmetic dentistry options alongside whitening so you can understand the full picture rather than focusing on one treatment in isolation.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
      { label: "Cosmetic Dentistry", href: "/treatments/cosmetic-dentistry" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "signs-it-may-be-time-to-consider-dental-implants",
    title: "Signs it may be time to consider dental implants",
    excerpt:
      "A simple guide to when implant treatment may be worth discussing with your dental team.",
    category: "Restorative Dentistry",
    readTime: "6 min read",
    image: "/news/implants (2).jpg",
    intro:
      "Dental implants are not the right option for every patient, but they can be a strong long-term solution when missing teeth begin to affect confidence, comfort, or chewing function. Many patients wait longer than they need to before asking about implants simply because they are unsure when the conversation should start.",
    sections: [
      {
        heading: "Missing teeth can affect more than appearance",
        body: [
          "The most obvious concern is often the visual gap left by a missing tooth, especially in visible areas of the smile. But function matters too. Patients often notice chewing becoming less comfortable, bite balance changing, or confidence dropping in social or professional settings.",
          "These are all valid reasons to discuss implants, even if the problem initially feels cosmetic.",
        ],
      },
      {
        heading: "Long-term confidence often matters just as much as treatment itself",
        body: [
          "A good implant consultation is about more than whether an implant is technically possible. It should also focus on what the patient wants from treatment: stability, confidence, a natural appearance, and a result that feels worthwhile in daily life.",
          "Patients who ask at the right time usually benefit from clearer planning, better understanding of options, and less uncertainty.",
        ],
      },
      {
        heading: "A consultation can help you understand whether implants are appropriate",
        body: [
          "You do not need to decide everything before you attend. The consultation is where the discussion begins. A proper assessment can explain whether implants are suitable, what alternatives exist, and what the likely treatment journey may involve.",
          "If you are considering implants, it is sensible to also review fees, case studies, and related restorative treatment information before moving forward.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Dental Implants", href: "/treatments/dental-implants" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Fees", href: "/fees" },
    ],
  },
  {
    slug: "why-gum-health-matters-more-than-most-patients-realise",
    title: "Why gum health matters more than most patients realise",
    excerpt:
      "A clear guide to why healthy gums support comfort, stability, and long-term oral health.",
    category: "Oral Health",
    readTime: "5 min read",
    image: "/news/gum-health.jpg",
    intro:
      "Many patients focus mainly on teeth, but gum health plays a major role in comfort, stability, and long-term oral health. When gums are inflamed or neglected, the effects can build gradually, which is why early attention matters.",
    sections: [
      {
        heading: "Gum health supports the whole foundation of the mouth",
        body: [
          "Healthy gums are not just about appearance. They provide support around the teeth and contribute to long-term stability. When gum health begins to decline, patients may notice bleeding, sensitivity, tenderness, or persistent irritation.",
          "Even if symptoms seem minor, they should not be ignored, because gum problems often progress gradually.",
        ],
      },
      {
        heading: "Early attention is usually easier than later treatment",
        body: [
          "One of the biggest benefits of regular dental care is catching gum issues early. Patients who attend examinations and hygiene visits consistently usually have a much clearer understanding of what needs improvement and how to maintain it.",
          "That early clarity often prevents more involved problems later.",
        ],
      },
      {
        heading: "A calm, supportive approach makes a big difference",
        body: [
          "Some patients feel embarrassed discussing gum health, especially if they know things have slipped. A good clinic should make this feel manageable, not uncomfortable. Clear communication, practical advice, and a long-term plan usually help far more than criticism.",
          "If gum health is a concern, periodontal treatment and family dentistry information are often useful next steps to review.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Periodontal Treatment", href: "/treatments/periodontal-treatment" },
      { label: "Family Dentistry", href: "/treatments/family-dentistry" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "how-to-choose-the-right-private-dentist-for-your-needs",
    title: "How to choose the right private dentist for your needs",
    excerpt:
      "What to look for when comparing clinics, treatment quality, communication, and patient experience.",
    category: "Patient Advice",
    readTime: "7 min read",
    image: "/news/choosing-dentist.jpg",
    intro:
      "Choosing a private dentist is not just about finding the nearest clinic. Patients are often comparing the quality of communication, the available treatments, the overall environment, and whether the clinic feels trustworthy enough for long-term care.",
    sections: [
      {
        heading: "Look beyond the treatment list",
        body: [
          "Many websites list services, but that alone does not tell you what the patient experience will feel like. A stronger sign is how clearly treatment is explained, how transparent fees are, and whether the clinic shows signs of calm, organised, patient-first care.",
          "Patients usually feel more confident when a site provides enough detail to understand the approach behind the treatment.",
        ],
      },
      {
        heading: "Reassurance and communication matter",
        body: [
          "For many patients, especially nervous ones, the way a clinic communicates is just as important as the treatment itself. A private clinic should make you feel informed, respected, and comfortable asking questions.",
          "This matters whether you are attending for family dentistry, cosmetic improvements, restorative care, or hygiene support.",
        ],
      },
      {
        heading: "Use the website properly before booking",
        body: [
          "Before choosing a clinic, it often helps to review treatments, case studies, testimonials, and fees together. This gives a much better sense of whether the clinic is aligned with your priorities.",
          "If the website feels clear and professionally structured, that often reflects the standard of communication you will receive as a patient.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Testimonials", href: "/testimonials" },
      { label: "Fees", href: "/fees" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "when-a-root-canal-may-be-the-right-treatment",
    title: "When a root canal may be the right treatment",
    excerpt:
      "A simple explanation of when root canal treatment may help relieve pain and save a natural tooth.",
    category: "Restorative Dentistry",
    readTime: "5 min read",
    image: "/news/root-canal.jpg",
    intro:
      "Root canal treatment is often feared more than it needs to be. In reality, it is usually considered when the aim is to relieve pain, manage infection-related issues, and preserve a natural tooth where possible.",
    sections: [
      {
        heading: "Root canal treatment is often about saving the tooth",
        body: [
          "Many patients assume root canal treatment is automatically a bad sign, but in many cases it is actually the treatment that prevents a more serious outcome. The goal is usually to address the internal problem affecting the tooth while preserving structure where appropriate.",
          "A clear diagnosis and explanation are essential, because symptoms can vary from severe pain to ongoing sensitivity or discomfort.",
        ],
      },
      {
        heading: "The right recommendation depends on the wider picture",
        body: [
          "Whether root canal treatment is the best route depends on the condition of the tooth, the surrounding support, the patient’s symptoms, and the long-term outlook. This is why consultation and assessment matter so much.",
          "Patients should feel that they understand both the immediate reason for treatment and the long-term implications.",
        ],
      },
      {
        heading: "Calm communication reduces unnecessary fear",
        body: [
          "One of the best ways to reduce anxiety around root canal treatment is clear explanation. Patients often cope much better when they understand what the treatment is aiming to achieve and why it has been recommended.",
          "If root canal treatment has been suggested, it can help to review restorative options, fees, and contact the clinic with any remaining questions.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Root Canal Treatment", href: "/treatments/root-canal-treatment" },
      { label: "Fees", href: "/fees" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function getNewsPostBySlug(slug: string) {
  return newsPosts.find(
    (post) => post.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );
}