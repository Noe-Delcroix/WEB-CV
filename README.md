# WEB CV 2.0

## Init

Run the following command
```bat
npm i
```

## Run locally

Run the following command
```bat
npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.


## Deploy on GitHub Pages

The site is published at [https://www.noedelcroix.com](https://www.noedelcroix.com).

Each push to `master` builds the app and deploys it via GitHub Actions (`.github/workflows/deploy-pages.yml`). You can also run the workflow manually from the Actions tab.

### One-time GitHub setup

1. Open the repository **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. After the first successful deploy, set **Custom domain** to `www.noedelcroix.com`.
4. Wait for DNS to resolve, then enable **Enforce HTTPS**.

### DNS (registrar or Route 53)

Keep `www` as the canonical host. Point records as follows:

| Host | Type | Value |
| --- | --- | --- |
| `www` | CNAME | `Noe-Delcroix.github.io` |
| `@` (apex `noedelcroix.com`) | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |

Optional IPv6 (AAAA) on the apex: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

Remove the existing CloudFront / S3 aliases so they no longer receive traffic. GitHub will then redirect `noedelcroix.com` to `www.noedelcroix.com`.

Propagation can take from a few minutes to 48 hours. Check with:

```bat
nslookup www.noedelcroix.com
```

### Stop paying for AWS

After GitHub Pages serves the domain and HTTPS works:

- Delete the CloudFront distribution
- Empty and delete the S3 bucket
- Delete the ACM certificate if unused
- Keep Route 53 only if it still hosts your DNS (about $0.50/month); otherwise move DNS to your registrar and delete the hosted zone





