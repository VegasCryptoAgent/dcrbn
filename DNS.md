# Domain cutover

Canonical: `https://www.dcrbn.io`

## Already done in Vercel

- Project `dcrbn` owns `dcrbn.io` and `www.dcrbn.io`
- Vercel DNS records (active **after** nameservers switch):
  - `A @ 76.76.21.21`
  - `CNAME www → 9ef498343627c800.vercel-dns-017.com`
  - `MX 10 dcrbn-io.mail.protection.outlook.com` (keeps Microsoft 365)
  - `TXT v=spf1 include:spf.protection.outlook.com -all`
  - `CNAME autodiscover → autodiscover.outlook.com`
- Host 301s in `src/middleware.ts` and `vercel.json`:
  - `dcrbn.io` → `www.dcrbn.io`
  - `iangroup.ai` / `www.iangroup.ai` → `www.dcrbn.io` (plus path map)

## Remaining registrar action (GoDaddy)

`dcrbn.io` is registered at GoDaddy and currently uses **Wix nameservers** (`ns0.wixdns.net` / `ns1.wixdns.net`).

In GoDaddy → dcrbn.io → Nameservers, replace Wix with:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Do **not** delete Microsoft 365. Those MX records are already staged on Vercel DNS.

## iangroup.ai → www.dcrbn.io

`iangroup.ai` could not be attached to this Vercel team (`403 Not authorized`). Another Vercel account already claims the domain.

Until that claim is released, the 301 must be set in **Cloudflare** (current nameservers `gabe.ns.cloudflare.com` / `ximena.ns.cloudflare.com`):

1. Cloudflare → iangroup.ai → Rules → Redirect Rules
2. All incoming requests on `iangroup.ai` and `www.iangroup.ai`
3. Dynamic 301 to `https://www.dcrbn.io/${request.uri.path}` (keep query)

Path mapping (`/scale-diagnostic` → `/apply`, etc.) is already in Next.js, so Cloudflare can send the same path; the app will 301 internally.

Alternatively, remove `iangroup.ai` from the other Vercel account, then:

```
vercel domains add iangroup.ai dcrbn --scope brets-projects-1715089a
vercel domains add www.iangroup.ai dcrbn --scope brets-projects-1715089a
```

Then point Cloudflare A/CNAME to Vercel (`A 76.76.21.21` or CNAME to `cname.vercel-dns.com`).
