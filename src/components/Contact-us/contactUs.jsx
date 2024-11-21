import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import img1 from '/images/For Home Page section.jpeg';
import './contactUs.css';
import AnimatedSection from '../animated /section';
import backgroundImage from '/images/backgroundImagecontactus2.jpg'; // Add your background image import

export default function ContactUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <AnimatedSection className="w-full relative bg-white sm:p-12 p-14 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className=" flex flex-col md:flex-row w-full justify-evenly"
      >
        {/* Content Container */}
        <div className="relative z-10 flex flex-col md:flex-row w-full justify-evenly">
          <motion.div className="flex flex-col justify-center items-start md:w-1/2 w-full text-left p-6 sm:p-8 md:p-16 space-y-4">
            <motion.h2
              variants={textVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2"
            >
              <span className="text-green-600">Contact</span> Us
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="text-md sm:text-lg md:text-xl text-gray-600"
            >
              Our store offers a wide range of fresh products, organic options,
              and unbeatable prices. We pride ourselves on quality and customer
              service. Whether you need fresh produce or household essentials,
              we have everything for your needs.
            </motion.p>

            <motion.a
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block px-2 sm:px-6 py-1 sm:py-2 bg-white text-green-600 border hover:text-white border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Contact Us
            </motion.a>
          </motion.div>

          <motion.img
            variants={imageVariants}
            className="md:w-1/2 w-full h-64 md:h-[400px] bg-black rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            src={img1}
          />
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
