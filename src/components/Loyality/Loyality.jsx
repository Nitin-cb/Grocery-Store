import React from 'react';
import app from '/images/loyalityCard/App .jpg';
import { motion, useInView } from 'framer-motion';
import backgroundImage from '/images/homebg/loyality2.jpg';

const LoyalitySection = () => {
  const imgRef = React.useRef(null);
  const textRef = React.useRef(null);

  // Add margin to trigger animations slightly before elements come into view
  const inViewOptions = {
    once: true,
    margin: '-100px 0px',
  };
  const isImgInView = useInView(imgRef, inViewOptions);

  const isTextInView = useInView(textRef, inViewOptions);

  // Reusable animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1.0], // Cubic bezier for smooth easing
      },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
  };
  return (
    <div
      className="flex h-full flex-col md:flex-row items-center justify-between  text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust to 'contain' if you want the full image visible
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.img
        ref={imgRef}
        className="w-full md:w-1/2"
        src={app}
        alt="App Screenshot"
        variants={fadeInScale}
        initial="hidden"
        animate={isImgInView ? 'visible' : 'hidden'}
      />

      <motion.div
        ref={textRef}
        className="w-full  md:w-1/2 text-black flex flex-col items-center mt-2 p-6 md:p-6 md:mx-12 lg:mx-2 mb-10"
        variants={fadeInUp}
        initial="hidden"
        animate={isTextInView ? 'visible' : 'hidden'}
      >
        <p className="text-center sm:text-lg text-xl">
          Explore a new way for shopping encouraging with{' '}
          <b> Ahlan Medina...</b>
          designed to bring all the personalized perks of our loyalty program
          right at your fingertips…
        </p>
        <p className="text-center mt-6 sm:text-lg text-xl font-bold">
          Join now for a shopping experience a new level of shopping
          convenience!
        </p>
        <motion.a
          className="sm:mt-6 mt-3 bg-green-600 hover:bg-orange-600 text-white font-bold sm:py-3 py-1 px-4 sm:px-8 rounded-full transition duration-300"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
          href="/loyality"
        >
          Join the Loyalty Program
        </motion.a>
      </motion.div>
    </div>
  );
};

export default LoyalitySection;
