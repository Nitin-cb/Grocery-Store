import React from 'react';
import app from '/images/loyalityCard/App .jpg';
import { motion, useInView } from 'framer-motion';

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
    <div className="flex flex-col md:flex-row items-center justify-between  text-white">
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
        className="w-full md:w-1/2 text-black flex flex-col items-center mt-11 p-6 md:p-10 md:mx-12 lg:mx-24"
        variants={fadeInUp}
        initial="hidden"
        animate={isTextInView ? 'visible' : 'hidden'}
      >
        <p className="text-center sm:text-lg text-xl">
          "This app is used for viewing total Points, Nearest Outlets, with
          Location and Contact details, and Promotional Flyers".
        </p>
        <p className="text-center mt-6 sm:text-lg text-xl font-bold">
          You can redeem your points at any of our Outlets
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
