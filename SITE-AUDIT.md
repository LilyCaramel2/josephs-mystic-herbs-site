# Joseph's Mystic Herbs — Site Audit

**Audit date:** 14 October 2026  
**Repository:** `LilyCaramel2/josephs-mystic-herbs-site`  
**Build:** Flat static HTML, shared header/footer Web Components, central stylesheet

## Executive summary

The site now presents Joseph as a **Cape Town traditional healer** working with mountain herbs, herbal remedies, handmade preparations and local Fish Hoek trade. Joseph's supplied portrait is used on the homepage About section and the full About page. Product pricing, contact forms, phone/email details and a Shoprite Fish Hoek map have been added.

The visual system remains the established lapis, emerald, ruby and gold interface with a responsive mobile hamburger menu.

## Page inventory

| Page | Primary search theme | Current state |
|---|---|---|
| `index.html` | Traditional healer and herbal remedies in Fish Hoek | Updated with portrait, About snippet, prices, enquiry form, location and LocalBusiness schema |
| `herbs.html` | Mountain herbs in Fish Hoek | Updated search language and herb terms |
| `remedies.html` | Herbal balms, ointments and mountain herbs | Updated with the price guide and corrected African potato ingredient |
| `about.html` | Traditional healer in Cape Town | Expanded long-form story, Rastafarian livity, gathering practice and portrait |
| `blog.html` | Mountain herbs journal | Updated metadata and search language |
| `contact.html` | Contact traditional healer Fish Hoek | Updated with email form, phone, email, Shoprite map and directions |
| `privacy-policy.html` | Policy page | Retained and updated generic herb wording |
| `cookies-policy.html` | Policy page | Retained and updated generic herb wording |

## Product pricing included

- Herbal balms and ointments: **R90 each**
- Sage, rosemary, buchu and other herb bundles: **R50 per bundle**
- Herbs by weight: **R375 per 500 g**
- Natural soap: **R50 per 50 g**
- Natural soap: **R350 per 500 g**
- Smudge sticks: price confirmed directly with Joseph

## Contact and location

- Phone / WhatsApp: **+27 82 462 4970**
- Email: **josephs.mystic.herbs@gmail.com**
- Physical location: **Dunster Road entrance of Shoprite, Fish Hoek**
- Google Maps directions link and embedded map added to `contact.html`
- Homepage and Contact page include enquiry forms using the supplied email address

The forms use a `mailto:` handoff because this is a pure static repository. A hosted form endpoint can be connected later if submissions need to arrive without opening the visitor's email application.

## On-page SEO completed

- Page-specific titles added for all commercial and editorial pages
- Page-specific meta descriptions added
- Page-specific keyword themes added to the key commercial pages
- Open Graph title and description tags added to the updated commercial pages
- Search language shifted toward phrases people are more likely to use:
  - traditional healer Fish Hoek
  - traditional healer Cape Town
  - herbal remedies Fish Hoek
  - mountain herbs Fish Hoek
  - herbal balms and ointments
  - buchu, sage, rosemary and Wilde Dagga
  - natural soap Fish Hoek
- Homepage LocalBusiness JSON-LD added with phone, email and Fish Hoek location
- Visible headings and supporting copy aligned to each page theme
- Generic use of “botanicals” reduced in favour of “mountain herbs”, “herbal remedies”, “herbal goods” and specific plant names

## Accessibility and responsive checks

- Supplied portrait has descriptive alternative text
- Google map iframe has a descriptive title
- Forms include labels through clear placeholders, input types and required states
- Phone and email are clickable links
- Mobile hamburger navigation is keyboard/assistive-technology aware through `aria-expanded`, `aria-controls` and dynamic labels
- Five mobile navigation links close the menu before navigation
- Existing responsive audit passed at iPhone SE, iPhone 14, iPhone 14 Pro Max, small Android and tablet widths with zero horizontal overflow

## Technical structure

- Flat root-level HTML files
- `site-components.js` owns the shared header, footer and mobile menu
- `styles.css` owns the lapis/emerald/ruby/gold design system and responsive layout
- `joseph-portrait.jpg` is an optimized copy of the supplied portrait
- No build step is required for the static pages

## SEO work still requiring the keyword planner

1. Confirm one primary keyword and several supporting terms per page using actual search volume and intent data.
2. Refine title lengths and heading wording against the selected keyword set.
3. Add the final production-domain canonical URLs.
4. Generate `sitemap.xml` with the final production domain.
5. Add `robots.txt` with the final sitemap URL.
6. Configure Google Search Console and submit the sitemap.
7. Build local citations and relevant links for Fish Hoek / Cape Town discovery.
8. Add unique, useful journal articles targeting real questions about the named herbs and local traditional herbal practice.
9. Add verified business details and opening times once Joseph confirms them.

## Content verification points for Joseph

- Confirm the preferred wording for training with Khoi San elders.
- Confirm the exact Shoprite entrance description and trading hours.
- Confirm current availability of Wilde Dagga, mountain garlic, aloe, African potato, sage and buchu.
- Confirm whether the displayed bundle and weight prices apply to every herb or vary by plant.
- Confirm the preferred wording for traditional consultations and any regulated health claims before public launch.

## Current conclusion

The site is structurally ready for the next keyword-planner pass. The main remaining SEO dependency is verified keyword data plus the final production domain for canonical tags, sitemap and Search Console setup.
