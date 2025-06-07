// This is only used for development or if the backend is not available

import type { Profile, SocialLink, Link } from "@shared/schema";

export const defaultProfile: Profile = {
  id: 1,
  name: "Kurniawan Satria",
  bio: "Full-stack developer & tech enthusiast. Specializing in Node.js backends and RESTful APIs with a passion for creating useful tools.",
  avatar: "https://github.com/KurniawanSatria/SIMPLEEEEEE/blob/main/src/PFP.jpg?raw=true",
  status: "available",
};

export const defaultSocialLinks: SocialLink[] = [
  {
    id: 1,
    platform: "Instagram",
    url: "https://instagram.com/krniwnstria",
    icon: "instagram",
  },
  {
    id: 2,
    platform: "Telegram",
    url: "https://t.me/krniwnstria",
    icon: "telegram",
  },
  {
    id: 3,
    platform: "WhatsApp",
    url: "https://wa.me/6282170988479",
    icon: "whatsapp",
  },
];

export const defaultLinks: Link[] = [
  {
    id: 1,
    title: "Telegram Channel",
    description: "Tech reviews & tutorials",
    url: "https://t.me/SatzzDev",
    icon: "telegram",
    order: 1,
  },
  {
    id: 2,
    title: "My REST API",
    description: "API service for application integration",
    url: "https://api.satzzdev.xyz",
    icon: "api",
    order: 2,
  },
];
