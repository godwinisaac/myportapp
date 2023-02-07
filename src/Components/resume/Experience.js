import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div
     initial={{opacity:0}}
     animate={{opacity:1, transition:{duration:0.5}}}
     className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
                <div className="lgl:w-[50%]">
                <div className="p-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-head tracking-[4px] uppercase">
                            2017-2023
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Work Experience
                        </h2>
                    </div>
                    <div className="">
                        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                            <ResumeCard
                            title="Façade Design Engineer"
                            subTitle="GCC(ALOMA).LLC (Oct_2020 - Jun_2022)"
                            result="UAE"
                            des="Study and preparation of Detail shop drawing to fix the facade 
                            engineering based on Architectural IFC drawing and structural 
                            drawing as per International standard."
                            />
                            <ResumeCard
                            title="Mechanical Design Engineer"
                            subTitle="Amber & Waseem general trading.LLC (AUG_2018 - AUG_2020)"
                            result="UAE"
                            des="Preparation of 3D drawings for details.Fabrication drawing in Solidworks.Bill of Material(MTO) in Solidworks."
                            />
                            <ResumeCard
                            title="Mechanical Site Engineer("
                            subTitle="Lansh engineering pvt (Apr_2017 - Jun_2018)"
                            result="INDIA"
                            des="Site material marking in Inventor, Sheet metal, weld ment, IP rating cabine and boiler."
                            />
                        </div>
                    </div>
                </div>
    </motion.div>
  );
}

export default Experience;
