# Salvian AI Video

Production-oriented foundation for a SaaS that turns an idea into a 5–8 minute YouTube video.

## Current foundation

- Premium responsive dashboard UI
- Create Video flow
- Script, Voice, Visual and Video Editor screens
- Projects, Thumbnail and YouTube SEO
- Pricing, Billing, Settings and Admin
- Auth screen placeholders
- Feature-flag-ready architecture
- Server-only environment variable template

## Next engine phases

1. Authentication + database
2. AI script generation
3. Voice generation
4. Visual generation
5. Subtitle timing
6. Background jobs / rendering worker
7. Storage
8. Credits + ledger
9. Payment gateway + verified webhooks
10. Production security and deployment

## Run locally

```bash
npm install
npm run dev
```

Do not put API keys in client-side code. Use server-side environment variables.
