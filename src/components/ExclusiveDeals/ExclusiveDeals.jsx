import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import video from '/images/exclusivedeals/MS.mp4';
import DealsScroll from './scroll';

const ExclusiveDeals = () => {
  // Animation variants for fade-in and slide-up effects
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-white w-full p-18 sm:p-12">
      <div className="flex flex-col h-auto md:flex-row">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 pl-14 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold mb-4 text-green-600">
            Exclusive Deals
          </h2>
          <p className="mb-4 text-xl">
            "We are committed to provide valuable consumable products at
            affordable prices. Best Quality, Healthy & Tasty, Fresh Products,
            Competitive Prices."
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="w-full  p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="relative aspect-video">
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
          </div>
        </motion.div>
      </div>

      {/* Scroll Deals Section */}
      <div className="relative overflow-hidden">
        <DealsScroll />
      </div>
    </div>
  );
};

export default ExclusiveDeals;
