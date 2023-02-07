import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Achievements = () => {
  return (
    <motion.div
     initial={{opacity:0}}
     animate={{opacity:1, transition:{duration:0.5}}}
     className="w-full flex gap-20">
                <div className="w-[50%]">
                    <div className="py-12 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-head tracking-[4px] uppercase">
                            (2009 - 2023)
                        </p>
                        <h2 className="text-4xl font-bold">
                            Life Experience
                        </h2>
                    </div>
                    <div className="">
                        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
                <div className="w-[50%]">
                    <div className="py-12 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-head tracking-[4px] uppercase">
                            2017-2023
                        </p>
                        <h2 className="text-4xl font-bold">
                            Work Experience
                        </h2>
                    </div>
                    <div className="">
                        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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

export default Achievements;
