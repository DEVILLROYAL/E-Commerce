"use client";

import { motion } from "framer-motion";
import { Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';


export function Hero() {

    const Router = useRouter();

    const handleClick = () => {
        Router.push('/comming');
    };
    
    const handleProfile = () => {
        Router.push('https://www.swiggy.com/city/bareilly/the-green-leaf-phoenix-mall-rest1150588');
    };

return (
<section className="grid md:grid-cols-2 m-2">
<motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
<span className="text-green-300 text-xs border border-green-500/40 px-2 py-1 rounded-full">Fast delivery in Bareilly</span>


<h2 className="text-4xl font-bold mt-4 leading-tight">
Brends & Trends
<span className="text-green-400"> Delivered to Your Home</span>
</h2>


<p className="text-black mt-3 text">
We partner with street artist, local creators, and home-style cooks.
Get electronics, fashion, stationary, gadgets — sab kuch!
</p>


<div className="flex gap-4 m-5">
<button className="bg-green-500 px-6 py-2 rounded-lg font-bold text-white gap-2 flex justify-center items-center shadow hover:scale-105 transition" onClick={handleClick} >Launching Soon <Rocket/></button>
<button className="border px-6 py-2 rounded-lg hover:border-green-400 hover:text-green-400 transition" onClick={handleProfile} >Watch Demo</button>
</div>
</motion.div>


<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
<div className="rounded-3xl overflow-hidden border border-green-500/30 shadow-xl">
<img src="https://lh3.googleusercontent.com/gg-dl/AFfU-fKn3Xv1kDP3LCf0tu3zZ8xBZRHOqNyAQf-DBcmth3W_shSBR11dkwZr1Fef-6cMEPQDrs5cdhai9clE9rw5AXblqbzRBgfZ90Wh2sUCKeTWU2mlJCU4cp91mVXtGyEnTZKy0JVlguz20MkZmRTTqQTQDmVCZDRL27Xllw0L1o1aYsJQeg=s1024-rj" className="w-full h-80 object-cover" />
</div>
</motion.div>
</section>
);
}