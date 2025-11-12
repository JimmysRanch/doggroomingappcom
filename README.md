# DogGroomingApp.com

A professional web application for comparing and rating top dog grooming apps on the market.

## 🚀 Deployment

This site is automatically deployed to GitHub Pages at [doggroomingapp.com](https://doggroomingapp.com) when changes are pushed to the `main` branch.

### How It Works

1. **GitHub Actions** automatically builds the Vite/React app
2. The compiled files are deployed to GitHub Pages
3. Your custom domain (doggroomingapp.com) points to the deployed site

### Setup Requirements

**GitHub Repository Settings:**
1. Go to Settings → Pages
2. Source: "GitHub Actions" (NOT "Deploy from branch")
3. Custom domain: `doggroomingapp.com`

**GoDaddy DNS Settings:**
Your DNS should already be configured with:
- CNAME record pointing `www` to `<username>.github.io`
- A records for the apex domain pointing to GitHub's IPs

## 🛠️ Local Development

```bash
npm install
npm run dev
```

## 📦 Building

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 📄 License

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.
