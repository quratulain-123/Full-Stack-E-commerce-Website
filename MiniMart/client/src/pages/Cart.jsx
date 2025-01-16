 import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Items from '../components/Items'
import { ToastContainer , toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
 

function Cart() {
  const productsData = useSelector((state) => state.mart.productsData);
  const userInfo = useSelector((state) => state.mart.userInfo)
  const[totaLamt , setTotaLAmt] = useState("")
  const [payNow , setPayNow] = useState(false)
  useEffect(()=> {
    let price = 0
    productsData.map((item)=>{
      price += item.price * item.quantity;
      return price;
    });
    setTotaLAmt(price);
  }, [productsData]);
  const handleCheckout = () => {
    if(userInfo){
      setPayNow(true)
    } else{
      toast.error("Please Sign in Checkout")
    }
  }
const payment = async(token) => {
  await axios.post("http://localhost:5000/payment",{
    amount:totaLamt * 100,
    token: token,
    
  })
}

  return (
    <div>
      <img className='w-full h-60 object-cover'
       src="https://plus.unsplash.com/premium_photo-1669227513940-23a4494529b6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       <div className='max-w-screen-xl mx-auto flex py-20'>
         <Items />
         <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
           <div className='flex flex-col border-b-[1px] gap-6 border-gray-600 pb-6'>
            <h2 className='text-2xl font-medium text-pink-600'>Cart Totals</h2>
            <p className='flex items-center gap-4 text-base'>Subtotal 
              <span className='font-bold text-lg'>$ {totaLamt}</span>
            </p>
            <p className='flex items-center gap-4 text-base'>Shipping
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit est nulla quo labore.
              </span>
            </p>
           </div>
           <p className='font-bold flex justify-between mt-6 text-pink-600 '>Total Amount
            <span className='text-xl font-bold text-black'>$ {totaLamt}</span>
           </p>
           <button onClick={handleCheckout} className=' text-base text-white w-full bg-black py-3 mt-6 hover:bg-gray-800 duration-300'>proceed to checkout
           </button>
           {payNow && (
              <div className='w-full mt-6 flex items-center justify-center'>
                <StripeCheckout
                stripeKey='pk_test_51PwTKMGrgwMJxe9fwumbLBKOn7foZPOXC6vMbYbkZQLGvpO8aDBhKE968Izc4vBelynTDTlnMEv1TsZckwS284dq005oxaQWLp'
                name='MiniMart'
                amount={totaLamt * 100}
                label='Pay To MiniMart'
                description={`Your Payment amount is $${totaLamt}`}
                token={payment}
                email={userInfo.email}
                />
              </div>
            )}
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

export default Cart