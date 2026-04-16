# Plan: Deploy CBS IT Union Website — Ionos + Cloudflare + Vercel

**Date:** 2026-04-16  
**Author:** Brian  
**Status:** Ready to execute

---

## Context

We need to take the CBS IT Union Next.js website from localhost to a publicly accessible URL at `cbs-itunion.com`.

**Key discovery:** The Ionos plan (`MyWebsite Now Essential`) is a website builder / shared hosting product — it cannot run Node.js servers. A Next.js app requires a Node.js runtime to server-render pages. This means Ionos cannot host the app directly.

**Solution:** Use **Vercel's free tier** as the Node.js host (zero cost, built for Next.js), and keep Ionos for domain registration only. Cloudflare is already the DNS authority (`cbs-itunion.com` nameservers already point to `anuj.ns.cloudflare.com` and `joan.ns.cloudflare.com`), so Cloudflare handles the DNS records that connect the domain to Vercel.

**No money is wasted:** Ionos stays in use as the domain registrar. Vercel free tier handles hosting. Cloudflare free tier handles DNS + SSL.

---

## Architecture

```
User browser
    │
    ▼
Cloudflare DNS  (cbs-itunion.com → Vercel)
    │
    ▼
Vercel  (hosts Next.js app, Node.js runtime, global CDN)
    │
    ▼
GitHub IT Union org repo  (source of truth for auto-deployments)
```

---

## Prerequisites

- [ ] Access to CBS IT Union GitHub organization and repo name
- [ ] Vercel account (create free account at vercel.com, sign in with GitHub)
- [ ] Access to Cloudflare dashboard for `cbs-itunion.com`
- [ ] Ionos credentials (for domain verification only — no changes needed there)

---

## Phase 1 — Push code to IT Union GitHub org repo

The codebase is currently on Brian's personal private repo. It needs to move to the IT Union org repo so Vercel can connect to it as the authoritative source.

### Step 1.1 — Add IT Union repo as a remote

```bash
# In the project root directory:
git remote add itunion https://github.com/CBS-IT-Union/<repo-name>.git
```

Replace `<repo-name>` with the actual repository name in the IT Union GitHub org.

### Step 1.2 — Push main branch

```bash
git push itunion main
```

If the org repo already has content and conflicts arise:

```bash
git push itunion main --force
# Only use --force if you are certain the org repo has no work worth preserving
```

### Step 1.3 — Verify on GitHub

Open the IT Union repo in a browser. Confirm `app/`, `components/`, `content/`, `package.json` are all present.

### Step 1.4 — Update default remote (recommended)

```bash
git remote set-url origin https://github.com/CBS-IT-Union/<repo-name>.git
```

This ensures future `git push` commands go to the org repo by default.

---

## Phase 2 — Deploy to Vercel

### Step 2.1 — Create Vercel account

