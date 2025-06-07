# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Express.js.

## Features

- ✨ Modern, responsive design with dark/light theme support
- 🎵 Spotify playlist integration
- 📱 Social media links and contact information
- 💌 Newsletter subscription functionality
- 🎯 Project showcase with GitHub integration
- ⚡ Fast performance with Vite and optimized assets

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Database**: In-memory storage (easily replaceable with PostgreSQL)
- **UI Components**: Radix UI, Shadcn/ui
- **Deployment**: Vercel

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5000 in your browser

## Deployment to Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo)

### Manual Deployment

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Configuration

The project includes:
- `vercel.json` - Deployment configuration
- `api/` folder - Serverless API functions
- Build optimization for production

### Environment Variables

No environment variables are required for basic functionality. All data is stored in memory.

## API Endpoints

- `GET /api/profile` - Get profile information
- `GET /api/social-links` - Get social media links
- `GET /api/links` - Get portfolio links
- `POST /api/newsletter` - Subscribe to newsletter

## Project Structure

```
├── api/                    # Vercel serverless functions
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities and hooks
├── server/                # Express server (development)
├── shared/                # Shared types and schemas
└── vercel.json           # Vercel deployment config
```

## Customization

1. **Profile Information**: Edit `server/storage.ts` to update your profile data
2. **Social Links**: Modify the social links array in the storage file
3. **Portfolio Links**: Update the links array with your projects
4. **Styling**: Customize colors and themes in `client/src/index.css`
5. **Spotify Integration**: Update the playlist URL in `LinksSection.tsx`

## Performance

- Optimized bundle size with tree shaking
- Lazy loading of components
- Compressed assets
- CDN delivery via Vercel Edge Network

## Support

For issues or questions, please check the documentation or create an issue in the repository.