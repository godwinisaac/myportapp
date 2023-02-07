import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from "react-icons/fi";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { navLinksdata } from '../../Constan';
import { myimg } from '../../assets';

const Navbar = () => {


  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex items-center justify-between font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <h2 className="text-2xl">Godwin Isaac</h2>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({_id,title,link}) =>(
                <li
                 className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                 key={_id}>
                    <Link
                     activeClass="active"
                     to={link}
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                    >
                        {title}
                    </Link>
                </li>
                
            ))}
        </ul>
        <span
         onClick={()=>setShowMenu(!showMenu)} 
         className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center text-head cursor-pointer rounded-full">
          <FiMenu/>
        </span>
        {
          showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
              <div className="flex flex-col gap-8 p-4 relative">
                <div className="flex justify-center items-center">
                  <img className="w-20 rounded-full" src={myimg} alt="myimg" />
                  <h2 className="text-base font-semibold text-gray-400 mt-2">Godwin Isaac</h2>
                </div>
                <ul className="flex flex-col gap-4">
                  {
                    navLinksdata.map((item) => (
                      <li key={item._id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                        <Link onClick={()=> setShowMenu(false)}
                          activeClass="active"
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          {item.title}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
                <div className="flex flex-col gap-4">
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            find me in
                        </h2>
                        <div className="flex gap-4">
                            <a href='mailto:godwinisaac1992@gmail.com' Using target="_blank" rel="noreferrer" className="bannerIcon">
                                <FaMailBulk/>
                            </a>
                            <span className="bannerIcon">
                                <FaLinkedin/>
                            </span>
                        </div>
                    </div>
                <span onClick={()=> setShowMenu(false)} className="absolute top-4 right-4 text-gray-500 hover:text-head duration-300 text-2xl cursor-pointer">
                  <MdClose />
                </span>
              </div>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Navbar
