# GoDaddy Production Deployment Guide

## 🚀 Production Build Ready for GoDaddy

Your Angular app has been successfully built for production and is ready to deploy to GoDaddy hosting.

## 📁 Files to Upload

**Source Directory**: `dist/roxane-belanger-app/browser/`

Upload **ALL** files and folders from this directory to your GoDaddy hosting account's `public_html` folder (or your domain's root directory).

### Required Files:
```
├── .htaccess              ← CRITICAL: Angular routing support
├── index.html             ← Main application file
├── main-DFBKSFHW.js      ← Application code (optimized & minified)
├── polyfills-5CFQRCPP.js ← Browser compatibility
├── styles-SQYIIFDY.css   ← Optimized styles
├── favicon.ico           ← Website icon
├── 404.html              ← Custom 404 page
└── assets/               ← Images and other static assets
    └── images/
```

## 🔧 GoDaddy Deployment Steps

### Step 1: Access Your GoDaddy Hosting
1. Log into your GoDaddy account
2. Go to "My Products" → "Web Hosting"
3. Click "Manage" next to your hosting plan
4. Open "File Manager" or use FTP/SFTP

### Step 2: Clean the Destination
1. Navigate to your domain's root folder (usually `public_html`)
2. **Backup any existing files** if needed
3. Delete old website files (but keep any `.well-known` folders if they exist)

### Step 3: Upload Production Files
1. Upload **ALL** files from `dist/roxane-belanger-app/browser/` to your domain root
2. Ensure the `.htaccess` file is uploaded (it may be hidden in some file managers)
3. Maintain the folder structure, especially the `assets` folder

### Step 4: Verify Upload
Confirm these files are in your domain root:
- ✅ `index.html`
- ✅ `.htaccess`
- ✅ `main-DFBKSFHW.js`
- ✅ `polyfills-5CFQRCPP.js`
- ✅ `styles-SQYIIFDY.css`
- ✅ `assets/` folder with images

### Step 5: Test Your Website
1. Visit your domain (e.g., `https://yourdomain.com`)
2. Test navigation between pages (Home, About, Services, Contact, FAQ)
3. Verify images are loading correctly
4. Check that direct URLs work (e.g., `https://yourdomain.com/about`)

## 🔧 GoDaddy-Specific Configuration

### .htaccess File
The included `.htaccess` file is configured for Apache servers (which GoDaddy uses) and includes:
- ✅ Angular SPA routing support
- ✅ Gzip compression for faster loading
- ✅ Browser caching for better performance

### File Permissions
Most GoDaddy hosting plans automatically set correct permissions, but if needed:
- Files: 644
- Folders: 755
- .htaccess: 644

## 📊 Performance Optimizations Included

Your production build includes:
- ✅ **Minified JavaScript** (263 KB → 69 KB transfer)
- ✅ **Optimized CSS** (248 bytes)
- ✅ **Tree-shaking** (unused code removed)
- ✅ **Gzip compression** (via .htaccess)
- ✅ **Browser caching** (1 month for assets)
- ✅ **Filename hashing** (cache busting)

## 🌐 File Transfer Methods

### Option 1: GoDaddy File Manager (Recommended for beginners)
1. Use GoDaddy's web-based file manager
2. Zip the `browser` folder contents and upload the ZIP
3. Extract directly on the server

### Option 2: FTP/SFTP (Recommended for developers)
**Connection Details** (from your GoDaddy hosting panel):
- Host: Your FTP hostname
- Username: Your FTP username
- Password: Your FTP password
- Port: 21 (FTP) or 22 (SFTP)

### Option 3: Git-based Deployment
If your GoDaddy hosting supports Git, you can set up automatic deployments.

## 🚨 Important Notes

### Domain Configuration
- Ensure your domain DNS points to your GoDaddy hosting
- Allow 24-48 hours for DNS propagation if recently changed

### SSL Certificate
- Enable SSL/HTTPS in your GoDaddy hosting panel
- Your Angular app is configured to work with HTTPS

### .htaccess Visibility
- The `.htaccess` file starts with a dot, making it hidden
- Ensure your FTP client or file manager shows hidden files
- This file is CRITICAL for Angular routing to work properly

## 🔍 Troubleshooting

### If pages show 404 errors:
1. Verify `.htaccess` file is uploaded and in the root directory
2. Check that mod_rewrite is enabled (contact GoDaddy support if needed)

### If images don't load:
1. Verify the `assets` folder structure is maintained
2. Check file permissions (should be 644 for files, 755 for folders)

### If site doesn't load at all:
1. Verify `index.html` is in the domain root
2. Check file permissions
3. Look at error logs in GoDaddy hosting panel

## 📞 Support

If you encounter issues:
1. Check GoDaddy's hosting documentation
2. Contact GoDaddy technical support
3. Verify your hosting plan supports Angular/SPA applications

## 🎉 Deployment Checklist

- [ ] Production build completed successfully
- [ ] Backed up existing website (if any)
- [ ] Uploaded all files from `dist/roxane-belanger-app/browser/`
- [ ] Verified `.htaccess` file is present
- [ ] Tested main domain URL
- [ ] Tested direct page URLs (e.g., /about, /services)
- [ ] Verified images are loading
- [ ] Confirmed SSL/HTTPS is working
- [ ] Checked website on mobile devices

---

**Build Information:**
- Build Date: November 2, 2025
- Angular Version: 20.3.0
- Build Size: 298 KB (80.5 KB compressed)
- Output Directory: `dist/roxane-belanger-app/browser/`

Your website is now ready for production! 🚀