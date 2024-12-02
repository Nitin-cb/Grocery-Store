import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import video from '/images/exclusivedeals/MS.mp4';
import DealsScroll from './scroll';
import backgroundImage from '/images/homebg/exclusive1.jpg';

const ExclusiveDeals = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.645, 0.045, 0.355, 1.0] },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] },
    },
  };

  return (
    <motion.div
      className="bg-slate-100 w-full p-18 sm:p-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust to 'contain' if you want the full image visible
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div className="flex items-center flex-col h-auto md:flex-row">
        <motion.div
          className="w-full md:w-1/2 pl-14 mt-16"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-green-600"
          >
            Exclusive Deals
          </motion.h2>
          <motion.p variants={itemVariants} className="mb-4 text-xl">
            "We are committed to provide valuable consumable products at
            affordable prices. Best Quality, Healthy & Tasty, Fresh Products,
            Competitive Prices."
          </motion.p>
          <motion.a
            href="/promotions"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block w-36 mt-4 px-6 py-3 bg-white text-green-600 border border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 hover:text-white transition duration-300 ease-in-out text-center sm:text-left"
          >
            Know more
          </motion.a>
        </motion.div>

        <motion.div className="w-full p-4" variants={videoVariants}>
          <motion.div className="relative aspect-video">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="relative overflow-hidden" variants={itemVariants}>
        <DealsScroll />
      </motion.div>
    </motion.div>
  );
};
export default ExclusiveDeals;
