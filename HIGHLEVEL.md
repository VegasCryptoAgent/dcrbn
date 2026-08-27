# HighLevel / CRM

Location ID (from the live IAN Scale Diagnostic embed): `69df8c1ec7fee340d1abbfa6`  
Existing form ID: `3AHlX3sqiUl11P4Xvk0s`

Applications POST from `/api/apply` and `/api/align` to:

1. `APPLY_WEBHOOK_URL` / `ALIGN_WEBHOOK_URL` (HighLevel inbound webhook)
2. `FORM_NOTIFY_EMAIL` via FormSubmit (defaults to the live Google Workspace inbox `privacy@iangroup.ai`)

## Create the inbound webhooks (HighLevel)

1. HighLevel → **Workflows** → new workflow
2. Trigger: **Inbound Webhook**
3. Copy the webhook URL
4. Add actions: Create/update Contact, add tag `speed-to-scale` or `strategic-alignment`, notify users
5. Paste URLs into Vercel env:

```
APPLY_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...
ALIGN_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...
```

Payload fields include `firstName`, `lastName`, `email`, `company`, `website`, `tags`, `notes`, and the mapped IAN custom fields (`contact.company_stage`, `contact.where_are_you_most_stuck`, …).

## Notify inbox (already live)

`FORM_NOTIFY_EMAIL=privacy@iangroup.ai`

That mailbox already exists on Google Workspace for iangroup.ai (MX → Google). Confirm the first FormSubmit activation email if prompted.
