// This is only used for development or if the backend is not available

import type { Profile, SocialLink, Link } from "@shared/schema";

export const defaultProfile: Profile = {
  id: 1,
  name: "Alex Morgan",
  bio: "Digital creator & content strategist. Sharing insights on technology, design, and creative work.",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
  status: "online",
};

export const defaultSocialLinks: SocialLink[] = [
  {
    id: 1,
    platform: "Instagram",
    url: "https://instagram.com",
    icon: "instagram",
  },
  {
    id: 2,
    platform: "Twitter",
    url: "https://twitter.com",
    icon: "twitter",
  },
  {
    id: 3,
    platform: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    id: 4,
    platform: "YouTube",
    url: "https://youtube.com",
    icon: "youtube",
  },
];

export const defaultLinks: Link[] = [
  {
    id: 1,
    title: "My YouTube Channel",
    description: "Tech reviews & tutorials",
    url: "https://youtube.com",
    icon: "youtube",
    order: 1,
  },
  {
    id: 2,
    title: "My Online Store",
    description: "Digital products & merch",
    url: "https://store.example.com",
    icon: "store",
    order: 2,
  },
  {
    id: 3,
    title: "My Podcast",
    description: "Weekly tech discussions",
    url: "https://podcast.example.com",
    icon: "podcast",
    order: 3,
  },
  {
    id: 4,
    title: "Latest E-Book",
    description: "Ultimate guide to content creation",
    url: "https://ebook.example.com",
    icon: "book",
    order: 4,
  },
  {
    id: 5,
    title: "Book a Consultation",
    description: "1-on-1 strategy sessions",
    url: "https://calendar.example.com",
    icon: "calendar",
    order: 5,
  },
];
