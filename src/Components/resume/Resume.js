import React, { useState } from 'react';
import Title from '../Layouts/Title';
import Education from './Education';
import Experience from './Experience';
import Skils from './Skils';


const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
  return (
    <section
     id='resume'
     className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className="flex justify-center items-center text-center">
        <Title
        title="5+ Years Of Experience"
        des="My Resume"/>
        </div>
            <div className="">
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    <li
                     onClick={() =>
                      setEducationData(true) & 
                      setSkillData(false) &
                      setExperienceData(false)}
                     className={`${educationData ? "border-head rounded-lg" : "border-transparent"} resumeLi`}
                    >
                        Education
                    </li>
                    <li
                     onClick={() =>
                      setEducationData(false) & 
                      setSkillData(true) &
                      setExperienceData(false)}
                     className={`${skillData ? "border-head rounded-lg" : "border-transparent"} resumeLi`}
                    >
                        Professional Skils
                    </li>
                    <li
                     onClick={() => 
                      setEducationData(false) & 
                      setSkillData(false) & 
                      setExperienceData(true)} 
                     className={`${experienceData ? "border-head rounded-lg" : "border-transparent"} resumeLi`}>
                        Experience
                    </li>
                    
                </ul>
            </div>
            {
                educationData && <Education />
            }
            {
                skillData && <Skils />
            }
            {
                experienceData && <Experience />
            }
            {/*<Education />
            <Skils />
            <Experience />
  <Achievements />*/}
    </section>
  );
}

export default Resume;
