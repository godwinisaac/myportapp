import React from 'react';

import LeftBanner from './LeftBanner';
import {myimg} from "../../assets/index";

const Banner = () => {
    
  return (
    <section
     id='home' 
     className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] border-b-black font-titleFont">
      
      <LeftBanner/>
      <div className="w-full lgl:w-[50%] flex justify-center items-center relative  ">
        <img className="w-[500px] h-[500px] lgl:w-[400px] lgl:h-[400px]  xs:w-[250px] xs:h-[250px] z-10 rounded-full"
         src={myimg} 
         alt="myimg" />
        <div className="absolute bottom-0 w-[500px] h-[500px] lgl:w-[400px] lgl:h-[400px] xs:w-[250px] xs:h-[250px] bg-gradient-to-r from-[#le2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-full animate-pulse"></div>
      </div>
      
    
    </section>
  );
}

export default Banner;
