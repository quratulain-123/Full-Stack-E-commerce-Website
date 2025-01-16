import React, { useEffect, useState } from 'react'
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../redux/martSlice';
import {ToastContainer , toast} from 'react-toastify';

function Product() {
  const dispatch = useDispatch()
  const[details , setDetails] = useState({});
  let [baseqty, setBaseQty] = useState(1);
    const Location = useLocation();
    useEffect(() => {
      setDetails(Location.state.item)
    }, [])
  return (
    <div>
      <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
       <div>
        <img className='w-full h-[550px] object-cover' src={details.image} alt="" />
       </div>
       <div className='w-3/5 flex flex-col justify-center gap-12'>
         <div>
          <h2 className='text-4xl font-semibold'>{details.title}</h2>
          <div className='flex items-center gap-4 mt-3'>
          <p className='line-through text-gray-500'>${details.oldPrice}</p>
          <p className='font-semibold'>${details.price}</p>
          </div>
         </div>
         <div className='flex items-center gap-2 text-base'>
           <div className='flex'>
           <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
           </div>
           <div>
           <p className='text-xs text-gray-500'>(1 customer review)</p>
           </div>
         </div>
         <p className='text-sm text-gray-500 -mt-3'>{details.description}</p>
         <div className='flex gap-4'>
          <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
            <p className='text-sm'>Quantity</p>
            <div className='flex items-center gap-4 text-sm font-semibold'>
              <button onClick={() => setBaseQty(baseqty===1 ? (baseqty = 1) : baseqty -1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
              <span>{baseqty}</span>
              <button onClick={() => setBaseQty(baseqty+1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
            </div>
          </div>
          <button onClick={() => dispatch(addToCart({
            _id: details._id,
            title: details.title,
            image: details.image,
            price: details.price,
            quantity: baseqty,
            description: details.description,
          })
            ) & toast.success(`${details.title} is added`)
          } className='bg-black text-white py-3 px-6 active:bg-gray-800'>add to cart</button>
         </div>
         <p className='text-base text-gray-500'>Category: <span className='font-medium capitalize'>{details.category}</span></p>
       </div>
      </div>
      <ToastContainer 
       position="top-left"
       autoClose={2000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
      />  
    </div>
  )
}

export default Product