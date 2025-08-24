---
title: How to Deploy a Next.js App
---

Deploying your Next.js app is simple and can be done on platforms like Vercel, Netlify, or your own server.

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com/)
2. Connect your GitHub repository
3. Click "Deploy"

Vercel will handle builds, previews, and production deployments automatically.

## Deploy on Netlify

1. Go to [netlify.com](https://netlify.com/)
2. Connect your GitHub repository
3. Set build command to `npm run build` and publish directory to `.next`
4. Click "Deploy"

## Manual Deployment

- Build your app: `npm run build`
- Start: `npm start`
- Serve the `.next` directory with a Node.js server

For more, see the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
