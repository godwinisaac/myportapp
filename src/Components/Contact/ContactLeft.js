import React from 'react';
import {  FaLinkedin, FaMailBulk } from "react-icons/fa";
import { c1 } from '../../assets';
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-10 rounded-lg shadow-shadowOne flex flex-col gap-10 justify-center">
                    <img className="w-full h-64 rounded-lg object-cover  mb-4 mt-6" src={c1} alt="contact" />
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-bold text-white">
                            Godwin isaac
                        </h3>
                        <p className="text-base font-normal text-gray-500">
                            Java Developer
                        </p>
                        <p className="text-base text-gray-400 tracking-wide">
                            Chennai, Tamilnadu
                        </p>
                        <p className="text-base text-gray-400 flex items-center gap-2">
                            Phone:
                            <span className="text-lightColor">+918248815699</span>
                        </p>
                        <p className="text-base text-gray-400 flex items-center gap-2">
                            Email:
                            <span className="text-lightColor">
                                godwinisaac1992@gmail.com
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            find me in
                        </h2>
                        <div className="flex gap-4">
                            <a href='mailto:godwinisaac1992@gmail.com' Using target="_blank" rel="noreferrer" className="bannerIcon">
                                <FaMailBulk/>
                            </a>
                            <a href='https://www.linkedin.com/in/godwin-isaac-n92i10s01/' Using target="_blank" rel="noreferrer" className="bannerIcon">
                                <FaLinkedin/>
                            </a>
                        </div>
                    </div>
                </div>
  );
}

export default ContactLeft;
