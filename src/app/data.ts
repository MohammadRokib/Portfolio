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
