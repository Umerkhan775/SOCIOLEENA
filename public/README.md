# Public Assets Organization

This project uses a structured approach to organize static assets in the `public` folder.

## Folder Structure

```
public/
├── images/
│   ├── brands/          # Brand logos and company images
│   ├── logos/           # Main logo files and brand identities
│   ├── testimonials/    # Client testimonial photos
│   └── work/            # Portfolio and work sample images
├── robots.txt           # Search engine crawling instructions
├── sitemap.xml          # Site structure for search engines
├── manifest.json        # PWA configuration
├── .htaccess           # Apache server configuration
├── _headers            # Security and caching headers (Netlify/Vercel)
├── _redirects          # URL redirects (Netlify)
├── index-fallback.html # Fallback HTML page
├── favicon-placeholder.txt # Favicon instructions
└── README.md           # This documentation
```

## Important Files Added

### SEO & Search Engines
- **`robots.txt`**: Instructions for search engine crawlers
- **`sitemap.xml`**: Complete site structure for better indexing

### PWA & App Features
- **`manifest.json`**: Progressive Web App configuration with theme colors and icons

### Server Configuration
- **`.htaccess`**: Apache server rules for compression, caching, and security
- **`_headers`**: Security headers and caching rules for Netlify/Vercel
- **`_redirects`**: URL redirection rules for Netlify deployments

### Fallback & Maintenance
- **`index-fallback.html`**: SEO-optimized HTML fallback with structured data
- **`favicon-placeholder.txt`**: Instructions for adding favicon

## How to Add Images

1. **Place your images** in the appropriate subfolder under `public/images/`
2. **Reference them in code** using the path `/images/[subfolder]/[filename]`

### Examples:

```javascript
// Logo in logos folder
logo: "/images/logos/your-logo.jpg"

// Brand image in brands folder
image: "/images/brands/company-logo.png"

// Testimonial photo
photo: "/images/testimonials/client-photo.jpg"

// Work sample
workImage: "/images/work/project-screenshot.png"
```

## Current Assets

- **Logos**: 8 brand logo files (logo 1.png through logo 8.png)
- **Brands**: MUDASSIR SOFTWORKS, LURE, Muqeezayan logos assigned
- **SEO**: robots.txt and sitemap.xml configured
- **PWA**: manifest.json ready for app-like experience

## File Naming Convention

- Use descriptive names: `company-name-logo.jpg`
- Avoid spaces in filenames (use hyphens or underscores)
- Keep file sizes optimized for web (under 500KB per image)
- Use appropriate formats: JPG for photos, PNG for logos with transparency

## Deployment Notes

- **Netlify/Vercel**: Uses `_headers` and `_redirects` automatically
- **Apache servers**: Uses `.htaccess` for configuration
- **Other platforms**: May need manual header/security configuration

## Next Steps

1. Replace `favicon-placeholder.txt` with actual favicon.ico
2. Add your logo to `/images/logos/` and update manifest.json icon paths
3. Update sitemap.xml URLs to match your actual domain
4. Customize manifest.json with your app details
5. Add actual images to replace placeholder paths in components