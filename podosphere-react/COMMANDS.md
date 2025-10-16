# Essential Commands Reference

## 🚀 Quick Commands

### Start Development Server
```bash
cd podosphere-react
npm run dev
```
**Opens at:** http://localhost:5173

### Build for Production
```bash
npm run build
```
**Output:** `dist/` folder

### Preview Production Build
```bash
npm run preview
```

---

## 📦 NPM Commands

```bash
# Install dependencies
npm install

# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Run linter
npm run lint
```

---

## 🌐 Deployment Commands

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🔧 Maintenance Commands

### Clear Cache
```bash
# Windows
rmdir /s /q node_modules dist
npm install

# Mac/Linux
rm -rf node_modules dist
npm install
```

### Update React & Dependencies
```bash
npm update react react-dom react-router-dom
```

### Check Bundle Size
```bash
npm run build
# Check dist/assets/index-*.js size
```

---

## 📝 Git Commands (if using version control)

```bash
# Initialize repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - React conversion"

# Add remote
git remote add origin <your-repo-url>

# Push
git push -u origin main
```

---

## 🐛 Troubleshooting Commands

### Port Already in Use
```bash
# Vite will auto-select another port
# Or specify custom port:
vite --port 3000
```

### Clear Vite Cache
```bash
# Windows
rmdir /s /q node_modules\.vite

# Mac/Linux
rm -rf node_modules/.vite
```

### Reset Everything
```bash
# Windows
rmdir /s /q node_modules dist package-lock.json
npm install

# Mac/Linux
rm -rf node_modules dist package-lock.json
npm install
```

---

## 📊 Analysis Commands

### Check Package Size
```bash
npm list --depth=0
```

### Security Audit
```bash
npm audit
npm audit fix
```

### Check for Vulnerabilities
```bash
npm audit --production
```

---

## 💡 Quick Tips

1. **Always run `npm install` after cloning**
2. **Use `npm run dev` for development**
3. **Test with `npm run build` before deploying**
4. **Keep dependencies updated monthly**
5. **Commit `package-lock.json` to git**

---

## 🎯 Development Workflow

```bash
# 1. Start development
npm run dev

# 2. Make changes (auto-reload active)

# 3. Test build
npm run build

# 4. Preview build
npm run preview

# 5. Deploy
vercel --prod  # or netlify deploy --prod
```

---

## 📞 Need Help?

Run into issues? Contact:
- 📧 info@podospheretechnologies.com
- 📱 +91 8595611983

