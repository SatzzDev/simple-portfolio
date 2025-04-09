// Simple API routes for Vercel deployment
import { storage } from './storage.js';

// API routes
export async function registerRoutes(app) {
  // Get profile
  app.get('/api/profile', async (req, res) => {
    try {
      const profile = await storage.getProfile();
      res.json(profile);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get social links
  app.get('/api/social-links', async (req, res) => {
    try {
      const socialLinks = await storage.getSocialLinks();
      res.json(socialLinks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get links
  app.get('/api/links', async (req, res) => {
    try {
      const links = await storage.getLinks();
      res.json(links);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Add subscriber
  app.post('/api/subscribers', async (req, res) => {
    try {
      const { email, name } = req.body;
      
      // Check if email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(email);
      if (existingSubscriber) {
        return res.status(400).json({ error: 'Email already subscribed' });
      }
      
      const subscriber = await storage.addSubscriber({ email, name });
      res.status(201).json(subscriber);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return app;
}