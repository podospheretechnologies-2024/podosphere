# Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended)

**Easiest deployment for React apps:**

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   npm run build
   vercel --prod
   ```

Or connect your GitHub repository to Vercel for automatic deployments.

**Configuration:** The `vercel.json` file is already included for proper routing.

---

### Option 2: Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

Or drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop).

**Configuration:** Create `_redirects` file in public folder:
```
/*  /index.html  200
```

---

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

### Option 4: Traditional Hosting (cPanel, Apache, Nginx)

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` folder to your web server.

3. **Apache:** Create `.htaccess` file in the dist folder:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Nginx:** Add to your server configuration:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

---

## Environment Variables

Before deploying, set up your environment variables:

1. For Vercel:
   ```bash
   vercel env add VITE_API_URL
   ```

2. For Netlify:
   Go to Site settings > Build & deploy > Environment variables

3. For other platforms:
   Create `.env.production` file with your production variables.

---

## Pre-Deployment Checklist

- [ ] Test the production build locally: `npm run preview`
- [ ] Update API endpoints in environment variables
- [ ] Verify all images and assets load correctly
- [ ] Test all routes and navigation
- [ ] Check mobile responsiveness
- [ ] Test contact form submission
- [ ] Verify Google Maps integration
- [ ] Test portfolio image gallery
- [ ] Check all external links
- [ ] Verify SEO meta tags
- [ ] Test performance with Lighthouse

---

## Post-Deployment

1. **Test the live site thoroughly**
2. **Set up analytics** (Google Analytics, etc.)
3. **Configure custom domain** (if applicable)
4. **Set up SSL certificate** (automatic with Vercel/Netlify)
5. **Submit sitemap to Google Search Console**

---

## Continuous Deployment

### With GitHub Actions (Vercel)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
```

---

## Support

For deployment issues, contact:
- Email: info@podospheretechnologies.com
- Phone: +91 8595611983

