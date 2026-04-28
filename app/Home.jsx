'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
    const Router = useRouter();

    const loginClick = () => {
        Router.push('./signin');
    };

    const signupClick = () => {
        Router.push('./signup');
    };


  return (
    <>
       <div className='h-screen w-full flex justify-center items-center'>
        <div className='border border-green-500 rounded-lg p-5 flex flex-col gap-5'>
          <h1 className='font-bold font-sans'>
            Hello welcome to the app
         </h1>
         <div className='w-full flex justify-evenly'>
          <button onClick={loginClick}>
            Login
          </button>
           <button onClick={signupClick}>
            Sign-up
          </button>
         </div>
        </div>
       </div>
    </>
  )
}
