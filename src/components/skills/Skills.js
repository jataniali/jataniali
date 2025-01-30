import React from 'react';
import Title from '../title/Title';
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="bg-slate-100 w-full h-auto lg:px-20 px-2 flex flex-col gap-10 items-center lg:items-start mt-14">
      <Title title="Skills" />
      <div className='flex flex-col lg:flex-row w-full lg:gap-10'>
        {/* Left Column */}
        <div className='mb-4 lg:w-1/2 w-full'>
          {/* HTML */}
          <div className='py-4 overflow-hidden'>
            <p className='text-sm font-medium uppercase'>HTML</p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='w-full h-2 bgOpacity inline-flex'
            >
              <span className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>100%</span>
              </span>
            </motion.span>
          </div>

          {/* Tailwind CSS */}
          <div className='py-4 overflow-hidden'>
            <p className='text-sm font-medium uppercase'>Tailwind CSS</p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='w-full h-2 bgOpacity inline-flex'
            >
              <span className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>70%</span>
              </span>
            </motion.span>
          </div>
        </div>

        {/* Right Column */}
        <div className='lg:w-1/2 w-full'>
          {/* JavaScript */}
          <div className='py-4 overflow-hidden'>
            <p className='text-sm font-medium uppercase'>JavaScript</p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='w-full h-2 bgOpacity inline-flex'
            >
              <span className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>60%</span>
              </span>
            </motion.span>
          </div>

          {/* React.js */}
          <div className='py-4 overflow-hidden'>
            <p className='text-sm font-medium uppercase'>React.Js</p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='w-full h-2 bgOpacity inline-flex'
            >
              <span className='w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>65%</span>
              </span>
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
