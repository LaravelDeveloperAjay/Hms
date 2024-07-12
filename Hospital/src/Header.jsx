import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
    
      <nav className='navbar flex'>
      
 <div>
  <ul className=' flex gap-8 p-10 cursor-pointer'>
    <li className=' text-3xl'> <b>ShiftCare </b></li>
    <li className='mt-2'>Features
    </li>
    <li className='mt-2'> Pricing</li>
    <li className='mt-2'>About</li>
    <li className='mt-2'>Solutions</li>
    <li className='mt-2'>
      Resources </li>
    <li className='mt-2'>Partners</li>
    </ul>
 </div>
 <div className=''>
  <ul className=' flex justify-end gap-3 p-3 '>
    <li className=' bg-red-500 p-2  rounded-2xl text-white hover:bg-red-400 '><button>Book a demo</button></li>
    <li className=' bg-slate-400 p-2  rounded-2xl hover:bg-slate-300'><button>Try for free</button></li>
  </ul>
 </div>
 </nav>
 
  </div>
   
  )
}

export default Header