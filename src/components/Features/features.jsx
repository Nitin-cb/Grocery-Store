import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '/images/homePage/features/1.jpg';
import img2 from '/images/homePage/features/2.jpg';
import img3 from '/images/homePage/features/3.jpg';
import img4 from '/images/homePage/features/4.jpg';
import img5 from '/images/homePage/features/5.jpg';
import img6 from '/images/homePage/features/6.jpg';
import img7 from '/images/homePage/features/7.jpg';
import img8 from '/images/homePage/features/8.jpg';
import img9 from '/images/homePage/features/9.jpg';
import img10 from '/images/homePage/features/10.jpg';

export default function Features() {
  const images = [
    { src: img1, alt: 'Image 1', text: 'Abundance Fresh Healthy Fruits' },
    {
      src: img2,
      alt: 'Image 2',
      text: "A delicious blend of nature's goodness",
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
    { src: img7, alt: 'Image 7', text: 'Personal Hygiene' },
    { src: img8, alt: 'Image 8', text: 'Reunite With Your Favorite Bites' },
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

  // More diverse animation variants
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotate: -15,
      x: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 10,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      x: 100,
      rotate: 15,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Animation variants for container and text
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative flex bg-slate-100 h-[70vh] flex-col lg:flex-row items-center pt-6 w-full overflow-hidden pl-14 sm:pl-20 pr-12"
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

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2   flex justify-center items-center mt-8 lg:mt-0"
        variants={containerVariants}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-96 md:w-[600px] h-[100%] rounded-xl shadow-lg object-cover"
          />
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
