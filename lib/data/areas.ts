export type AreaPage = {
  slug: string;
  name: string;
  county: string;
  intro: string;
  nearby: string[];
};

export const areaPages: AreaPage[] = [
  {
    slug: "burnley",
    name: "Burnley",
    county: "Lancashire",
    intro:
      "Patients in Burnley can access premium dental care from Worsthorne Dental Clinic, with a calm patient-first experience and a strong focus on family dentistry, cosmetic treatments, whitening, and restorative care.",
    nearby: ["Worsthorne", "Padiham", "Brierfield"],
  },
  {
    slug: "worsthorne",
    name: "Worsthorne",
    county: "Lancashire",
    intro:
      "Worsthorne Dental Clinic provides premium dental care in Worsthorne, combining a personal local feel with modern treatment options and clear, supportive guidance.",
    nearby: ["Burnley", "Cliviger", "Padiham"],
  },
  {
    slug: "padiham",
    name: "Padiham",
    county: "Lancashire",
    intro:
      "Patients in Padiham looking for a trusted private dental clinic can explore treatment options at Worsthorne Dental Clinic, including family dentistry, implants, cosmetic dentistry, and teeth whitening.",
    nearby: ["Burnley", "Worsthorne", "Hapton"],
  },
  {
    slug: "colne",
    name: "Colne",
    county: "Lancashire",
    intro:
      "Worsthorne Dental Clinic welcomes patients from Colne seeking premium dental treatments, clear communication, and a modern private clinic experience.",
    nearby: ["Nelson", "Burnley", "Barrowford"],
  },
  {
    slug: "nelson",
    name: "Nelson",
    county: "Lancashire",
    intro:
      "Patients from Nelson can explore a full range of dental treatments at Worsthorne Dental Clinic, from preventive family dentistry to cosmetic and restorative care.",
    nearby: ["Colne", "Burnley", "Brierfield"],
  },
  {
    slug: "blackburn",
    name: "Blackburn",
    county: "Lancashire",
    intro:
      "Worsthorne Dental Clinic supports patients from Blackburn who want a premium dental experience, modern treatments, and a calm, professional environment.",
    nearby: ["Darwen", "Accrington", "Burnley"],
  },
  {
    slug: "preston",
    name: "Preston",
    county: "Lancashire",
    intro:
      "Patients in Preston looking for trusted dental care in Lancashire can explore treatments, fees, and consultation options with Worsthorne Dental Clinic.",
    nearby: ["Leyland", "Chorley", "Blackburn"],
  },
  {
    slug: "manchester",
    name: "Manchester",
    county: "Greater Manchester",
    intro:
      "Worsthorne Dental Clinic is a strong option for patients in Manchester seeking a premium treatment-led clinic with a patient-first approach and clearly explained care.",
    nearby: ["Salford", "Bolton", "Bury"],
  },
  {
    slug: "bolton",
    name: "Bolton",
    county: "Greater Manchester",
    intro:
      "Patients in Bolton can explore premium dental treatments with Worsthorne Dental Clinic, including cosmetic dentistry, whitening, family dentistry, and restorative care.",
    nearby: ["Manchester", "Bury", "Wigan"],
  },
  {
    slug: "wigan",
    name: "Wigan",
    county: "Greater Manchester",
    intro:
      "Worsthorne Dental Clinic welcomes patients from Wigan who are looking for modern dental treatments, supportive consultations, and a premium clinic feel.",
    nearby: ["Bolton", "Preston", "Manchester"],
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    county: "Merseyside",
    intro:
      "Patients from Liverpool looking for premium dental treatments in the North West can explore treatment options, fees, and case studies with Worsthorne Dental Clinic.",
    nearby: ["Bootle", "Wirral", "St Helens"],
  },
  {
    slug: "chester",
    name: "Chester",
    county: "Cheshire",
    intro:
      "Worsthorne Dental Clinic is a premium option for patients in Chester who want a calm and modern dental experience with clear treatment planning and supportive care.",
    nearby: ["Ellesmere Port", "Warrington", "Liverpool"],
  },
];

export function getAreaBySlug(slug: string) {
  return areaPages.find((area) => area.slug === slug);
}