import React, { useState } from 'react';
import finance from "../../assets/images/finance.png";
import todolist from "../../assets/images/to do list.png";
import weather from "../../assets/images/weather app.png";
import { motion } from "framer-motion";
import { FaPlus, FaLink, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const All = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [finance, weather ,todolist];

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  return (
    <section className='w-full h-auto p-10'>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className='w-full grid lg:grid-cols-3 gap-10 items-center justify-center mt-10'
        >
          {images.map((image, index) => (
            <div
              key={index}
              className='bg-gray-500 shadow-lg rounded-lg p-6 lg:max-w-sm relative group'
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt={`Image ${index}`} className='w-full h-auto' />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <FaPlus className='text-white text-2xl mx-2 cursor-pointer' />
                <FaLink className='text-white text-2xl mx-2 cursor-pointer' />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-10 z-50'>
          <div className='relative'>
            <img src={selectedImage} alt='Full size' className='max-w-full max-h-full' />
            <FaArrowLeft
              className='absolute top-1/2 left-4 text-black text-3xl cursor-pointer transform -translate-y-1/2'
              onClick={handlePrevious}
            />
            <FaArrowRight
              className='absolute top-1/2 right-4 text-black text-3xl cursor-pointer transform -translate-y-1/2'
              onClick={handleNext}
            />
            <FaTimes
              className='absolute top-4 right-4 text-black text-3xl cursor-pointer'
              onClick={() => setSelectedImage(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default All;