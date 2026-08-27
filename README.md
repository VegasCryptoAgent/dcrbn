# DCRBN

Speed to Scale platform site for [www.dcrbn.io](https://www.dcrbn.io).

This is the code migration of [iangroup.ai](https://iangroup.ai) onto the DCRBN brand. Visual language is preserved from the live Webflow site (DM Sans, near-black, electric blue). Copy follows the approved DCRBN handoff only.

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Launch notes

- Canonical host is `www.dcrbn.io`. Apex `dcrbn.io` 301s to www.
- After DNS cutover, `iangroup.ai` must 301 to the mapped DCRBN URL.
- Forms POST to `/api/apply` and `/api/align`. Set `APPLY_WEBHOOK_URL` / `ALIGN_WEBHOOK_URL` to deliver into HighLevel or another CRM.
- See `MIGRATION.md` for the URL map, approval matrix, and unresolved questions.
