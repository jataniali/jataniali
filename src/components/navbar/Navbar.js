import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import Ali from '../../assets/images/Ali.jpg';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { navslinkdat } from '../../constants';
import { FiMenu } from 'react-icons/fi';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);

  return (
    <div className="sticky bg-gray-900">
      <div className="w-full px-8 h-auto flex border-b-[1px] top-0 z-50 items-center justify-between">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="">
          {/* Desktop Menu */}
          <ul className="md:inline-flex lg:inline-flex items-center hidden gap-6 lg:gap-10 text-gray-200 cursor-pointer">
            {navslinkdat.map(({ _id, title, link }) => (
              <li className="hover:text-designColor text-base duration-300" key={_id}>
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} // Fix: Duration should be a positive number
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <span
            onClick={() => setShowmenu(!showmenu)}
            className="lg:hidden md:hidden text-xl bg-black w-10 h-10 inline-flex 
            items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>

          {/* Mobile Menu */}
          {showmenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
              <div className="p-4">
                <img className="rounded-[50%] w-20 p-4 h-20" src={Ali} alt="Ali" />
                <p className="text-sm mt-2 text-gray-400">ALI Jatani</p>
                <ul className="flex gap-6 text-teal-50 mt-4">
                  <li className="hover:text-designColor duration-300 bg-black p-2 rounded-full">
                    <FaTwitter />
                  </li>
                  <li className="hover:text-designColor duration-300 bg-black p-2 rounded-full">
                    <a href='https://www.instagram.com/mr_courtsey?igsh=MXZzaXN6eDdxenR0Yg=='  target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                    </a>
                    
                  </li>
                  <li className="hover:text-designColor duration-300 bg-black p-2 rounded-full">
                    <a href='https://www.linkedin.com/in/mr-courtesy-ali-a2707b2b6/'  target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                    </a>
                    
                  </li>
                  <li className="hover:text-designColor duration-300 bg-black p-2 rounded-full">
                    <a href='https://github.com/jataniali'  target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    </a>
                    
                  </li>
                </ul>
                <div className="text-slate-100 list-none flex flex-col gap-6 mt-4">
                  {navslinkdat.map(({ _id, title, link }) => (
                    <li key={_id} className="hover:text-designColor cursor-pointer">
                      <Link
                        activeClass="active"
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} // Fix: Duration should be a positive number
                        onClick={() => setShowmenu(false)} // Close menu on click
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
              <span
                onClick={() => setShowmenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer flex"
              >
                <MdClose />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;