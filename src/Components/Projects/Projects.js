import React from 'react';
import { p1, p2,} from '../../assets';
import Title from '../Layouts/Title';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section
     id='projects'
     className="w-full py-20 border-b-[1px] border-b-black" >
      <div className="flex justify-center items-center text-center">
      <Title
       title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
       des="My Projects"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-4">
        <ProjectCard
         title="Food Delevery Website"
         des="Food delevery webapp for my portfolio this app done by React, Tailwindcss and Firebase(DataStorage)" 
         src={p1}
         web="https://restaurantapp-d34b2.firebaseapp.com/"
        />
        <ProjectCard
         title="Valet Parking System Website"
         des="Valet Parking System  webapp for my portfolio this app done by Html, CSS, JS and Firebase(DataStorage)" 
         src={p2}
         web="https://gimvaletparking.web.app/"
        />
        <ProjectCard
         title="Features Website"
         des="React, Tailwindcss and Firebase(DataStorage)" 
         />
        <ProjectCard
         title="FeaturesWebsite"
         des=" React, Tailwindcss and Firebase(DataStorage)" 
         src="Feature"
         />
      </div>
    </section>
  );
}

export default Projects;
