import React from 'react'
import { IoSearch } from 'react-icons/io5'

export default function NewsLetter() {
  return (
    <div className='w-[65%] h-[60%] flex flex-col items-center justify-center mx-auto mb-10 p-12 gap-5 bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)]'>
        <h1 className='text-3xl font-normal'>Get Exclusive Offer On Your Email</h1>
        <p className='text-sm'>Subscribe to our newsletter and stay updated</p>
        <div className="flex-1 relative flex flex-col items-end justify-center mx-6">
        <input
          className="w-full px-4 py-3 outline-none rounded-full placeholder-gray-500 placeholder:font-light text-gray-900 border-2 border-black"
          type="email"
          placeholder="Your email id"
        />
        <button className="absolute mr-1  bg-red-500 text-white px-5 py-3 rounded-full border-black border-1">
          Subscribe
        </button>
      </div>
    </div>
  )
}
