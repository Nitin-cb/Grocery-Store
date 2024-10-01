import { useState, useEffect } from 'react';
import img1 from '/images/homePage/1.jpg';
import img2 from '/images/homePage/2.jpeg';
import img3 from '/images/homePage/3.jpeg';
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
    <AnimatedSection className="relative flex flex-col lg:flex-row items-center justify-between w-full mx-auto  overflow-hidden shadow-lg bg-[#ADBBDA] p-4 sm:p-6">
      {/* Combined Title and Text Section */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center items-center text-center lg:text-left lg:items-start rounded-lg p-4 mb-6 lg:mb-0">
        {/* Constant Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          In Our Stores, We Offer
        </h1>
        {/* Dynamic Text */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 capitalize font-semibold">
            {images[currentIndex].text}
          </h2>
        </motion.div>
      </div>

      {/* Carousel section */}
      <div className="relative w-full lg:w-1/3 aspect-video lg:aspect-square rounded-md overflow-hidden">
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
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      
    </AnimatedSection>
  );
}
