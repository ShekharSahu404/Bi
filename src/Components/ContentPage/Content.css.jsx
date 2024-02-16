import React from 'react'
import Footer from '../Footer/Footer';
import { BiChevronRight } from "react-icons/bi";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, atomOneDark,  } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';


export default function ContentCSS() {

  const codeString = `<div class="checkbox-container">
  <input class="checkbox-input" id="apples" type="checkbox" />
  <label class="checkbox" for="apples">
    <span>
      <svg width="12px" height="10px">
        <use xlink:href="#check"></use>
      </svg>
    </span>
    <span>Apples</span>
  </label>
  <input class="checkbox-input" id="oranges" type="checkbox" />
  <label class="checkbox" for="oranges">
    <span>
      <svg width="12px" height="10px">
        <use xlink:href="#check"></use>
      </svg>
    </span>
    <span>Oranges</span>
  </label>
</div>`;


  return (
    <body>
      
  
    {/* <Header/> */}
    <div className=' m-auto max-w-[800px] mt-7 '>
      <div className='flex flex-row gap-2 mb-2 items-center mx-4'>
          <ol className='hover:text-slate-400'> < Link onClick={() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }} to={"/"}>Home </Link></ol>
          <BiChevronRight className='size-5' />
          <ol>CSS</ol>
      </div>
      <div className=' text-[40px] '>
      <h1 className='my-4  font-bold mx-4 leading-[45px] sm2:leading-[50px] '>
      How can I convert a Map to a JavaScript object and vice versa?
      </h1>
     <div className='mx-4'>
     <img src="https://www.30secondsofcode.org/assets/cover/lake-loop-1200.webp" alt="photo" className='  rounded-md  '/>
     </div>
    </div>
    <div className='mx-4 my-4 '>
    <h1 className='my-8  font-bold text-[35px]  '>
      Definition</h1>
      <p className='my-4 text-[20px]'>Heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort. The improvement consists of the use of a heap data structure instead of a linear-time search to find the maximum or minimum element.</p>

      <h1 className='my-8  font-bold text-[35px]  '>
      Implementation</h1>
      <ol className='my-4 mx-8 text-[20px] list-disc'>
        <li className='my-4 text-[20px]'>Use recursion.</li>
        <li className='my-4 text-[20px]'>Use the spread operator (...) to clone the original array, arr.</li>
        <li className='my-4 text-[20px]'>Use closures to declare a variable, l, and a function heapify.</li>
        <li className='my-4 text-[20px]'>Use a for loop and Math.floor() in combination with heapify to create a max heap from the array.</li>
        <li className='my-4 text-[20px]'>Use a for loop to repeatedly narrow down the considered range, using heapify and swapping values as necessary in order to sort the cloned array.</li>
      </ol>
      <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{
        padding:'25px',
        borderRadius:'8px',
        backgroundColor:'#161A30',
        marginTop:'40px'
      }}
      wrapLongLines={true}
      >
      {codeString}
      </SyntaxHighlighter>

      <h1 className='my-8  font-bold text-[35px]  '>
      Conclusion</h1>

      <p className='mb-4 text-[20px]'>Heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort. The improvement consists of the use of a heap data structure instead of a linear-time search to find the maximum or minimum element.</p>
      
      <p className='text-right text-slate-400 text-[18px]'>Last updated : December 23, 2023 </p>



      {/* More suggestion */}
    
      <h1 className='my-8  font-bold text-[35px]  '>
      More Like This</h1>
      <div className=' flex  flex-row justify-center  md:max-w-[800px] md:mt-[40px] '>
      <div className=' grid  sm2:grid-cols-1 md:grid-cols-2 gap-6  '>
        
      <Link to={"/Javascript"}
       onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
      >
        <div className='group flex flex-col sm2:flex-row md:flex-col mb-8 gap-5 cursor-pointer'>

          <img src="https://www.30secondsofcode.org/assets/splash/laptop-plant-600.webp" alt="" className='h-[35vh] sm2:h-[25vh] group-hover:scale-[101%]  md:h-[35vh] object-cover rounded-md' />
          <div className='flex flex-col sm2:items-start '>
            <h2 className='text-[35px] font-semibold  text-white text-center md:text-left group-hover:text-blue-300 '>JavaScript</h2>
            <p className='text-[18px] leading-[25px] sm2:leading-[30px] md:pr-10 tracking-wide text-center sm2:text-left  md:text-left'>Browse a wide variety of ES6 helper functions, </p>
          </div>
        </div>
        </Link>

        <Link to={"/CSS"}
         onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
        <div className='group flex flex-col sm2:flex-row md:flex-col mb-8 gap-5'>
          <img src="https://www.30secondsofcode.org/assets/splash/camera-600.webp" alt="" className='h-[35vh] sm2:h-[25vh] md:h-[35vh] group-hover:scale-[101%] object-cover rounded-md' />
          <div className='flex flex-col sm2:items-start'>
            <h2 className='text-[35px] font-semibold  text-white text-center md:text-left  group-hover:text-blue-300'>CSS</h2>
            <p className='text-[18px] leading-[25px] sm2:leading-[30px] md:pr-10 tracking-wide text-center sm2:text-left  md:text-left'>A snippet collection of interactive CSS3 examples, covering layouts, styling, animation and user interactions.</p>
          </div>
        </div>
        </Link>

       
        </div>
      </div>
    </div>
    </div>
    {/* <Footer/> */}
    </body>


  )
}
