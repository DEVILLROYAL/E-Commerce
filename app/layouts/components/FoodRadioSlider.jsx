"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Utensils,
  Soup,
  Coffee,
  IceCream,
  ScrollText,
} from "lucide-react"; // icons
import { useSwipeable } from "react-swipeable"; // swipe support

export default function FoodRadioSlider() {
  const categories = [
    {
      name: "Veg Meals",
      icon: <Utensils size={20} />,
      images: [
        "https://ik.imagekit.io/greenstore/Food%20Image/special-thali.jpg",
        "https://ik.imagekit.io/greenstore/Food%20Image/simple-thali.jpg",
      ],
    },
    {
      name: "Rice & Pulao",
      icon: <Soup size={20} />,
      images: [
        "https://ik.imagekit.io/greenstore/Food%20Image/matar-pulao.jpg",
        "https://ik.imagekit.io/greenstore/Food%20Image/mini-thali.jpg",
      ],
    },
    {
      name: "Maggie",
      icon: <ScrollText size={20} />,
      images: [
        "https://ik.imagekit.io/greenstore/Food%20Image/matar-paneer.jpg",
        "https://ik.imagekit.io/greenstore/Food%20Image/main.jpg",
      ],
    },
    {
      name: "Beverages",
      icon: <Coffee size={20} />,
      images: [
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
        "https://ik.imagekit.io/greenstore/Food%20Image/roti.jpg",
      ],
    },
    {
      name: "Desserts",
      icon: <IceCream size={20} />,
      images: [
        "https://ik.imagekit.io/greenstore/Food%20Image/dal-dadka.jpg",
        "https://ik.imagekit.io/greenstore/Food%20Image/chole.jpg",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const activeCategory = categories[activeIndex];

  // Auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % activeCategory.images.length);
    }, 3500);

    return () => clearInterval(id);
  }, [activeIndex]);

  // Swipe controls (mobile)
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setSlideIndex((i) => (i + 1) % activeCategory.images.length),
    onSwipedRight: () =>
      setSlideIndex((i) =>
        i === 0 ? activeCategory.images.length - 1 : i - 1
      ),
    trackMouse: true,
  });

  return (
    <div className="w-full mt-12 space-y-6">
      {/* Horizontal Scroll Category Bar */}
      <div className="flex overflow-x-auto gap-4irebase md:justify-evenly gap-5 scrollbar-hide px-2 py-3">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              setSlideIndex(0);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap border transition
              ${
                activeIndex === i
                  ? "bg-green-500 text-slate-900 border-green-400 shadow"
                  : "border-slate-600 text-slate-300 hover:border-green-400 hover:text-green-300"
              }`}
          >
            {cat.icon}
            <span className="text-sm">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Slideshow */}
      <div
        {...handlers}
        className="relative w-full max-w-xl mx-auto h-64 rounded-3xl overflow-hidden shadow-xl border border-slate-700"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeCategory.images[slideIndex]}
            src={activeCategory.images[slideIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full object-cover select-none"
          />
        </AnimatePresence>

        {/* Category label */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-xs px-3 py-1 rounded-lg text-green-300 backdrop-blur-sm">
          {activeCategory.name}
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-3 left-3 flex gap-1">
          {activeCategory.images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                slideIndex === i ? "bg-green-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
