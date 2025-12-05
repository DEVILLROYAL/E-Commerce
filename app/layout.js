import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import Header from './layouts/Header';
import Footer from "./layouts/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://thegreenleaf.store"),
  
  title: {
    default: "The Green Leaf – Bareilly Ka Apna Food Delivery App",
    template: "%s | The Green Leaf"
  },

  description:
    "The Green Leaf is Bareilly ka apna food delivery app offering 100% Veg homemade meals, biryani, snacks, maggie, coffee and tea. We deliver from Suresh Sharma Nagar, Nawada, Durga Nagar to Sanjay Nagar — expanding to all Bareilly soon. Fast delivery, local kitchens, fresh homemade taste.",

  keywords: [
    "the green leaf",
    "green leaf store",
    "bareilly food delivery",
    "veg food bareilly",
    "home made meals bareilly",
    "veg biryani delivery bareilly",
    "street food bareilly",
    "tiffin service bareilly",
    "maggie delivery bareilly",
    "order veg food bareilly",
    "local food delivery in bareilly"
  ],

  authors: [{ name: "Deepak yadav" }],
  creator: "Deepak Yadav",
  publisher: "The Green Leaf",

  openGraph: {
    title: "The Green Leaf – Bareilly Ka Apna Food Delivery App",
    description:
      "Bareilly’s local veg food delivery service—homemade meals, biryani, maggie, coffee, tea and light desserts delivered fast to your home.",
    url: "https://thegreenleaf.store/",
    siteName: "The Green Leaf",
    images: [
      {
        url: "/og-image.jpg", // replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "The Green Leaf – Bareilly Food Delivery"
      }
    ],
    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "The Green Leaf – Bareilly Veg Food Delivery",
    description:
      "Order homemade veg food, biryani, maggie, tea and coffee across Bareilly.",
    images: ["/og-image.jpg"]
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },

  alternates: {
    canonical: "https://thegreenleaf.store"
  },

  category: "Food Delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
                <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "The Green Leaf",
          "image": "https://thegreenleaf.store/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bareilly",
            "addressRegion": "UP",
            "addressCountry": "IN"
          },
          "servesCuisine": ["Indian", "Veg Meals", "Street Food", "Snacks", "Maggie", "Tea", "Coffee"],
          "openingHours": "Mo-Su 17:00-24:00",
          "priceRange": "₹₹",
          "url": "https://thegreenleaf.store",
          "sameAs": [
            "https://www.instagram.com/thegreenleafbly/",
            "https://share.google/75XfNBAb1TZUAdXQs"
          ]
        }
        `}
        </script>

                      <script type="application/ld+json">
              {`
              {
                "@context": "https://schema.org",
                "@type": "Menu",
                "name": "The Green Leaf Menu",
                "hasMenuSection": [
                  {
                    "@type": "MenuSection",
                    "name": "Homemade Meals",
                    "hasMenuItem": [
                      { "@type": "MenuItem", "name": "Veg Thali" },
                      { "@type": "MenuItem", "name": "Dal Chawal" },
                      { "@type": "MenuItem", "name": "Roti Sabzi" }
                    ]
                  },
                  {
                    "@type": "MenuSection",
                    "name": "Biryani",
                    "hasMenuItem": [
                      { "@type": "MenuItem", "name": "Veg Biryani" }
                    ]
                  },
                  {
                    "@type": "MenuSection",
                    "name": "Snacks",
                    "hasMenuItem": [
                      { "@type": "MenuItem", "name": "Maggie" },
                      { "@type": "MenuItem", "name": "Chowmein Veg" }
                    ]
                  },
                  {
                    "@type": "MenuSection",
                    "name": "Beverages",
                    "hasMenuItem": [
                      { "@type": "MenuItem", "name": "Tea" },
                      { "@type": "MenuItem", "name": "Coffee" }
                    ]
                  }
                ]
              }
              `}
              </script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header/>
        {children}
        <Analytics/>
        <Footer/>
      </body>
    </html>
  );
}
