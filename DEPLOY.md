# Deploy to Vercel

## Quick Deployment Steps

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration
   - Click "Deploy"

3. **Alternative: Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```

## Configuration Details

The project includes:
- ✅ `vercel.json` - Optimized for React + API deployment
- ✅ `api/` folder - Serverless functions for backend
- ✅ Build optimization with Vite
- ✅ TypeScript support
- ✅ No environment variables required

## API Endpoints (Auto-deployed)

- `/api/profile` - Profile information
- `/api/social-links` - Social media links  
- `/api/links` - Portfolio links
- `/api/newsletter` - Newsletter subscription

## Troubleshooting

**Build Issues:**
- Ensure all dependencies are in `package.json`
- Check TypeScript compilation errors
- Verify API imports are correct

**API Issues:**
- Functions deploy automatically to `/api/*`
- Check function logs in Vercel dashboard
- Verify TypeScript types are exported correctly

**Performance:**
- Static assets served via CDN
- API functions cached appropriately
- Bundle size optimized with tree shaking

Your portfolio will be live at: `https://your-project-name.vercel.app`