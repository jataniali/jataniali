import React from 'react';
import Title from '../title/Title';
import { FaHeadphones, FaClipboardCheck, FaSmile } from 'react-icons/fa';
import { motion } from "framer-motion";

const Numbers = () => {
  return (
    <section className="max-w-6xl mx-auto mt-14">
      {/* Title Section */}
      <div className="flex flex-col items-center lg:items-start px-6">
        <Title title="Numbers" />
        <h2 className="text-base text-gray-600 mt-2 text-center lg:text-left">
          I'm not a great programmer; I'm just a good programmer with great habits.
        </h2>
      </div>

      {/* Numbers Section */}
      <div className="flex flex-row gap-20 mt-10">
        {/* Projects */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2">
            <FaClipboardCheck className="text-blue-500 w-16 h-16" />
            <h2 className="text-4xl font-bold text-black">10</h2>
          </div>
          <p className="text-lg text-gray-500 mt-2 mr-8">Projects</p>
        </motion.div>

        {/* Code Playlist */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2">
            <FaHeadphones className="text-blue-500 w-16 h-16" />
            <h2 className="text-4xl font-bold text-black">25</h2>
          </div>
          <p className="text-lg text-gray-500 mt-2">Code Symphony</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Numbers;