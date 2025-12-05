"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
  const images = [
    "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg",
    "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 py-10 overflow-hidden">
      
      {/* Background Slider */}
      <div className="absolute inset-0 -z-10 opacity-30">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className={`absolute inset-0 w-full h-full object-cover fade-image-${i}`}
          />
        ))}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-green-400 drop-shadow-lg"
      >
        <div className="flex gap-5 justify-center items-center">
          Coming Soon <Rocket/>
        </div>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-black text-sm drop-shadow"
      >
        We are working hard to bring you the next big update of Green Store.
      </motion.p>

      <ul className="text-black mt-6 space-y-2 text-sm drop-shadow">
        <li>⚙️ Currently in active development</li>
        <li>🛠️ Backend & database setup in progress</li>
        <li>📦 Admin & vendor dashboards under construction</li>
        <li>🚚 Delivery tracking system coming soon</li>
        <li>📱 Mobile app (Android + iOS) being prepared</li>
      </ul>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-10"
      >
        <p className="text-black text-sm mb-2">Follow us for updates:</p>
        <Link
          href="https://www.instagram.com/thegreenleafbly/"
          target="_blank"
          className="text-blue-300 font-semibold hover:underline"
        >
          <span className="font-bold">@thegreenleafbly</span>
        </Link>
      </motion.div>
    </div>
  );
}