Go to [vercel.com](https://vercel.com). Click **"Sign Up"** and choose **"Continue with GitHub"** — use the IT Union GitHub account (or Brian's account if he will be the Vercel admin).

### Step 2.2 — Import the GitHub repo

1. In Vercel dashboard → click **"Add New Project"**
2. Click **"Import Git Repository"**
3. Find `CBS-IT-Union/<repo-name>` in the list
4. If the org is not visible, click **"Configure GitHub App"** → grant Vercel access to the CBS IT Union org

### Step 2.3 — Configure the project

Vercel auto-detects Next.js. Confirm these settings before deploying:

| Setting | Value |
|---|---|
| Framework Preset | Next.js (auto-detected) |
| Root Directory | `.` (default) |
| Build Command | `npm run build` |
| Output Directory | `.next` (default) |
| Install Command | `npm install` |
| Environment Variables | None needed (site uses local JSON content) |

### Step 2.4 — Deploy

Click **"Deploy"**. Vercel will clone the repo, run `npm install`, run `npm run build`, and publish.

**Verify:** Vercel gives you a preview URL like `cbs-it-union-website.vercel.app` — open it and confirm all pages load correctly before touching DNS.

---

## Phase 3 — Connect custom domain via Cloudflare

### Step 3.1 — Add domain in Vercel

1. Vercel project → **Settings → Domains**
2. Click **"Add"** → enter `cbs-itunion.com`
3. Also add `www.cbs-itunion.com`
4. Vercel will display the DNS records you need to create — note them down exactly

Vercel will provide either:
- An **A record** → `76.76.21.21` (for root domain)
- A **CNAME record** → `cname.vercel-dns.com` (for www)

### Step 3.2 — Add DNS records in Cloudflare

1. Log into Cloudflare dashboard
2. Select the `cbs-itunion.com` zone
3. Go to **DNS → Records**
4. Add these records (use the exact values Vercel shows you):

**Root domain:**
| Type | Name | Value | Proxy status |
|---|---|---|---|
| A | `@` | `76.76.21.21` | Proxied (orange cloud ON) |

**www subdomain:**
| Type | Name | Value | Proxy status |
|---|---|---|---|
| CNAME | `www` | `cname.vercel-dns.com` | Proxied (orange cloud ON) |

> If any old A or CNAME records exist for `@` or `www`, delete them first.

### Step 3.3 — Configure SSL in Cloudflare

1. Cloudflare → **SSL/TLS → Overview**
2. Set encryption mode to **"Full"**
   - "Full" = browser↔Cloudflare encrypted AND Cloudflare↔Vercel encrypted
   - Do NOT use "Flexible" — it causes redirect loops with Vercel
3. **SSL/TLS → Edge Certificates** → enable **"Always Use HTTPS"**

### Step 3.4 — Wait for DNS propagation

DNS changes take 5 minutes to 24 hours. Check status:
- In Vercel → Settings → Domains: wait for green checkmark
- Or run in terminal: `nslookup cbs-itunion.com` — should return Cloudflare IPs

---

## Phase 4 — End-to-end verification checklist

- [ ] `https://cbs-itunion.com` loads the homepage
- [ ] `https://www.cbs-itunion.com` redirects to root domain
- [ ] Browser padlock shows (HTTPS working)
- [ ] All pages load: `/`, `/about`, `/events`, `/events/past`, `/partners`, `/contact`
- [ ] No console errors in browser dev tools (F12)
- [ ] Mobile layout renders correctly (use browser responsive mode)

---

## Phase 5 — Continuous deployment (automatic)

Once working, every `git push` to `main` on the IT Union GitHub repo auto-deploys to Vercel. No manual steps needed for future updates.

**Standard deployment workflow going forward:**

```bash
git add .
git commit -m "feat: describe your change"
git push origin main
# Vercel deploys automatically within ~1–2 minutes
```

Vercel also creates **preview deployments** for every pull request — useful for reviewing changes before they go live.

---

## Service summary

| Service | Role | Cost |
|---|---|---|
| Ionos | Domain registrar for `cbs-itunion.com` | Already paid — no change needed |
| Cloudflare | DNS authority + SSL proxy + CDN | Free tier |
| Vercel | Next.js hosting, Node.js runtime, auto-deploy | Free tier |
| GitHub (IT Union org) | Source of truth for deployments | Free |

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Vercel build fails | Run `npm run build` locally first — fix any TypeScript/lint errors before pushing |
| Domain not resolving after 1h | Check Cloudflare DNS records are saved correctly; try `nslookup cbs-itunion.com` |
| SSL error / redirect loop | Ensure Cloudflare SSL mode is **"Full"** not "Flexible" |
| Cloudflare blocking Vercel | Temporarily set DNS records to "DNS only" (grey cloud) to test direct Vercel connection |
| Org repo not visible in Vercel | Go to GitHub → Organization Settings → Third-party Access → grant Vercel permission |

---

## Notes on Ionos limitation

The `MyWebsite Now Essential` plan is a drag-and-drop website builder. It cannot:
- Run Node.js processes
- Execute `npm run build` or `npm start`
- Serve a Next.js app with server-side rendering

An Ionos VPS could run Node.js, but upgrading is unnecessary — Vercel's free tier fully covers hosting with better performance (global CDN, automatic SSL, zero maintenance).
