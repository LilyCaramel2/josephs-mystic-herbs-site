# Joseph's Mystic Herbs — Site Audit

**Audit date:** 14 October 2026  
**Repository:** `LilyCaramel2/josephs-mystic-herbs-site`  
**Latest handoff commit:** `dc495f6`  
**Build:** Flat static HTML with shared header/footer Web Components and central CSS

## Executive summary

Joseph's Mystic Herbs is a multi-page static website for a Fish Hoek traditional healer working with mountain herbs, herbal remedies, handmade preparations, natural soap and direct local trade. The site now uses Joseph's supplied portrait, clear product prices, phone and email contact routes, WhatsApp CTAs and the Dunster Road entrance of Shoprite as the physical location.

The visual system remains the lapis, emerald, ruby and gold interface with responsive mobile behavior and a shared hamburger navigation component.

## Page inventory and primary search themes

| Page | Primary search theme | Current state |
|---|---|---|
| `index.html` | Traditional healer and herbal remedies in Fish Hoek | Includes portrait-led About section, products, prices, location, enquiry form and LocalBusiness schema |
| `herbs.html` | Mountain herbs in Fish Hoek | Uses named herbs, bundles, quantities and wholesale language |
| `remedies.html` | Herbal balms, ointments and mountain herbs | Includes ingredients, price guide and corrected African potato wording |
| `about.html` | Traditional healer in Cape Town | Expanded story, Khoi San training claim, Rastafarian livity, gathering practice and portrait |
| `blog.html` | Mountain herbs journal | Uses editorial and traditional herbal knowledge themes |
| `contact.html` | Contact traditional healer Fish Hoek | Includes phone, email form, map, directions and WhatsApp confirmation route |
| `privacy-policy.html` | Privacy policy | Retained as a trust and compliance page |
| `cookies-policy.html` | Cookies policy | Retained as a trust and compliance page |

## Product and price verification

The following price guide appears on the homepage and Goods page:

| Product or format | Price |
|---|---:|
| Balms and ointments | R90 each |
| Sage, rosemary, buchu and other herb bundles | R50 per bundle |
| Herbs by weight | R375 per 500 g |
| Natural soap | R50 per 50 g |
| Natural soap | R350 per 500 g |
| Smudge sticks | Confirm current price with Joseph |

Named ingredients include mountain garlic, calamus, Root of David, bitter aloe, rosemary, lavender, prickly pear / Turksvy, African potato, Matunga and wild onion / red onion.

## Joseph profile and location

The About page describes Joseph as a Cape Town traditional healer trained by Khoi San elders, based on the supplied client information. It explains his mountain gathering practice, named herbs and Rastafarian livity in terms of respect for nature, spiritual connection, self-reliance, community, natural living and direct local trade.

The physical location is described as the **Dunster Road entrance of Shoprite in Fish Hoek**. The site includes the supplied phone number, `+27 82 462 4970`, and email address, `josephs.mystic.herbs@gmail.com`.

Joseph should confirm the exact preferred wording for training, the precise entrance description and current trading hours before the final public launch.

## Contact and conversion paths

The homepage and Contact page include enquiry forms using the supplied email address. Because this is a pure static repository, the forms use a `mailto:` handoff and open the visitor's email application. A hosted form endpoint can be connected later if enquiries must be submitted without relying on the visitor's email client.

WhatsApp CTAs appear throughout the commercial pages. Phone and email links are clickable. The Contact page includes a Google Maps iframe, a Google Maps directions link and a WhatsApp route for confirming the location before visiting.

## SEO completed

Page-specific titles, descriptions and keyword themes have been added to the commercial and editorial pages. Open Graph title and description tags are present on the primary pages. The homepage includes LocalBusiness JSON-LD with the business name, telephone, email, Fish Hoek address description and service area.

The main language has been shifted toward search terms with clearer local and product intent: **traditional healer**, **herbal remedies**, **mountain herbs**, **herbal balms**, **herbal ointments**, **buchu**, **sage**, **rosemary**, **Wilde Dagga**, **Fish Hoek** and **Cape Town**. Generic use of “botanicals” has been reduced so it remains a secondary editorial term rather than the main search target.

## SEO work still requiring the keyword planner

The current strategy is intent-led and contains no invented volume or competition figures. The keyword planner should confirm one primary keyword and several supporting phrases per page. It should provide keyword, country, language, monthly volume, competition, CPC and intent.

The final technical SEO pass should then refine title order, H1 wording, supporting headings and Journal priorities. The final production domain is also required before adding canonical URLs, an absolute-domain `sitemap.xml`, a sitemap reference in `robots.txt`, Google Search Console verification and Bing Webmaster Tools verification.

## Local SEO priorities

Joseph should have one consistent business name, phone number, email address, location description and trading-hours statement across the website, Google Business Profile, local directories and community listings. The Google Business Profile should use the final map pin at the Dunster Road Shoprite entrance, the supplied portrait, verified hours, product descriptions and a link to the website.

Relevant Fish Hoek, South Peninsula and Cape Town community references are the priority for local discovery. Genuine customer reviews and accurate local citations should lead the off-page work. Automated link packages, copied directory text and unsupported health claims should be avoided.

## Accessibility and responsive verification

The supplied portrait has descriptive alternative text. The map iframe has a descriptive title. Phone and email links are available to assistive and mobile users. The hamburger control uses `aria-expanded`, `aria-controls` and dynamic open/close labels.

The five mobile navigation destinations are Herbs, Goods, About, Journal and Find Joseph. The menu was checked at 375px and 390px widths. It opens, displays all five links, closes again and closes before navigation when a link is selected. Desktop width displays the full navigation row instead of the hamburger control.

The existing responsive audit covered iPhone SE, iPhone 14, iPhone 14 Pro Max, small Android and tablet widths with zero horizontal page overflow.

## Technical structure

The repository remains flat at the root for page files. `site-components.js` owns the shared header, footer and mobile navigation behavior. `styles.css` owns the lapis, emerald, ruby and gold design system, layout and responsive behavior. `joseph-portrait.jpg` is an optimized copy of the supplied portrait. No build process is required for the static pages.

## Content verification points for Joseph

Joseph should confirm the preferred wording for training with Khoi San elders, the precise Shoprite entrance description, trading hours, current availability of Wilde Dagga, mountain garlic, aloe, African potato, sage and buchu, and whether the displayed bundle and weight prices apply to every herb or vary by plant.

Any future copy describing consultations or traditional preparations should be reviewed against applicable South African advertising and health-claim requirements. The current site uses traditional-practice language and avoids presenting unverified medical outcomes as established medical fact.

## Recommended next phase

The site is ready for the keyword-planner pass. The highest-value next actions are to confirm search data, lock the production domain, complete canonical and sitemap files, verify the Google Business Profile, confirm Joseph's business details and publish useful Journal articles that answer real local questions about mountain herbs and ordering.

## Final live verification

The current GitHub `main` branch and both known Vercel deployments were checked after the mobile-menu concern. At 375px and 390px widths, the hamburger button is visible, the navigation opens to five links, and the navigation closes again. The verified links are Herbs, Goods, About, Journal and Find Joseph. Desktop width correctly presents the full navigation row instead of the hamburger control.
