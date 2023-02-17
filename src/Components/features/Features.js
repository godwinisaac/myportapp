import React from 'react';
import { SiAntdesign, SiServerless,SiWindows } from 'react-icons/si';
import { FaDatabase, FaMobile } from "react-icons/fa";

import Title from '../Layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id='features' className="w-full py-20  border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do"/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
         title="Web App Develoment"
         des="A web application is an application program that is stored on a remote server and delivered over the internet through a browser interface."
         
        />
        <Card
         title="Window App Develoment"
         des="Creating and implementing the source code of new applications. Testing source code and debugging code."
         icon={<SiWindows />}
        />
        <Card
         title="Mobile web Develoment"
         des="A mobile app developer uses programming languages and development skills to create, test, & develop app on mobile devices."
         icon={<FaMobile />}
        />
        <Card
         title="UX Design"
         des="UI UX designers create the user interface for an app, website, or other interactive media."
         icon={<SiAntdesign />}
        />
        <Card
         title="Data-Base"
         des="A Database Developer, or Database Programmer, is responsible for creating, administering and troubleshooting computer databases that can process large amounts of information and keep it secure."
         icon={<FaDatabase />}
        />
        <Card
         title="Back-end Develoment"
         des="Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for improvement."
         icon={<SiServerless />}
        />
      </div>
    </section>
  );
}

export default Features;
