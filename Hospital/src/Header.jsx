import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <nav className='navbar flex'>
 <div>
  <ul className=' flex gap-8 p-10'>
    <li className=' text-3xl'> <b>ShiftCare </b></li>
    <li className='mt-1'>Features
    </li>
    <li className='mt-1'> Pricing</li>
    <li className='mt-1'>About</li>
    <li className='mt-1'>Solutions</li>
    <li className='mt-1'>
      Resources </li>
    <li className='mt-1'>Partners</li>
    </ul>
 </div>
 <div className=''>
  <ul className=' flex gap-10  p-10 mx-24 '>
    <li className=' bg-red-400 p-2  rounded-2xl text-white hover:bg-red-500'><button>Book a demo</button></li>
    <li className=' bg-slate-300 p-2  rounded-2xl hover:bg-slate-500'><button>Try for free</button></li>
  </ul>
 </div>
 </nav>
 
  </div>
   
  )
}

export default Header