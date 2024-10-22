import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import img1 from '/images/insights/Affordable Pricing.jpeg';
import img2 from '/images/insights/wideproducts.jpg';
import img3 from '/images/insights/exclusiveoffer.jpg';
import img4 from '/images/insights/customersupport.jpg';

const Insight = () => {
  // Variants for fade-in and scaling effect
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center  bg-slate-100 p-14 sm:px-28  gap-10">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-2/5 flex flex-col justify-center items-center text-center lg:text-left lg:items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Insight</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          When you shop at Al Madina Retail, you can trust that you are getting
          more than just groceries and household essentials; it's an experience
          rooted in excellence, integrity, and care.
        </p>
        <div className="pt-4">
          <a
            href="/promotions"
            className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-base md:text-lg"
          >
            Know more
          </a>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {[
          { title: 'Affordable Pricing', img: img1 },
          { title: 'Wide Product Range', img: img2 },
          { title: 'Exclusive Offers', img: img3 },
          { title: 'Customer Support', img: img4 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent text-white p-4">
              <p className="text-center font-semibold text-lg">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Insight;
