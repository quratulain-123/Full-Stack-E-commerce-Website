import React, {useEffect, useState}from 'react'
import { ToastContainer , toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from "react-icons/md";
import {HiOutlineArrowLeft} from "react-icons/hi"
import { deleteItem, decrementQuantity , increamentQuantity, resetCart } from '../redux/martSlice';
import { Link } from 'react-router-dom'

function Items() {
    let [baseqty, setBaseQty] = useState(1);
    const dispatch = useDispatch()
     const productsData = useSelector((state) => state.mart.productsData);
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
  return (
    <div className='w-2/3 pr-10'>
        <div className='w-full'>
            <h2 className='text-2xl text-pink-600'>Shopping cart</h2>
        </div>
        <div>
            {productsData.map((item) => (
                <div key={item._id} className='flex items-center justify-center gap-6 mt-6'>
                    <div className='flex items-center gap-2'>
                        <MdOutlineClose onClick={()=>dispatch(deleteItem(item._id))&& toast.error(`${item.title} is removed `)}
                        className='tex-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                        <img className='w-32 h-32 object-cover' src={item.image} alt="" />
                    </div>
                    <h2 className='w-52'>{item.title}</h2>
                    <p className='w-10'>${item.price}</p>
                    <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
            <p className='text-sm'>Quantity</p>
            <div className='flex items-center gap-4 text-sm font-semibold'>
                <span
                onClick={()=>
                dispatch(
                  decrementQuantity({
            _id: item._id,
            title: item.title,
            image:  item.image,
            price:  item.price,
            quantity: 1,
            description: item.description,
                    })
                )}
                className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                >
                 -
              </span>
              {item.quantity}
              <span
              onClick={()=>
                dispatch(
                    increamentQuantity({
                _id: item._id,
                title: item.title,
                image:  item.image,
                price:  item.price,
                quantity: 1,
                description: item.description, 
                    })
                )
              }>
              <button  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
              </span>  
            </div>
          </div>
                    <p className='W-14'>${item.quantity * item.price}</p> 
                </div>               
            ))}
        </div>
        <button onClick={()=>dispatch(resetCart()) && toast.error("your Cart is empty")} className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300'>Reset cart</button>
         <Link to="/">
         <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
            <span>
                <HiOutlineArrowLeft />
            </span>
            go Shopping</button>
         </Link>
    </div>
  )
}

export default Items