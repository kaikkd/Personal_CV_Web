export type Locale = "en" | "zh";

export type Project = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  links: { label: string; href: string }[];
  accent: "violet" | "cyan" | "amber";
  media: { src: string; alt: string; caption: string };
};

export type PortfolioContent = {
  locale: Locale;
  languageLabel: string;
  identity: {
    name: string;
    role: string;
    location: string;
    affiliation: string;
    email: string;
    github: string;
    linkedin: string;
  };
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    experience: string;
    education: string;
    skills: string;
    research: string;
    contact: string;
    menu: string;
  };
  hero: {
    status: string;
    kicker: string;
    title: string;
    description: string;
    viewWork: string;
  };
  signal: {
    label: string;
    items: string[];
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    viewCase: string;
  };
  projects: Project[];
  experience: {
    eyebrow: string;
    title: string;
    roles: {
      period: string;
      role: string;
      company: string;
      location: string;
      organizationId: "tiktok" | "largev";
      highlights: string[];
    }[];
    educationLabel: string;
    education: {
      period: string;
      degree: string;
      school: string;
      location: string;
      organizationId: "ucsd" | "bjfu";
      honors?: string[];
    }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: {
      label: string;
      items: string[];
    }[];
  };
  research: {
    eyebrow: string;
    title: string;
    description: string;
    publications: {
      index: string;
      title: string;
      venue: string;
      role: string;
      result: string;
      href: string;
      linkLabel: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
  };
  projectPage: {
    back: string;
    challenge: string;
    solution: string;
    result: string;
    stack: string;
    next: string;
  };
  footer: string;
};
