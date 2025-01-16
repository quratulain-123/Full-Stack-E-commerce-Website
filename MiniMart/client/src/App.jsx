 import React from 'react'
 import Home from './pages/Home'
 import Header from './components/Header'
 import Footer from './components/Footer'
 import Cart from './pages/Cart'
 import Product from './components/Product'
 import Login from './pages/Login'
 import { productsData } from './api/Api'
 import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
 } from "react-router-dom"

const Layout = () => {
  return(
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Home />,
        loader: productsData,
      },
      {
        path:"/product/:id",
        element: <Product />,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:"/login",
        element:<Login/>,
      },
    ],
  },
]);

 function App() {
   return (
     <div>
      <RouterProvider router={router} />
     </div>
   )
 }
 
 export default App
 