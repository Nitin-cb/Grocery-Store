import { useState, useEffect } from 'react';
import img1 from '/images/homePage/1.jpg';
import img2 from '/images/homePage/2.jpeg';
import img3 from '/images/homePage/3.jpeg';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../animated /section';

export default function Features() {
  const images = [
    { src: img1, alt: 'Image 1', text: 'Abundance Fresh Healthy Fruits' },
    {
      src: img2,
      alt: 'Image 2',
      text: `A delicious blend of nature's goodness`,
    },
    {
      src: img3,
      alt: 'Image 3',
      text: 'An ancient tradition of the finest cheeses.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedSection className="relative flex bg-slate-100 flex-col lg:flex-row items-center w-full overflow-hidden p-14 sm:p-20">
      {/* Combined Title and Text Section */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center items-center text-center lg:text-left lg:items-start rounded-lg p-4 mb-6 lg:mb-0">
        {/* Constant Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
          In Our Stores, We Offer
        </h1>
        {/* Dynamic Text */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-500 capitalize font-semibold">
            {images[currentIndex].text}
          </h2>
        </motion.div>
      </div>

      {/* Carousel section */}
      <div className="relative w-full lg:w-4/12 m-12 p-20 aspect-square overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0, scale: 0.8, x: 50 }} // Slide-in effect with scaling
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -50 }} // Slide-out with scaling
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover rounded-3xl"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
