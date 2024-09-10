import { useState, useEffect } from 'react';
import img1 from '../../assets/images/homePage/1.jpg';
import img2 from '../../assets/images/homePage/2.jpeg';
import img3 from '../../assets/images/homePage/3.jpeg';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../animated /section';


export default function Features() {
  const images = [
    { src: img1, alt: 'Image 1', text: 'Abundance Fresh Healthy Fruits' },
    { src: img2, alt: 'Image 2', text: `A delicious blend of nature's goodness` },
    { src: img3, alt: 'Image 3', text: 'an ancient tradition of the finest cheeses.' },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedSection className="relative flex items-center justify-between w-full mx-auto h-[400px] overflow-hidden shadow-lg bg-[#ADBBDA] p-6">
  {/* Combined Title and Text Section */}
  <div className="w-1/2 h-full flex flex-col justify-center items-center rounded-lg p-4">
    {/* Constant Title */}
    <h1 className="text-4xl  font-bold text-white mb-4">
      In Our Stores, We Offer
    </h1>

    {/* Dynamic Text */}
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="text-white  px-4"
    >
      <h2 className="text-4xl text-gray-700 capitalize font-semibold">
        {images[currentIndex].text}
      </h2>
    </motion.div>
  </div>

      {/* Gap between text and carousel */}
      <div className="w-6"></div> {/* Adds a space between the two sections */}

      {/* Carousel section on the right */}
      <div className="relative w-1/3 flex rounded-sm items-center justify-center h-full  overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover rounded-sm"
            />
          </motion.div>
        </AnimatePresence>    
      </div>
    </AnimatedSection>
  );
}
