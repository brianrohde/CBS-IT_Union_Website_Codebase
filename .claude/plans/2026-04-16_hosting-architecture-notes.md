# Hosting Architecture Notes — Ionos, Cloudflare, Vercel

**Date:** 2026-04-16  
**Status:** Research / decision context — not yet executed

---

## Current state

- **Domain:** `cbs-itunion.com` registered at Ionos
- **DNS:** Nameservers already point to Cloudflare (`anuj.ns.cloudflare.com`, `joan.ns.cloudflare.com`)
- **Ionos plan:** `MyWebsite Now Essential` — a website builder product, NOT a web server
- **Hosting:** Not yet live — site runs on localhost only
- **Codebase:** On Brian's personal private GitHub repo; IT Union org repo also exists (credentials received 2026-04-16)
- **Deployment plan:** See `2026-04-16_deploy-ionos-cloudflare-vercel.md`

---

## What each service does

### Vercel
Vercel is a cloud hosting platform that runs the Next.js application on real servers and serves it to the internet. When someone visits `cbs-itunion.com`, Vercel executes the Next.js code and returns the rendered HTML.

**Free tier limits and when they'd be hit:**

| Limit | Free tier | Realistic impact |
|---|---|---|
| Bandwidth | 100 GB/month | ~100,000 page visits/month — safe for a student union site |
| Build minutes | 6,000/month | ~200 deploys/month — more than enough |
| Serverless functions | 100 GB-hours | Relevant only if backend API routes are added |
| Team members | 1 (personal account only) | **Real constraint for a team** |
| Custom domains | Unlimited | Fine |

**The actual free tier limitation:** Vercel's free tier is a personal account — only one person has dashboard access. Workaround: one person (e.g., the IT webmaster) owns the Vercel account; all other contributors push code via GitHub and Vercel deploys automatically. Contributors never need Vercel logins.

**When an upgrade becomes necessary:** If multiple people need Vercel dashboard access, or if you add password-protected preview deployments, or need advanced analytics. Vercel Pro costs $20/month per member. For a public student union website, the free tier is sufficient for the foreseeable future.

---

### Cloudflare
Cloudflare sits between site visitors and Vercel. It is not a host — it is a network intermediary that provides:

1. **DNS** — translates `cbs-itunion.com` into the actual server IP address (already active)
2. **CDN (Content Delivery Network)** — caches pages on 300+ servers worldwide; visitors get content from the nearest server instead of a US data center
3. **Free SSL** — provides the HTTPS padlock certificate automatically
4. **DDoS protection** — absorbs attack traffic before it reaches Vercel
5. **Web Application Firewall** — blocks malicious bots and scrapers

For this project, the main value is DNS + free SSL. CDN and security are free bonuses that activate automatically once DNS records are configured.

---

### Ionos — current status and salvage options

The `MyWebsite Now Essential` plan is a drag-and-drop website builder (comparable to Wix or Squarespace). It can only serve static HTML/CSS/JS files. It cannot run Node.js, which Next.js requires for server-side rendering.

**Verdict:** Ionos cannot directly host this Next.js application in its current plan.

**Is it useless?** No — it functions as the domain registrar for `cbs-itunion.com`. Domain registration is typically €10–15/year. Since DNS is handled by Cloudflare and hosting by Vercel, Ionos only needs to hold the domain contract. No action required on Ionos beyond keeping the contract active.

**Salvage option A — Static export to Ionos:**
Next.js supports `next export`, which converts the app to plain HTML files any basic web host can serve.

| Feature | Works with static export |
|---|---|
| Static pages (about, events, partners) | Yes |
| Server-side rendering | No — falls back to build-time HTML |
| API routes / backend | No |
| Image optimization | Partial — needs manual workaround |
| Contact form backend | No — needs third-party service (e.g. Formspree) |

This works for the site as it stands today (all JSON-driven, no database). But any future backend feature (contact form submission, CMS, API routes) would be blocked. Not recommended as the long-term path.

**Salvage option B — Upgrade Ionos to VPS:**
Ionos sells VPS (Virtual Private Server) plans that provide a full Linux server where Node.js can be installed and run. This would allow direct Next.js hosting on Ionos without Vercel.

Trade-offs:

| | Vercel | Ionos VPS |
|---|---|---|
| Setup | ~10 min | ~2–4 hours |
| Maintenance | Zero — Vercel manages everything | You manage Node.js versions, server updates, process manager (PM2), reverse proxy (Nginx) |
| Auto-deploy from GitHub | Built-in | Manual setup with webhooks or CI/CD |
| SSL | Automatic | Manual (Let's Encrypt + Certbot) |
| Global CDN | Built-in | Not included |
| Cost | Free tier | ~€5–15/month depending on plan |

VPS is a valid option for a team with a developer comfortable with Linux server administration. It gives more control. But it requires ongoing maintenance that Vercel abstracts away entirely.

---

## Decision as of 2026-04-16

**Proceed with Vercel for hosting.** Ionos retained as domain registrar only. Cloudflare handles DNS.

Rationale:
- Vercel free tier is sufficient for current and near-future traffic
- Zero server maintenance overhead — appropriate for a student org with rotating maintainers
- Auto-deploy from GitHub is built in
- A VPS upgrade remains available if requirements change significantly

The deployment execution plan is in: `.claude/plans/2026-04-16_deploy-ionos-cloudflare-vercel.md`

---

## Next session: where to pick up

1. **Confirm IT Union GitHub org repo name** (credentials received but repo name not confirmed)
2. **Push codebase from Brian's personal repo to IT Union org repo** (Phase 1 of deployment plan)
3. **Create Vercel account and import repo** (Phase 2)
4. **Configure Cloudflare DNS records** (Phase 3)
5. **Verify live site at `https://cbs-itunion.com`** (Phase 4)

Full step-by-step instructions in: `.claude/plans/2026-04-16_deploy-ionos-cloudflare-vercel.md`
