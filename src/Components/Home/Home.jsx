import React from 'react'
import './Home.css'
import Blogs from '../Blogs/Blogs'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Content from '../ContentPage/Content.javascript'
import { BrowserRouter,Router, Routes, Route } from "react-router-dom";


export default function Home() {
  return (
  //   <BrowserRouter>
  //   <Header/>
    
   
  //  <Routes>
  //  <Route path="/Javascript" element={<Content/>}/>
  //  <Route path="/CSS" element={<ContentCSS/>}/>
    
  
    
    
  //  </Routes>
 <>
   
    <div className='flex flex-col justify-center items-center '>
      <div className='md:flex md:justify-center md:my-3 sm:h-[500px] md:max-h-[250px] mb-5'>
        <div className='flex flex-row justify-center align-center mt-6  ' >
            <img src="https://www.30secondsofcode.org/assets/splash/widescreen-600.webp" alt="Photo" className='block h-[35vh] rounded-md w-[35vh] md:hidden '/>
            </div>
        <div className='flex flex-col md:flex md:flex-row justify-start align-start m-auto md:max-w-[750px] md:my-[40px] md:test md:justify-center md:items-center md:h-[250px] gap-7 mx-10 '>
            <div className='flex flex-col justify-center align-center  '>
                <h1 className='text-[35px] font-bold my-1 text-white text-center md:text-left'>Snippet Collections</h1>
                <p className='text-[18px] leading-[30px] md:pr-10 tracking-wide text-center md:text-left'>Big Blog provides a wide variety of snippet and article collections for all your development needs. Explore individual language collections or browse through collections about specific topics and programming concepts.</p>
            </div>
            <div className='flex flex-row justify-center align-center  ' >
            <img src="https://www.30secondsofcode.org/assets/splash/widescreen-600.webp" alt="Photo" className='hidden md:block md:rounded-md md:min-w-[250px] '/>
            </div>
        </div>
     </div>
      <Blogs/>
    </div>
   
   
    {/* </BrowserRouter> */}
    </>
  )
}
