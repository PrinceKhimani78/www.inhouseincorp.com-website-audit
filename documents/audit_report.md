# WEBSITE PERFORMANCE & DIGITAL PRESENCE AUDIT

**Prepared For:** InHouse Incorp
**Prepared By:** Mutant Technologies
[www.mutanttechnologies.com](http://www.mutanttechnologies.com)
**Date:** 26/06/2026

---

# Executive Summary

Thank you for the opportunity to review your website.

We analyzed your website from the perspective of a potential customer and evaluated its performance across design, user experience, speed, SEO, mobile responsiveness, security, and conversion optimization.

Overall, your website provides a professional first impression, but several technical and user experience issues are likely impacting search visibility, visitor trust, and conversion rates. Addressing these areas can improve loading speed, strengthen your online credibility, increase organic traffic, and generate more qualified business inquiries.

---

# Immediate Critical Issues

During our audit, we identified a few issues that should be addressed as soon as possible:

* **Staging Domain Link Leaks:** Hardcoded external staging links (e.g. `nimeshdetroja.co.in`) are still active on the live website, redirecting users to an insecure testing environment.
* **Mixed Content Warnings:** Staging assets (like the main header logo) are loaded over insecure HTTP, triggering security warning flags in modern web browsers.
* **Broken Blog Page Grid Layout:** The main blog list page grid breaks visually, creating a single card list on the left with a massive blank white block on the right, damaging brand perception.
* **Incorrect Heading Hierarchy:** The primary H1 SEO tag on the homepage is assigned to the word "Blogs" instead of target business keywords.
* **Mobile Speed Delays:** Mobile performance falls well below Google's recommended Core Web Vitals thresholds (taking up to 11.0 seconds for Largest Contentful Paint).

---

# Overall Website Score

## Digital Scorecard

```
Design              ████████░░ 8/10
SEO                 █████░░░░░ 5/10
Performance         █████░░░░░ 5/10
Security            ████░░░░░░ 4/10
Mobile              █████░░░░░ 5/10
Conversions         ██████░░░░ 6/10
```

**Overall Score:** 5.5 / 10 (Needs Action)

---

# Website Technology Overview

| Item                | Details |
| ------------------- | ----------------- |
| Website Platform    | WordPress v6.8.2 |
| CMS                 | WordPress |
| Theme / Framework   | Transportex / Elementor Page Builder |
| Hosting             | Apache Server |
| SSL Certificate     | Active (Incomplete - Loads insecure staging assets over HTTP) |
| CDN                 | None Active |
| Analytics Installed | Yes (Google Analytics 4 / Tag Manager: `G-WGQESH8JH1`) |
| Sitemap             | Yes (Rank Math: `https://www.inhouseincorp.com/sitemap_index.xml`) |
| Robots.txt          | Yes (Points to HTTP sitemap version instead of HTTPS) |

---

# Design & Branding Review

![Homepage Hero](/Users/princekhimani/.gemini/antigravity-ide/scratch/inhouse-audit/images/homepage_hero.png)

## What Works Well

* **Professional Color Palette:** Classic corporate blue (`#203a71`) conveys trust and fits the supplier sourcing business sector.
* **Readable Typography:** Seamless use of Poppins and Roboto sans-serif fonts.
* **Desktop Structure:** Top navigation headers are clearly visible and readable.

## Opportunities for Improvement

* **Broken Blog Feed Page Grid:** The `/blog/` page grid breaks completely, placing single cards in a thin left-column while the right side of the screen is empty.
  
  ![Broken Blog Layout](/Users/princekhimani/.gemini/antigravity-ide/scratch/inhouse-audit/images/broken_blog.png)

* **Unblended Logo Box:** The company logo in the header has a white background bounding box that clashes with the gray-blue header line.
  
  ![Logo Bounding Box Clashing](/Users/princekhimani/.gemini/antigravity-ide/scratch/inhouse-audit/images/logo_clash.png)

* **Staging URL Asset Leak:** The main logo is sourced from an external developer domain (`http://nimeshdetroja.co.in/inhouse/`) over insecure HTTP rather than live HTTPS assets.

---

# User Experience (UX)

### Navigation

✔ Easy to navigate on desktop.

✔ Services menus are structured logically.

✔ Phone and email contact channels are easily accessible.

### Areas for Improvement

* **Staging Link Leaks:** The menu link for "Industries We Serve" directs users to the developer's staging site: `http://nimeshdetroja.co.in/inhouse/industries-we-serve/`. This breaks the customer journey, sending potential clients to an unsecure, unbranded staging environment.
* **Mobile Dropdown Interaction:** On mobile viewports, clicking the text of menu items does not open sub-menus; users are forced to click a tiny arrow icon on the far right. This is highly error-prone.
* **Exposed Developer Profile:** The author archive exposes the administrator's username `nimesh` via URLs (`/author/nimesh/`), creating an entry point for brute-force logins.

---

# Website Speed Analysis

![PageSpeed Mobile Score](/Users/princekhimani/.gemini/antigravity-ide/scratch/inhouse-audit/images/pagespeed_mobile.png)

### Desktop Performance

Score: **67 / 100** (Needs Improvement)

### Mobile Performance

Score: **50 / 100** (Poor)

![PageSpeed Desktop Score](/Users/princekhimani/.gemini/antigravity-ide/scratch/inhouse-audit/images/pagespeed_desktop.png)

### Core Web Vitals

| Metric                          | Result (Mobile) | Result (Desktop) | Status |
| ------------------------------- | :-------------: | :--------------: | :----: |
| First Contentful Paint (FCP)    | 6.2s            | 1.3s             | Poor   |
| Largest Contentful Paint (LCP)  | 11.0s           | 1.4s             | Poor   |
| Total Blocking Time (TBT)       | 320ms           | 50ms             | Needs Imp. |
| Cumulative Layout Shift (CLS)   | 0.087           | 0.012            | Good   |
| Speed Index                     | 6.7s            | 2.5s             | Poor   |

![PageSpeed Metrics Detail](/Users/princekhimani/.gemini/antigravity-ide/scratch/inhouse-audit/images/pagespeed_metrics.png)

### Recommendations

* Defer non-critical stylesheets and jQuery plugin scripts.
* Cache static assets (fonts, images) to prevent reload downloads.
* Convert homepage JPG/PNG images to modern next-gen formats (WebP).
* Configure `font-display: swap` to prevent blank spaces while custom fonts load.

---

# Mobile Responsiveness

![Mobile Sizing Viewport](/Users/princekhimani/.gemini/antigravity-ide/scratch/inhouse-audit/images/mobile_responsiveness.png)

## Review

* **Responsive Sizing:** Grid columns scale down, but elements overlap in headers.
* **Text Sizing:** Heading fonts wrap into multiple lines on standard mobile sizes.
* **Touch Targets:** Buttons and submenu arrows are small, leading to mis-clicks.

---

# SEO Audit

## Technical SEO

| Check          | Status | Notes |
| -------------- | ------ | ----- |
| HTTPS          | Incomplete | Valid SSL, but mixed content warnings active on main logo asset. |
| Sitemap        | Active | Live sitemaps found at `/page-sitemap.xml` and `/post-sitemap.xml`. |
| Robots.txt     | Active | Pointing to HTTP sitemap version instead of HTTPS. |
| Canonical Tags | Active | Pointing correctly to HTTPS live domain. |
| Schema Markup  | Active | Rank Math Organization and Place schema scripts detected. |
| Meta Robots    | Active | Properly configured to index and follow. |
| Broken Links   | Present | Multiple staging URLs active. |

---

## On-Page SEO

| Element           | Status | Notes |
| ----------------- | :----: | ----- |
| Page Titles       | Poor | Homepage title is 109 characters (Google truncates titles over 60). |
| Meta Descriptions | Good | Present and within normal limits (154 characters). |
| Heading Structure | Poor | Single H1 on home is "Blogs". Hero title is marked as H2. |
| Image Alt Text    | Poor | 13 out of 19 images on the homepage lack alt descriptions. |
| Internal Linking  | Good | Robust count of internal links (139 links). |

---

## Keyword Rankings & Traffic

![Semrush SEO Traffic Overview](/Users/princekhimani/.gemini/antigravity-ide/scratch/inhouse-audit/images/semrush_traffic.png)

### Organic Visibility Metrics

* **Estimated Monthly Traffic:** 0
* **Ranking Keywords:** 6
* **Total Backlinks:** 382
* **Domain Authority:** 2 / 100

![Semrush Organic Keywords Rankings](/Users/princekhimani/.gemini/antigravity-ide/scratch/inhouse-audit/images/semrush_keywords.png)

### Ranking Positions

| Keyword | Position | Volume |
| ------- | :------: | :----: |
| ceramic city of india | 11 | 210 |
| tiles defect | 36 / 67 | 590 |
| inhouse team | 45 | 110 |
| due to inspection of components... | 70 | 390 |

---

# Security Review

| Item               | Status | Notes |
| ------------------ | :----: | ----- |
| SSL Certificate    | Active | Fully valid and signed. |
| HTTPS Redirect     | Active | HTTP requests direct correctly to HTTPS. |
| Security Headers   | Poor   | Missing CSP, X-Frame-Options, X-Content-Type-Options. HSTS is set to a weak 300s. |
| Mixed Content      | Present|Sourcing logo asset from insecure HTTP staging server. |
| CAPTCHA Protection | Missing|Contact forms are vulnerable to spambots. |
| User enumeration   | Exposed|Admin username `nimesh` visible on public author endpoints. |

---

# Conversion Optimization

## Current Strengths

* Floating WhatsApp button is active.
* Clear lead capture forms present.

## Recommended Improvements

* Remove white backgrounds from branding assets.
* Integrate trust badges (ISO Certification symbol, Client logos strip).
* Add verified user reviews / Google ratings on the home page.
* Add user avatar headshots on testimonials.

---

# Business Impact Table

| Issue | Business Impact | Priority |
| :--- | :--- | :---: |
| **Mixed Content** | Reduces visitor trust and triggers browser security warnings. | **High** |
| **Broken Blog Layout** | Creates an unprofessional first impression of brand quality. | **High** |
| **Slow Mobile Speed** | Leads to higher bounce rates and fewer client form inquiries. | **High** |
| **Staging URL Links** | Breaks user navigation flow, leading customers off-site. | **High** |
| **Wrong Homepage H1** | Restricts organic ranking potential for core service keywords. | **Medium** |
| **Missing Alt Tags** | Limits image search performance and accessibility rankings. | **Medium** |
| **Weak Security Headers** | Increases site vulnerability to XSS and login brute-forcing. | **Medium** |

---

# Competitor Comparison

| Feature | Your Website | Competitor Standard |
| ------- | :---: | :---: |
| Website Speed | Mobile: 50 / Desktop: 67 | Mobile: 80+ / Desktop: 90+ |
| Mobile Experience | Broken grid, small targets | Scaled responsive grid grids |
| SEO | DA 2, 6 keywords, 0 traffic | DA 15+, 100+ keywords, 1k+ traffic |
| Design | Standard page builder, white background boxes | High-end custom blended branding |
| Conversion Signals | Plain text reviews, hidden ISO link | Active client logo grids, verified trust badges |

---

# Quick Wins (1–3 Days)

* [ ] Point all staging links (`nimeshdetroja.co.in`) to the live domain.
* [ ] Replace the insecure header logo image asset with a transparent local HTTPS version.
* [ ] Correct the homepage H1 markup tags (change from "Blogs" to main header).
* [ ] Set appropriate image alt tags on homepage assets.
* [ ] Configure browser caching parameters (expiration rules) for JS, CSS, and font files.
* [ ] Compress large homepage background image files.

---

# 30-Day Action Plan

## Week 1
* Technical URL configuration corrections.
* Resolve mixed-content Warnings.
* Disable public author username directory archives.

## Week 2
* Repair Elementor blog loop grid layouts.
* Clean logo background styling rules.
* Adjust mobile menu arrow tap zones.

## Week 3
* SEO title optimizations.
* Homepage alt tags injection.
* Robots sitemap address correction.

## Week 4
* Enable GZip/Brotli compression server-side.
* Configure static cache lifespans.
* Convert assets to WebP file types.

---

# Conclusion

Your website already has a solid foundation, but several technical and UX issues are preventing it from performing at its full potential.

By addressing the recommendations in this report, you can expect:

* Improved search engine visibility
* Faster page loading times
* Better mobile experience
* Stronger brand credibility
* Increased lead generation
* Higher conversion rates

Many of these improvements can be implemented within a few weeks and will provide long-term benefits for your digital presence.

---

# Disclaimer

*Disclaimer: This audit is based on publicly accessible information and automated analysis tools. Some findings may require backend or server-level access for complete verification.*

---

## Next Steps

We'd be happy to walk you through these findings in a 30-minute call, explain the impact of each recommendation, and provide a roadmap tailored to your business goals.

If you'd like us to implement these improvements, we can prepare a detailed scope of work and timeline based on your priorities.
