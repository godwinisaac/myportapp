import React from 'react';
import { FaMailBulk, FaLinkedin } from 'react-icons/fa';
import { MdOutlinePhonelinkRing } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import {myimg} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-20">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="flex justify-center items-center">
            <img className="w-20 h-20 rounded-full" src={myimg} alt="myimg" />
            <h2 className="uppercase font-titleFont">Godwin issac</h2>
        </div>
        <div className="flex gap-4 justify-center">
            <span className="">
                
                godwinisaac1992@gmail.com
            </span>
        </div>
        <div className="flex gap-4 justify-center ">
            <a href='mailto:godwinisaac1992@gmail.com' Using target="_blank" rel="noreferrer" className="bannerIcon">
                <FaMailBulk/>
            </a>
            <a href='https://www.linkedin.com/in/godwin-isaac-n92i10s01/' Using target="_blank" rel="noreferrer" className="bannerIcon">
                <FaLinkedin/>
            </a>
            <a href='https://wa.me/918248815699' Using target="_blank" rel="noreferrer" className="bannerIcon">
                <SiWhatsapp/>
            </a>
            <a href='tel:+918248815699' Using target="_blank" rel="noreferrer" className="bannerIcon">
                <MdOutlinePhonelinkRing/>
            </a>
        </div>
      </div>
      <div className="w-full h-full ">
        <h3 className="text-xl uppercase text-head tracking-wider">
            Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-2">
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    About
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Portfolio
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Service
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Blog
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Contact
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
        </ul>
      </div>
      <div className="w-full h-full ">
      <h3 className="text-xl uppercase text-head tracking-wider flex justify-center items-center">
            Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-2">
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Authentication
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    System Status
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Terms of Service
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Pricing
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Over Right
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
        </ul>
      </div>
      <div className="w-full h-full ">
      <h3 className="text-xl uppercase text-head tracking-wider">
            Developers
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-2">
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Documentation
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Authentication
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    API Reference
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Support
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
            <li>
                <span className="w-full text-lg hover:text-head duration-300 cursor-pointer relative group">
                    Open Source
                    <span className="absolute h-[1px] w-full inline-flex bg-head -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">

                    </span>
                </span>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
