// Features/features.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
// import AnimatedSection from '../animated /section';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotate: 5,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative flex bg-slate-100 flex-col lg:flex-row items-center w-full overflow-hidden pl-14 sm:pl-20 pr-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Text Section */}
      <motion.div
        className="w-full lg:w-2/3 flex flex-col justify-center items-center text-center lg:text-left lg:items-start"
        variants={containerVariants}
      >
        <motion.h1
          variants={textVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4"
        >
          In Our Stores, We Offer
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.h2
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-500 capitalize font-semibold"
          >
            {images[currentIndex].text}
          </motion.h2>
        </AnimatePresence>

        <motion.a
          href="/stores"
          className="inline-block px-6 py-3 mt-8 bg-white text-green-600 border hover:text-white border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          variants={textVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Know more
        </motion.a>
      </motion.div>

      {/* Image Carousel */}
      <div className="relative w-full lg:w-4/12 m-6  aspect-square overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0"
          >
            <motion.img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover rounded-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
