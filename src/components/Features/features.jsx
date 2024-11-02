import { useState, useEffect } from 'react';
import img1 from '/images/homePage/1.jpg';
import img2 from '/images/homePage/2.jpg';
import img3 from '/images/homePage/3.jpg';
import img4 from '/images/homePage/4.jpg';
import img5 from '/images/homePage/5.jpg';
import img6 from '/images/homePage/6.jpg';
import img7 from '/images/homePage/7.jpg';
import img8 from '/images/homePage/8.jpg';
import img9 from '/images/homePage/9.jpg';
import img10 from '/images/homePage/10.jpg';
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
      text: 'Bringing an ancient tradition of the finest cheeses.',
    },
    {
      src: img4,
      alt: 'Image 4',
      text: 'Farm to Table Excellence (Freshness and Taste in Every Bite)',
    },
    {
      src: img5,
      alt: 'Image 5',
      text: 'From Farm to Fork, Perfection at every step',
    },
    {
      src: img6,
      alt: 'Image 6',
      text: 'Making pure magic out of solidified milk',
    },
    {
      src: img7,
      alt: 'Image 7',
      text: 'Personal Hygiene',
    },
    {
      src: img8,
      alt: 'Image 8',
      text: 'Reunite With Your Favorite Bites',
    },
    {
      src: img9,
      alt: 'Image 9',
      text: 'Simple pleasures, a good coffee and some hearty pastries',
    },
    {
      src: img10,
      alt: 'Image 10',
      text: 'The Natural Spice for the Traditional Food',
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
    const interval = setInterval(nextSlide, 2000);
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
        <a
          href="/stores"
          className="inline-block px-6 py-3 mt-8 bg-white text-green-600 border hover:text-white border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out text-sm sm:text-base"
        >
          Know more
        </a>
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
