import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedin,FaMailBulk,FaReact } from "react-icons/fa";
import { SiTailwindcss,  SiSpringboot,SiJava, SiMysql } from "react-icons/si";

const LeftBanner = () => {

    const [text] = useTypewriter({
        words:["Professional Coder.", "Full Stack Developer.","UI Designer."],
        loop: true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
    });
    
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
            <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
            <h1 className=" text-6xl font-bold text-white">
                Hi, I'm {" "}
                 <span className="text-head capitalize">Godwin Isaac</span>
            </h1>
            <h2 className="text-4xl font-bold text-white">
                a <span>{text}</span>
                <Cursor
                 cursorBlinking="false"
                 cursorStyle="|"
                 cursorColor="#ff014f" 
                />
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
            A dedicated Full-Stack Engineer with a keen interest in Application development and Computational Science with a strong passion for innovative technologies. Professional with a B'tech degree and trained from SLA institutes, enthusiastic about problem-solving and large-scale impacts. Has more than 6 Months of experience, is interested in devising innovative solutions, and constantly strives to challenge the status quo. Seeking an opportunity to deploy my skills in bringing together Science, Technology, and Innovation
            </p>
        </div>
        <div className="flex flex-col lgl:flow-row gap-6 lgl:gap-0 justify-between">
                <div>
                    <h2 className="text-base uppercase font font-titleFont mb-4">Find me in</h2>
                    <div className="flex gap-4">
                        <a href='mailto:godwinisaac1992@gmail.com' Using target="_blank" rel="noreferrer" className="bannerIcon">
                            <FaMailBulk/>
                        </a>
                        <a href='https://www.linkedin.com/in/godwin-isaac-n92i10s01/' Using target="_blank" rel="noreferrer" className="bannerIcon">
                            <FaLinkedin/>
                        </a>
                </div>
            </div>
            <div className="">
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <FaReact/>
                    </span>
                    <span className="bannerIcon">
                        <SiJava/>
                    </span>
                    <span className="bannerIcon">
                        <SiSpringboot/>
                    </span>
                    <span className="bannerIcon">
                        <SiMysql/>
                    </span>
                    <span className="bannerIcon">
                        <SiTailwindcss/>
                    </span>
            
                </div>
            </div>
        </div>
      </div>
    
  );
}

export default LeftBanner;