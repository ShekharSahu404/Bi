import React from "react";
import data from '../BlogData/Data'
import { Link } from "react-router-dom";

export default function Blogs() {

  

  const showBlog = data.map(data=>
    <Link to={data.url} 
    onClick={() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }}
    >
    <div key={data.id} className="group flex flex-col sm2:flex-row md:flex-col mb-8 gap-5 hover:cursor-pointer " >
    <img
      src={data.imgLink}
      alt=""
      className="h-[35vh] sm2:h-[25vh] md:h-[35vh] object-cover rounded-md group-hover:scale-[101%]"
    />
    <div className="flex flex-col sm2:items-start ">
      <h2 className="text-[35px] font-semibold  text-white text-center md:text-left group-hover:text-blue-300  ">
        {data.title}
      </h2>
      <p className="text-[18px] leading-[25px] sm2:leading-[30px] md:pr-10 tracking-wide text-center sm2:text-left  md:text-left">
        {data.content}
      </p>
    </div>
  </div>
  </Link>

  );
  console.log(showBlog)
  return (
    <div className=" flex  flex-row justify-center mx-[40px] md:max-w-[750px] md:mt-[100px] ">
    
      <div className=" grid  sm2:grid-cols-1 md:grid-cols-2 gap-6  ">
      {showBlog}


        {/* <div className="group flex flex-col sm2:flex-row md:flex-col mb-8 gap-5  ">
          <img
            src="https://www.30secondsofcode.org/assets/splash/laptop-plant-600.webp"
            alt=""
            className="h-[35vh] sm2:h-[25vh] md:h-[35vh] object-cover rounded-md group-hover:scale-[101%]"
          />
          <div className="flex flex-col sm2:items-start ">
            <h2 className="text-[35px] font-semibold  text-white text-center md:text-left group-hover:text-blue-300  ">
              JavaScript
            </h2>
            <p className="text-[18px] leading-[25px] sm2:leading-[30px] md:pr-10 tracking-wide text-center sm2:text-left  md:text-left">
              Browse a wide variety of ES6 helper functions
            </p>
          </div>
        </div>


        <div className=" flex flex-col sm2:flex-row md:flex-col mb-8 gap-5 ">
          <img
            src="https://www.30secondsofcode.org/assets/splash/camera-600.webp"
            alt=""
            className="h-[35vh] sm2:h-[25vh] md:h-[35vh] object-cover rounded-md hover:scale-105"
          />
          <div className="flex flex-col sm2:items-start">
            <h2 className="text-[35px] font-semibold  text-white text-center md:text-left  ">
              CSS
            </h2>
            <p className="text-[18px] leading-[25px] sm2:leading-[30px] md:pr-10 tracking-wide text-center sm2:text-left  md:text-left">
              A snippet collection of interactive CSS3 examples, covering
              layouts, styling, animation and user interactions.
            </p>
          </div>
        </div>

        <div className=" flex flex-col sm2:flex-row md:flex-col mb-8 gap-5">
          <img
            src="https://www.30secondsofcode.org/assets/splash/camera-600.webp"
            alt=""
            className="h-[35vh] sm2:h-[25vh] md:h-[35vh] object-cover rounded-md"
          />
          <div className="flex flex-col sm2:items-start">
            <h2 className="text-[35px] font-semibold   text-white text-center md:text-left  ">
              CSS
            </h2>
            <p className="text-[18px] leading-[25px] sm2:leading-[30px] md:pr-10 tracking-wide text-center sm2:text-left  md:text-left">
              A snippet collection of interactive CSS3 examples, covering
              layouts, styling, animation and user interactions.
            </p>
          </div>
        </div> */}

      </div>
     
    </div>
  );
}
