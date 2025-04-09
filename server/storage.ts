import { 
  users, 
  type User, 
  type InsertUser,
  type Profile,
  type SocialLink,
  type Link,
  type InsertSubscriber,
  type Subscriber
} from "@shared/schema";
import { defaultProfile, defaultSocialLinks, defaultLinks } from "@/data/links";

export interface IStorage {
  // User methods (kept for compatibility)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Profile methods
  getProfile(): Promise<Profile>;
  
  // Social link methods
  getSocialLinks(): Promise<SocialLink[]>;
  
  // Link methods
  getLinks(): Promise<Link[]>;
  
  // Subscriber methods
  addSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private profile: Profile;
  private socialLinks: SocialLink[];
  private links: Link[];
  private subscribers: Map<number, Subscriber>;
  
  currentId: number;
  subscriberId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
    this.subscriberId = 1;
    this.subscribers = new Map();
    
    // Initialize with default data
    this.profile = defaultProfile;
    this.socialLinks = defaultSocialLinks;
    this.links = defaultLinks;
  }

  // User methods (kept for compatibility)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Profile methods
  async getProfile(): Promise<Profile> {
    return this.profile;
  }
  
  // Social link methods
  async getSocialLinks(): Promise<SocialLink[]> {
    return this.socialLinks;
  }
  
  // Link methods
  async getLinks(): Promise<Link[]> {
    return this.links;
  }
  
  // Subscriber methods
  async addSubscriber(data: InsertSubscriber): Promise<Subscriber> {
    // Check if email already exists
    const existingSubscriber = await this.getSubscriberByEmail(data.email);
    if (existingSubscriber) {
      throw new Error("Email already exists");
    }
    
    const id = this.subscriberId++;
    const subscriber: Subscriber = { ...data, id };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
  
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }
}

export const storage = new MemStorage();
