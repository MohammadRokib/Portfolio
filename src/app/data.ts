export interface Profile {
  name: string;
  role: string;
  company: string;
}

export const PROFILE: Profile = {
  name: 'Md. Rokib Khan',
  role: 'Software Engineer',
  company: 'LeadSoft Bangladesh Limited',
};

export interface SocialLink {
  label: string;
  href: string;
}

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/MohammadRokib' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/m0hammadrokib/' },
];

export interface Highlight {
  label: string;
  detail: string;
}

export const ABOUT_PARAGRAPHS: string[] = [
  `I'm Md. Rokib Khan — a software engineer from Dhaka, Bangladesh. I work at LeadSoft Bangladesh Limited, building and maintaining enterprise capital-market software that brokers and merchant banks rely on every day.`,
  `My home turf is the JVM world: Java and Spring Boot on the backend, Oracle ADF for enterprise screens, and JavaFX for desktop tooling. What I enjoy most is finding slow, manual workflows and turning them into one-click automated processes.`,
];

export const ABOUT_HIGHLIGHTS: Highlight[] = [
  {
    label: 'DeploySync',
    detail:
      " — designed and shipped a self-contained Java/Spring Boot/JavaFX desktop tool that automates patching the client's Oracle ADF .ear; adopted by the support team.",
  },
  {
    label: '1000x+ speedup',
    detail:
      ' — replaced row-by-row Oracle ADF View Object inserts with batched JDBC prepared-statement commits for charge file uploads.',
  },
  {
    label: 'Journal Voucher redesign',
    detail:
      ' — reworked the approval screen to allow inline editing of pending vouchers, eliminating full reject-and-repost cycles.',
  },
  {
    label: 'Full client migration',
    detail:
      ' — led a legacy-to-new system migration, correcting inconsistencies across 1 million+ records with >95% accuracy.',
  },
];

export interface ServiceCard {
  title: string;
  text: string;
}

export const SERVICES: ServiceCard[] = [
  {
    title: 'Backend development',
    text: 'Spring Boot services, REST APIs and batch JDBC processing that move millions of records without breaking a sweat.',
  },
  {
    title: 'Enterprise applications',
    text: 'Oracle ADF modules, BI Publisher reports and approval workflows for capital-market software.',
  },
  {
    title: 'Desktop tooling',
    text: 'Self-contained JavaFX tools like DeploySync that automate patching and deployment of Oracle ADF apps to WebLogic.',
  },
  {
    title: 'Web development',
    text: 'Responsive frontends with React and Tailwind — and now Angular, which powers this very site.',
  },
];

export interface Project {
  title: string;
  tech: string[];
  description: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'DeploySync',
    tech: ['Java', 'Spring Boot', 'JavaFX'],
    description:
      "A self-contained desktop tool that automates patching of Oracle ADF .ear releases across nested archives — replacing a fully manual extract-and-paste release process. Adopted by LeadSoft's support team.",
    link: 'https://github.com/MohammadRokib/DeploySync',
  },
  {
    title: 'JSON Parser',
    tech: ['Java'],
    description:
      'A from-scratch JSON parser and lexer in plain Java — tokenizer, recursive-descent parsing and friendly error messages. Zero dependencies.',
    link: 'https://github.com/MohammadRokib/json-parser-java',
  },
  {
    title: 'WC Tool',
    tech: ['Java'],
    description:
      'A Java implementation of the classic Unix wc command-line tool — counts lines, words and characters from files or stdin.',
    link: 'https://github.com/MohammadRokib/wc-tool-java',
  },
  {
    title: 'This Portfolio',
    tech: ['Angular', 'TypeScript', 'CSS'],
    description:
      'A portfolio built with Angular standalone components and signals, from the ground up. You are looking at it.',
    link: 'https://github.com/MohammadRokib/Portfolio',
  },
];
