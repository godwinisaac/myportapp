import React from 'react';
import { SiAntdesign, SiServerless,SiWindows } from 'react-icons/si';
import { FaGlobe, FaMobile } from "react-icons/fa";

import Title from '../Layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id='features' className="w-full py-20  border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do"/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
         title="Web App Develoment"
         des="Lorem ipsum dolor sit amet consectrtur adipisicing elit. Atque soluta hic consequntur eum repellendus ad"
         
        />
        <Card
         title="Window App Develoment"
         des="Lorem ipsum dolor sit amet consectrtur adipisicing elit. Atque soluta hic consequntur eum repellendus ad"
         icon={<SiWindows />}
        />
        <Card
         title="Mobile web Develoment"
         des="Lorem ipsum dolor sit amet consectrtur adipisicing elit. Atque soluta hic consequntur eum repellendus ad"
         icon={<FaMobile />}
        />
        <Card
         title="UX Design"
         des="Lorem ipsum dolor sit amet consectrtur adipisicing elit. Atque soluta hic consequntur eum repellendus ad"
         icon={<SiAntdesign />}
        />
        <Card
         title="Hosting Websites"
         des="Lorem ipsum dolor sit amet consectrtur adipisicing elit. Atque soluta hic consequntur eum repellendus ad"
         icon={<FaGlobe />}
        />
        <Card
         title="Backend Develoment"
         des="Lorem ipsum dolor sit amet consectrtur adipisicing elit. Atque soluta hic consequntur eum repellendus ad"
         icon={<SiServerless />}
        />
      </div>
    </section>
  );
}

export default Features;
