import React from 'react'
import ProductsCart from '../components/ProductsCart'

function Products({products}) {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-pink-600 text-black py-2 w-80 text-center '>Happy Hunting</h1>
        <span className='w-20 h-[3px] bg-pink-600'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas facere consequuntur eveniet officia inventore. Rerum esse temporibus vero itaque, nemo quos laudantium fuga corrupti nam dolorum, dolores iure libero.</p>
      </div>
       <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
        {products.map((item) => (
          <ProductsCart key={item._id} product={item} />
        ))}
       </div>
    </div>
  )
}

export default Products