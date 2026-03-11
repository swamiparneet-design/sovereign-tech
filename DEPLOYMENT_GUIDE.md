# 🚀 SOVEREIGN TECH — DEPLOYMENT GUIDE

## ✅ PRE-DEPLOYMENT CHECKLIST

### 1. Build the Project
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

### 2. Preview Locally
```bash
npm run preview
```
Opens the production build on http://localhost:4173

---

## 🌐 DEPLOY TO VERCEL (RECOMMENDED)

### Option A: Vercel CLI (Fastest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Press Enter for all prompts
   - Your site will be live at `https://sovereign-tech.vercel.app`

3. **Add Custom Domain (Optional):**
   ```bash
   vercel domains add sovereigntech.io
   ```

### Option B: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Framework Preset: **Vite**
5. Deploy!

---

## 🖥️ SELF-HOSTED DEPLOYMENT (Hetzner/DigitalOcean)

### 1. Upload Build Files

```bash
# Build the project
npm run build

# Upload dist folder to server via SCP
scp -r dist/* user@your-server:/var/www/sovereigntech
```

### 2. Configure Nginx

Create `/etc/nginx/sites-available/sovereigntech`:

```nginx
server {
    listen 80;
    server_name sovereigntech.io www.sovereigntech.io;
    root /var/www/sovereigntech;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 3. Enable Site & Install SSL

```bash
sudo ln -s /etc/nginx/sites-available/sovereigntech /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Install SSL with Certbot
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d sovereigntech.io -d www.sovereigntech.io
```

---

## ⚡ CLOUDFLARE CDN SETUP (FOR GLOBAL SPEED)

### Why Cloudflare?
- 🌍 Faster load times worldwide (CDN in 275+ cities)
- 🛡️ DDoS protection
- 🔒 Free SSL/TLS
- ⚡ Automatic asset optimization

### Setup Steps:

1. **Create Account:**
   - Go to [cloudflare.com](https://cloudflare.com)
   - Sign up for free plan

2. **Add Your Site:**
   - Enter `sovereigntech.io`
   - Select Free plan

3. **Update Nameservers:**
   - Cloudflare will give you 2 nameservers
   - Update these at your domain registrar (GoDaddy, Namecheap, etc.)
   - Example:
     ```
     ns1.cloudflare.com
     ns2.cloudflare.com
     ```

4. **Enable Auto Minify:**
   - Go to Speed > Optimization
   - Enable: Auto Minify (HTML, CSS, JS)

5. **Enable Brotli Compression:**
   - Go to Speed > Optimization
   - Enable Brotli

6. **SSL/TLS Settings:**
   - Go to SSL/TLS
   - Set encryption mode to **Full (Strict)**

---

## 📊 GOOGLE ANALYTICS SETUP

1. **Get Tracking ID:**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create property for Sovereign Tech
   - Copy Measurement ID (G-XXXXXXXXXX)

2. **Add to index.html:**
   Replace the placeholder in `index.html` with your actual GA4 tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔍 GOOGLE SEARCH CONSOLE SUBMISSION

1. **Verify Ownership:**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: `sovereigntech.io`
   - Verify via DNS record or HTML file upload

2. **Submit Sitemap:**
   - Generate sitemap.xml using a tool like `sitemap.js`
   - Submit in Search Console under "Sitemaps"

3. **Request Indexing:**
   - Use URL Inspection tool
   - Request indexing for key pages

---

## 🎯 SEO OPTIMIZATION CHECKLIST

### Technical SEO:
- ✅ Meta tags added (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Mobile responsive design
- ✅ Fast page load (<3 seconds)
- ✅ HTTPS enabled
- ✅ XML sitemap created
- ✅ Robots.txt configured

### On-Page SEO:
- ✅ Target keywords in headings
- ✅ Alt text for images
- ✅ Internal linking between pages
- ✅ Schema markup (JSON-LD)
- ✅ Canonical URLs

### Content SEO:
- ✅ High-quality, original content
- ✅ Keywords naturally integrated
- ✅ Regular blog updates
- ✅ Long-form articles (1000+ words)

---

## 💰 PRICING FOR DEPLOYMENT

### Minimal Setup (~$50/year):
- Domain (.io): $12/year
- Vercel Hosting: FREE (Hobby plan)
- Cloudflare CDN: FREE
- Total: **$12/year**

### Professional Setup (~$200/year):
- Domain (.io): $12/year
- Vercel Pro: $20/month (for team features)
- Cloudflare Pro: $20/month (advanced features)
- Total: **$252/year**

### Self-Hosted (~$120/year):
- Domain: $12/year
- Hetzner VPS: €5/month (~$60/year)
- Total: **~$72/year**

---

## 🚀 POST-DEPLOYMENT TASKS

### 1. Test Everything:
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Mobile responsive on all devices
- [ ] Page load speed <3 seconds
- [ ] No console errors

### 2. Performance Testing:
Run these tests:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

Target scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### 3. Monitoring Setup:
- Set up uptime monitoring (UptimeRobot - free)
- Configure error tracking (Sentry - free tier)
- Enable Vercel Analytics (free)

---

## 🔧 TROUBLESHOOTING

### Issue: 404 on refresh
**Solution:** Add redirect rules for SPA routing (already configured in Nginx/Vercel)

### Issue: Slow load times
**Solution:** 
1. Enable Cloudflare CDN
2. Optimize images (convert to WebP)
3. Enable lazy loading

### Issue: CORS errors
**Solution:** Configure CORS headers in Vercel dashboard or Nginx config

---

## 📞 SUPPORT RESOURCES

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Vite Deployment:** [vitejs.dev/guide/static-deploy](https://vitejs.dev/guide/static-deploy.html)
- **Cloudflare Learning Center:** [cloudflare.com/learning](https://cloudflare.com/learning)

---

## 🎉 LAUNCH ANNOUNCEMENT TEMPLATE

Once deployed, announce on:

**LinkedIn:**
```
🚀 Excited to announce the launch of Sovereign Tech!

We're building autonomous AI systems that run 100% locally — 
no cloud dependency, no data leaks, complete sovereignty.

Check it out: https://sovereigntech.io

#AI #SovereignAI #LocalLLM #TechLaunch
```

**Twitter/X:**
```
🚀 Sovereign Tech is LIVE!

We Build AI That You Own.
Deploy Anywhere. Scale Forever.
Zero Cloud Dependency.

👉 https://sovereigntech.io

#AI #OpenSource #LocalLLM
```

---

**🔥 READY TO DEPLOY? RUN: `npm run build` AND LET'S GO!**
