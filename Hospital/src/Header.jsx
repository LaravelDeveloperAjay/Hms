import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <div className=' flex'>
 <div>
  <ul className=' flex gap-8 text-xl p-10'>
    <li className=' text-5xl'>ShiftCare</li>
    <li className='mt-4'>Features
    </li>
    <li className='mt-4'> Pricing</li>
    <li className='mt-4'>About</li>
    <li className='mt-4'>Solutions</li>
    <li className='mt-4'>
      Resources </li>
    <li className='mt-4'>Partners</li>
    </ul>
 </div>
 <div>
  <ul className=' flex gap-10 text-xl p-10 mt-3'>
    <li className=' bg-red-400 p-2  rounded-2xl text-white'><button>Book a demo</button></li>
    <li className=' bg-slate-300 p-2  rounded-2xl'><button>Try for free</button></li>
  </ul>
 </div>
 </div>
 
  </div>
   
  )
}

export default Header