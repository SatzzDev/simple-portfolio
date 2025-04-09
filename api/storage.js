// Simple storage implementation for API functions
import { defaultProfile, defaultSocialLinks, defaultLinks } from '../client/src/data/links.js';

// Memory storage for Vercel deployment
class MemStorage {
  constructor() {
    this.profile = defaultProfile;
    this.socialLinks = defaultSocialLinks;
    this.links = defaultLinks;
    this.subscribers = new Map();
    this.subscriberId = 1;
  }

  async getProfile() {
    return this.profile;
  }

  async getSocialLinks() {
    return this.socialLinks;
  }

  async getLinks() {
    return this.links;
  }

  async addSubscriber({ email, name }) {
    const id = this.subscriberId++;
    const subscriber = { id, email, name };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }

  async getSubscriberByEmail(email) {
    for (const subscriber of this.subscribers.values()) {
      if (subscriber.email === email) {
        return subscriber;
      }
    }
    return undefined;
  }
}

export const storage = new MemStorage();