import React from 'react'
import './Header.css'
import { BiHome, BiSearch, BiMenu, BiLogoLinkedin } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='right'>
                    <span className='border-[6px] border-white text-[35px] px-[4px] font-semibold text-white'>BIG</span>
                    <span className='border-b-[6px] ml-3  border-white  text-[35px] font-semibold px-[4px] text-white'>BLOG</span>
                </div>
                <div className='left'>
                   <Link to={"/"}  onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }} > <BiHome className=' hidden md:size-[30px] text-white hover:text-slate-400  md:block  ' /> </Link>
                   <a href="https://www.linkedin.com/in/shekhar-sahu-97b31a266/"> <BiLogoLinkedin className=' hidden md:size-[30px] text-white hover:text-slate-400 md:block  ' /></a>
                    <BiSearch className=' hidden md:size-[30px] text-white hover:text-slate-400 md:block  ' />
                    <BiMenu className='size-[40px] md:size-[30px] text-white hover:text-slate-400 '  />
                </div>
            </div>
        </header>
    )
}
