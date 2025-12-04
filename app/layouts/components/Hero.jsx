"use client";

import { motion } from "framer-motion";


export function Hero() {
return (
<section className="grid md:grid-cols-2 gap-10 mt-10">
<motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
<span className="text-green-300 text-xs border border-green-500/40 px-2 py-1 rounded-full">Fast delivery in Bareilly</span>


<h2 className="text-4xl font-bold mt-4 leading-tight">
Fresh & Local Food
<span className="text-green-400"> Delivered to Your Home</span>
</h2>


<p className="text-slate-300 mt-3">
We partner with street vendors, local kitchens, and home-style cooks.
Get samosa, kachori, chowmein, thali, biryani — sab kuch!
</p>


<div className="flex gap-4 mt-5">
<button className="bg-green-500 px-6 py-2 rounded-lg text-slate-950 font-bold shadow hover:scale-105 transition">Start Ordering</button>
<button className="border px-6 py-2 rounded-lg hover:border-green-400 hover:text-green-400 transition">Watch Demo</button>
</div>
</motion.div>


<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
<div className="rounded-3xl overflow-hidden border border-green-500/30 shadow-xl">
<img src="https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg" className="w-full h-80 object-cover" />
</div>
</motion.div>
</section>
);
}