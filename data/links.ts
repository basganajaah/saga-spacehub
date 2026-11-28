export type IconName =
  | "user"
  | "github"
  | "folder"
  | "linkedin"
  | "file"
  | "mail"
  | "instagram"
  | "book";

export type Tone = "slate" | "blue" | "green" | "plum" | "olive";

export interface HubLink {
  id: string;
  label: string;
  description?: string;
  href: string;
  icon: IconName;
  tone: Tone;
  external: boolean;
  /** Grid columns spanned on desktop (12-col grid) and mobile (2-col grid). */
  span: { desktop: number; mobile: number };
}

export interface MiniLink {
  id: string;
  label: string;
  href: string;
  icon: IconName;
}

export const profile = {
  fullName: "Bandyaga Adiansyah Sugandi",
  displayName: "Basgan",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Engineer",
    "UI/UX Designer",
    "Software Tester",
  ],
  tagline:
    "A little corner of the internet where you can find everything about me.",
  location: "Indonesia",
  timeZone: "Asia/Jakarta",
  availability: "Open to New Opportunities",
  email: "bandyagaadiansyah@gmail.com",
};

/** Main bento tiles. Desktop order = DOM order; spans must add up to 12 per row. */
export const links: HubLink[] = [
  {
    id: "about",
    label: "My Portofolio",
    description: "Who I am, my background and journey.",
    href: "https://your-basganajaah.vercel.app/en",
    icon: "user",
    tone: "slate",
    external: true,
    span: { desktop: 8, mobile: 2 },
  },
  {
    id: "github",
    label: "GitHub",
    description: "@basganajaah",
    href: "https://github.com/basganajaah",
    icon: "github",
    tone: "blue",
    external: true,
    span: { desktop: 4, mobile: 1 },
  },
  {
    id: "projects",
    label: "Projects",
    description: "Things I've built.",
    href: "https://github.com/basganajaah?tab=repositories",
    icon: "folder",
    tone: "green",
    external: true,
    span: { desktop: 4, mobile: 1 },
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Professional profile & connections.",
    href: "https://www.linkedin.com/in/bandyagaadiansyah/",
    icon: "linkedin",
    tone: "plum",
    external: true,
    span: { desktop: 8, mobile: 2 },
  },
  {
    id: "resume",
    label: "Resume / CV",
    description: "Explore my professional experience.",
    href: "https://drive.google.com/file/d/1N-V-NEyuWU1Gs_aWYxeRQ7zCuS7saRVb/view?usp=drive_link",
    icon: "file",
    tone: "slate",
    external: true,
    span: { desktop: 8, mobile: 1 },
  },
  {
    id: "contact",
    label: "Contact",
    description: "Hire me and Let's Collaborate.",
    href: `mailto:${profile.email}`,
    icon: "mail",
    tone: "olive",
    external: false,
    span: { desktop: 4, mobile: 1 },
  },
];

/** Small extra links shown in the footer. Add or remove freely. */
export const extraLinks: MiniLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/bndyaasgan_",
    icon: "instagram",
  },
  {
    id: "blog",
    label: "Blog",
    href: "https://medium.com/@manusiapanda",
    icon: "book",
  },
];
