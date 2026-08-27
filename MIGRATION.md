# DCRBN Migration Manifest

Source: `iangroup.ai` (Webflow)  
Destination: `https://www.dcrbn.io`  
Do not use: egroup.ai, de-carbon.io, decarbon.io, dcrbn.ai, or any other substitute domain.

## URL map

| Old URL | New URL | Redirect | Disposition | Approval | Notes |
| --- | --- | --- | --- | --- | --- |
| https://iangroup.ai/ | https://www.dcrbn.io/ | 301 (DNS/hosting) | Adapt | Approved | Homepage rebuilt to 12-section DCRBN architecture |
| /how-we-scale | /growth-cycle | 301 | Adapt | Approved | Speed to Scale Growth Cycle |
| /fractional-experts | /advisory | 301 | Merge | Approved | Operator support under Advisory |
| /growth-distribution | /speed-to-scale | 301 | Merge | Approved | Growth layers under Speed to Scale |
| /capital | /advisory | 301 | Merge | Approved | Capital readiness under Advisory |
| /venture-studio | /venture-studio | keep | Adapt | Approved | Controlled companies added |
| /results | /proof | 301 | Adapt | Placeholder | Three proof layers; stories unpublished |
| /about | /about | keep | Adapt | Placeholder | Approved names only |
| /scale-diagnostic | /apply | 301 | Adapt | Approved | Apply for Speed to Scale |
| /privacy | /privacy | keep | Adapt | Needs verification | Counsel review of brand/email updates |
| /terms | /terms | keep | Adapt | Needs verification | Counsel review of brand/email updates |
| /consulting | /advisory | 301 | Merge | Approved | Legacy Vite route |
| /accelerator | /speed-to-scale | 301 | Retire | Approved | Legacy Vite route |
| /6frame-ai-studio | /sixframe | 301 | Adapt | Approved | Sixframe under Venture Studio |
| /case-studies | /proof | 301 | Merge | Placeholder | Do not republish old metrics |
| /pitch | /apply | 301 | Merge | Approved | Legacy Vite route |
| /free-ai-tools | / | 301 | Retire | Approved | Not part of DCRBN architecture |
| — | /focus-areas | New | New | Approved | |
| — | /network | New | New | Approved | |
| — | /strategic-alignment | New | New | Approved | |
| — | /sixframe | New | New | Approved | Description limited to approved one-liner |
| — | /lotus-trader | New | New | Placeholder | Description/link missing |
| — | /social-automation | New | New | Placeholder | Approved name/link missing |

Path-level 301s are in `next.config.ts`.  
Host-level 301s are in `src/middleware.ts` and `vercel.json`.

- `dcrbn.io` and `www.dcrbn.io` are attached to the Vercel project. Nameservers still point at Wix until GoDaddy is switched to `ns1.vercel-dns.com` / `ns2.vercel-dns.com` (see `DNS.md`). Microsoft 365 MX is already staged on Vercel DNS.
- `iangroup.ai` cannot be attached to this Vercel team (`403 Not authorized` — claimed on another Vercel account). Use the Cloudflare redirect in `DNS.md`, then the app path map.

## Inventory (source)

| Item | Finding |
| --- | --- |
| Platform | Webflow site `6a528f3d33aab7837b40fa28` |
| Visual system | DM Sans, `#05070B`, `#087BFF` / `#2F86FF`, diamond mark |
| Forms | HighLevel embed `https://ian.iangroup.ai/widget/form/3AHlX3sqiUl11P4Xvk0s` |
| Chat | LeadConnector widget `6a677ab6603bdf77b7df7615` |
| Analytics | Privacy policy states no advertising cookies / third-party analytics currently |
| Address / phone | 11250 Hidden Peak Ave, Las Vegas, NV 89135 · +1 725-425-4923 |
| Legal entity | DCRBN LLC already named as operator on iangroup.ai |

## CTA destinations

| CTA | Destination |
| --- | --- |
| Apply for Speed to Scale | `/apply` |
| See How It Works | `/growth-cycle` |
| Explore Strategic Alignment | `/strategic-alignment` |
| Start the Conversation | `/strategic-alignment#align-form` |
| Submit Application | `/apply#apply-form` |

## Assumptions

1. Recreating the Webflow site in Next.js is the correct implementation path because Webflow is not editable from this workspace and `www.dcrbn.io` currently serves an unrelated Wix site.
2. `https://6framestudio.com` is the current Sixframe website and may be linked. No Sixframe metrics, testimonials, or extra claims are copied.
3. Lotus Trader and the social automation tool have no approved descriptions or links in the handoff, so they render as placeholders.
4. Approved team list is names only. Bios, titles, and photos are placeholders.
5. Existing IAN HighLevel form questions do not match the new application, so native forms are used. HighLevel must be rewired via webhook env vars.
6. The IAN chat widget is not mounted, because it is still branded to IAN Group.
7. `privacy@dcrbn.io` and `legal@dcrbn.io` replace `privacy@iangroup.ai` / `legal@iangroup.ai` and must be provisioned.
8. Old Vite IAN-Group metrics (including social reach, revenue, and exit figures) are treated as unapproved and are not published.
9. DNS, SSL, Search Console, and iangroup.ai 301s are launch operations, not part of this code deploy.

## Unresolved content questions

1. Approved Lotus Trader description, logo, website, role detail, founding context, and proof?
2. Approved social automation product name, description, logo, website, and proof?
3. Any approved portfolio / partner companies (name, founding team, role, website, traction)?
4. Any approved execution-proof stories or metrics by outcome category?
5. Approved titles, bios, and photos for Cory Warfield, Majid Zafer, Calvin Pack, Chris Paper, Thomas Quilty, Brett Jenny, Dave Luff, Jacob Bigg?
6. HighLevel / CRM webhook endpoints and the destination inbox for applications?
7. DCRBN analytics property ID?
8. DCRBN chat widget ID, if a replacement for the IAN widget is required?
9. Should legal keep `privacy@iangroup.ai` until `privacy@dcrbn.io` mailboxes exist?
10. Confirm 6framestudio.com is the canonical Sixframe URL to publish.
11. Brand logo file beyond the diamond mark used on iangroup.ai?
12. Who will point `iangroup.ai` and `dcrbn.io` DNS after staging sign-off?

## Launch checklist (code-complete vs ops)

Done in this repo: homepage architecture, nav, CTAs, inner pages, placeholders, metadata, canonicals, sitemap, robots, structured data, path 301s, mobile-first layout, form endpoints.

Cutover remaining: switch dcrbn.io nameservers at GoDaddy from Wix to Vercel (MX already staged); Cloudflare 301 on iangroup.ai until the other Vercel account releases the domain; paste HighLevel inbound webhook URLs into `APPLY_WEBHOOK_URL` / `ALIGN_WEBHOOK_URL`; create M365 aliases privacy@ / legal@dcrbn.io forwarding to the live IAN Google inboxes (draft in Gmail).
