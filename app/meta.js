// app/meta.js
export const metadata = {
  title: {
    default: "The Green Leaf Store — Eco-Friendly Lifestyle Products",
    template: "%s | The Green Leaf Store"
  },

  description:
    "The Green Leaf Store offers eco-friendly, sustainable, and natural lifestyle products. Shop greener alternatives for daily use and join the movement toward a cleaner planet.",

  keywords: [
    "green store",
    "eco friendly products",
    "sustainable lifestyle",
    "natural products",
    "environment friendly items",
    "the green leaf store"
  ],

  authors: [{ name: "The Green Leaf Store" }],
  creator: "The Green Leaf Store",

  metadataBase: new URL("https://thegreenleafstore.com"), // change if needed

  openGraph: {
    title: "The Green Leaf Store — Sustainable & Eco-Friendly Products",
    description:
      "Discover eco-friendly home essentials, personal care, accessories, and more. Make smarter choices for a greener future.",
    url: "https://thegreenleafstore.com",
    siteName: "The Green Leaf Store",
    images: [
      {
        url: "https://thegreenleafstore.com/og-image.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "The Green Leaf Store - Eco Friendly Products"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "The Green Leaf Store — Eco-Friendly Lifestyle Products",
    description:
      "Shop sustainable, natural, and earth-friendly products for a greener lifestyle.",
    images: ["https://thegreenleafstore.com/og-image.jpg"] // replace
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};
