// Vercel serverless function entry point
import express from 'express';
import { registerRoutes } from './routes.js';

// Create a simple Express server for Vercel deployment
const app = express();
app.use(express.json());

// Add CORS headers for API routes
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Handle preflight requests
app.options('/api/*', (req, res) => {
  res.status(200).end();
});

// Register all routes
registerRoutes(app);

// Export the Express app as the default handler
export default app;