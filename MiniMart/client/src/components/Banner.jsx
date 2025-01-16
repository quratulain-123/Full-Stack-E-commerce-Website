import React, { useState } from 'react'
import { GoChevronRight } from "react-icons/go";
import { LuChevronLeft } from "react-icons/lu";

function banner() {
  const [currentSlide , setCurrentSlide] = useState(0)
  const data = [
     "https://plus.unsplash.com/premium_photo-1715604349932-88b5732e90e6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "https://plus.unsplash.com/premium_photo-1661458436994-5a1d36c28756?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "https://plus.unsplash.com/premium_photo-1661645449694-5bf9766205e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "https://plus.unsplash.com/premium_photo-1714226832576-f4356d4ab92b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const prevSlide =() =>{
    setCurrentSlide(currentSlide === 0 ? 3 :(prev) => prev - 1)
  }
  const nextSlide =() =>{
    setCurrentSlide(currentSlide === 3 ? 0 :(prev) => prev + 1)
  }
  console.log(currentSlide)
  return (
    <div className='w-full h-auto overflow-x-hidden drop-shadow-md'>
     <div className='w-screen h-[650px] relative'>
      <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
        <img className='w-screen h-auto object-cover ' src={data[0]} loading='priority' />
        <img className='w-screen h-auto object-cover ' src={data[1]}  />
        <img className='w-screen h-auto object-cover ' src={data[2]}  />
        <img className='w-screen h-auto object-cover ' src={data[3]}  />
      </div>
      <div className='absolute w-fit left-0 right-0 flex mx-auto gap-8 bottom-44'>
        <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointerhover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
        <LuChevronLeft />
        </div>
        <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointerhover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
        <GoChevronRight />
        </div>
      </div>
     </div>
    </div>
  )
}

export default banner