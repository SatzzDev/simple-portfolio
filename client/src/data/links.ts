// This is only used for development or if the backend is not available

import type { Profile, SocialLink, Link } from "@shared/schema";

export const defaultProfile: Profile = {
  id: 1,
  name: "Budi Santoso",
  bio: "Frontend Developer & UI/UX Designer dengan 5 tahun pengalaman. Spesialis dalam pembuatan website responsif dan aplikasi web modern.",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
  status: "available",
};

export const defaultSocialLinks: SocialLink[] = [
  {
    id: 1,
    platform: "GitHub",
    url: "https://github.com",
    icon: "github",
  },
  {
    id: 2,
    platform: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    id: 3,
    platform: "Dribbble",
    url: "https://dribbble.com",
    icon: "dribbble",
  },
  {
    id: 4,
    platform: "Email",
    url: "mailto:email@example.com",
    icon: "email",
  },
];

export const defaultLinks: Link[] = [
  {
    id: 1,
    title: "Proyek E-Commerce",
    description: "Website toko online responsif dengan React & Node.js",
    url: "https://github.com/portfolio/ecommerce",
    icon: "github",
    order: 1,
  },
  {
    id: 2,
    title: "Aplikasi Dashboard Admin",
    description: "Dashboard admin dengan visualisasi data real-time",
    url: "https://github.com/portfolio/admin-dashboard",
    icon: "link",
    order: 2,
  },
  {
    id: 3,
    title: "Desain UI Mobile App",
    description: "Desain UI/UX untuk aplikasi fintech",
    url: "https://dribbble.com",
    icon: "dribbble",
    order: 3,
  },
  {
    id: 4,
    title: "Website Portfolio Fotografi",
    description: "Website portfolio dengan animasi smooth & gallery interaktif",
    url: "https://github.com/portfolio/photography",
    icon: "github",
    order: 4,
  },
  {
    id: 5,
    title: "Hubungi Saya",
    description: "Diskusikan proyek atau lowongan pekerjaan",
    url: "mailto:email@example.com",
    icon: "email",
    order: 5,
  },
];