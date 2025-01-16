
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Header() {
  const productsData = useSelector((state) => state.mart.productsData);
  const userInfo = useSelector((state) => state.mart.userInfo)
  console.log(userInfo)
  return (
    <div className='w-full h-20  z-50 bg-slate-100  px-24 drop-shadow-md sticky top-0 '>
      <div className='max-w-screen-xl flex h-full mx-auto items-center justify-between'>
         <Link to="/">
         <div>
           <h1 className='text-4xl font-mono font-bold px-4 py-4'>Mini<span className='text-pink-600'>Mart</span></h1>
        </div>
         </Link>
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-pink-600 decoration-[1px] cursor-pointer duration-300'>
              Home
              </li>
            <li className='text-base text-black font-bold hover:text-pink-600 decoration-[1px] cursor-pointer duration-300'>
              Pages
              </li>
            <li className='text-base text-black font-bold hover:text-pink-600 decoration-[1px] cursor-pointer duration-300'>
              Shop
              </li>
            <li className='text-base text-black font-bold hover:text-pink-600 decoration-[1px] cursor-pointer duration-300'>
              Element
              </li>
            <li className='text-base text-black font-bold hover:text-pink-600 decoration-[1px] cursor-pointer duration-300'>
              Blog
              </li>
          </ul>
          <div className='relative '>
             <Link to="/cart">
             <img className='w-8' src="https://tse3.mm.bing.net/th?id=OIP.zHTLioryIoQ8_AS2VFLVnwHaHa&pid=Api&P=0&h=220" alt="bag" />
            <span className='absolute w-6 top-2 left-1 text-sm cursor-pointer flex items-center justify-center font-semibold'>{productsData.length}</span>           
            </Link>
          </div >
           <Link to="/login">
           <img className='w-9 h-9 rounded-full' src={
            userInfo
            ? userInfo.image
            : "https://tse1.mm.bing.net/th?id=OIP.iIWbZFvNdC8V5TARgmxzmwHaHa&pid=Api&P=0&h=220"
           } alt="" />
           </Link>
           {
            userInfo && <p className='text-base font-semibold underline underline-offset-2'>{userInfo.name}</p>
           }
        </div>
      </div>
    </div>
  )
}

export default Header