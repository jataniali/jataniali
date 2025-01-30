import React from "react";
import Title from "../title/Title";
import Ali from "../../assets/images/Ali.jpg";
import { motion } from "framer-motion"; // Correct import
import Skills from "../skills/Skills";
import Numbers from "./Numbers";

const About = () => {
  return (
    <section id="about" className="bg-slate-50 w-full h-auto py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center lg:items-start px-6">
        {/* Title Section */}
        <div className="w-full flex flex-col">
          <Title title="About Me" desc="Building the Web, One Pixel at a Time.💻" />
          {/* Image */}
          <div className="mt-4">
            <motion.img
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[300px] h-[300px] shadow-lg object-cover block"
              src={Ali}
              alt="Ali"
            />
          </div>
        </div>

        {/* Content Section */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col lg:flex-row gap-10 items-center mt-12 lg:items-start justify-end"
        >
          {/* Text Section */}
          <div className="lg:w-2/3 text-gray-800 justify-between items-center">
            <h3 className="text-xl font-bold text-blue-600">Web Developer</h3>
            <h2 className="italic text-gray-500 mt-2">Behind the Code</h2>
            <p className="mt-4 text-gray-700 text-base leading-7">
              Hi, I'm Jatani Ali, a passionate developer and problem solver. I love
              crafting elegant solutions to complex problems and turning ideas into
              reality through code. With experience in web development, I aim to make
              a positive impact with every project I work on.
            </p>
          </div>
        </motion.div>
      </div>
      <Numbers />
      <Skills />
    </section>
  );
};

export default About;