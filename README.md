## POS marketing website

This project is a simple marketing website for a POS system with:

- A landing page (features, video placeholder, images placeholder)
- A demo login flow at `/demo/login` (demo-only, no real authentication)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo login

- URL: `http://localhost:3000/demo/login`
- Demo credentials: `demo@pos.local` / `demo123`

## Add your video + images

- **Video**: put your promo video at `public/promo.mp4` (then we can swap the placeholder to a real `<video>` player)
- **Screenshots**: put images under `public/images/` and we’ll wire them into the gallery

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
