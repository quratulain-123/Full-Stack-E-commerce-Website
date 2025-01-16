import React from 'react'
import {ImGithub} from "react-icons/im"
import{
 FaFacebookF,
 FaTwitter,
 FaInstagram,
 FaYoutube,
 FaHome, 
} from "react-icons/fa"
import {MdLocationOn} from "react-icons/md"
import {BsPersonFill , BsPaypal} from "react-icons/bs"
function Footer() {
  return (
    <div className='bg-[#706d6d] py-20 font-mono'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
      <div className='flex flex-col gap-7'>
           <h1 className='text-4xl font-mono font-bold px-4 py-0'>Mini<span className='text-pink-900'>Mart</span></h1>
           <p className='text-white text-sm tracking-wide px-4'>reactBD.com</p>
           <div className='flex px-4 gap-2 text-lg text-gray-900 '>
            <ImGithub className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
           </div>
        </div>
         <div>
         <h2 className='text-2xl text-white font-semibold mb-4'>Locate Us</h2>
        <div className='text-base flex flex-col gap-1'>
          <p>MDN, Ruwi Muscat Oman</p>
          <p>Mobile: 0308353862</p>
          <p>Phone: 031975864</p>
          <p>E-mail: MiniMart@gmail.com</p>
        </div>
         </div>
         <div>
         <h2 className='text-2xl text-white font-semibold mb-4'>Profile</h2>
           <div className='flex flex-col text-base gap-2'>
           <p className='flex items-center gap-2 hover:text-white duration-300 cursor-pointer'> <span><BsPersonFill /></span>my account</p>
          <p className='flex items-center gap-2 hover:text-white duration-300 cursor-pointer'> <span><BsPaypal /></span>checkout</p>
          <p className='flex items-center gap-2 hover:text-white duration-300 cursor-pointer'> <span><MdLocationOn /></span>help & support</p>
          <p className='flex items-center gap-2 hover:text-white duration-300 cursor-pointer'> <span><FaHome /></span>order tracking</p>
           </div>
         </div>
         <div className='flex flex-col justify-center'>
          <input className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail' type="text" />
          <button className='text-sm text-white border-t-0 border hover:bg-gray-900 active:bg-white active:text-black '>Subscribe</button>
         </div>
        </div>
    </div>
  )
}

export default Footer