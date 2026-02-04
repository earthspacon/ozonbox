# Next Sitemap Configuration

## Overview

This project uses `next-sitemap` to automatically generate XML sitemaps and robots.txt file for SEO purposes.

## Configuration

The sitemap is configured in `next-sitemap.config.js` with the following settings:

### Key Configuration Options

- **siteUrl**: Base URL for the site (set via `SITE_URL` environment variable or defaults to `https://example.com`)
- **generateRobotsTxt**: Automatically generates a `robots.txt` file
- **exclude**: Pages excluded from the sitemap (admin, private, error pages)
- **changefreq**: How often pages change (`weekly` by default)
- **priority**: Priority for search engines (`0.7` by default)
- **trailingSlash**: Adds trailing slash to URLs (matches your Next.js config)
- **autoLastmod**: Automatically tracks last modification time

## Build Process

The sitemap is generated automatically when you run:

```bash
npm run build
```

The build script is configured in `package.json`:
```json
"build": "next build && next-sitemap"
```

This ensures:
1. Next.js builds your static site to the `out/` directory
2. next-sitemap scans the `out/` directory and generates:
   - `sitemap.xml` - XML sitemap for search engines
   - `robots.txt` - Robots file with sitemap reference

## Generated Files

After running `npm run build`, you'll find:
- `out/sitemap.xml` - The main sitemap
- `out/robots.txt` - Robots configuration

## Environment Variables

Set the `SITE_URL` environment variable to specify your site's URL:

```bash
SITE_URL=https://yourdomain.com npm run build
```

## Customization

To customize the sitemap:

1. Edit `next-sitemap.config.js`
2. Modify any of these options:
   - Add paths to `exclude` to skip pages
   - Change `changefreq` for update frequency
   - Adjust `priority` for relative page importance
   - Add custom policies to `robotsTxtOptions`

## Verification

After building, you can verify:
- Open `out/sitemap.xml` in your browser or text editor
- Check `out/robots.txt` for proper configuration
- Ensure your site URL is correctly set in both files

## Resources

- [next-sitemap Documentation](https://www.npmjs.com/package/next-sitemap)
- [XML Sitemap Best Practices](https://www.sitemaps.org/)
- [Robots.txt Guide](https://developers.google.com/search/docs/crawling-indexing/robots-txt)
