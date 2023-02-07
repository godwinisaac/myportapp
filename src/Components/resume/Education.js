import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
     initial={{opacity:0}}
     animate={{opacity:1, transition:{duration:0.5}}}
     className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
                <div className="lgl:w-[50%]">
                    <div className="p-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-head tracking-[4px] uppercase">
                            (2013-2017),(2022)
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Education Qualification
                        </h2>
                    </div>
                    <div className="">
                        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                            <ResumeCard
                            title="B'tech in Mechanicl Engineering"
                            subTitle="Bharath University (2013 - 2017)"
                            result="6.3/10"
                            des="I Learned from University to handle the machine, machine coding, CAD Modules, and workshop safety."
                            />
                            <ResumeCard
                            title="Java Full Stack Development"
                            subTitle="SLA Institute (July to Dec - 2022)"
                            result="90/100"
                            des="I learned Java Full Stack Development, Spring Boot, and React-Native from the SLA institute."
                            />
                        </div>
                    </div>
                </div>
                <div className="lgl:w-[50%]">
                    
                </div>
    </motion.div>
  );
}

export default Education;
