import { Facebook, Instagram, X, Youtube, Linkedin, Dribbble } from "lucide-react"

export default function Footer() {
  return (
    <>
       <footer className="h-auto flex flex-col border border-black absolute bottom-0 justify-center">
        <div className="flex justify-between">
            <div className="flex items-center p-4" >
                <p className='text-sm'>
                    © {new Date().getFullYear()} WhatbytesStore. All rights reserved.
                </p>
            </div>
            <div className='w-max flex flex-row gap-2 p-5 items-center ' >
                <div className="cursor-pointer">
                    <Facebook/>
                </div>
                <div className="cursor-pointer">
                    <Instagram/>
                </div>
                <div className="cursor-pointer">
                    <Dribbble/>
                </div>
                <div className="cursor-pointer">
                    <X/>
                </div>
                <div className="cursor-pointer">
                    <Youtube/>
                </div>
                <div className="cursor-pointerx">
                    <Linkedin/>
                </div>
            </div>
        </div>
       </footer>
    </>
  )
}
