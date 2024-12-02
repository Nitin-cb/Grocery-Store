import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import img1 from '/images/insights/Affordable Pricing.jpeg';
import img2 from '/images/insights/wideproducts.jpg';
import img3 from '/images/insights/exclusiveoffer.jpg';
import img4 from '/images/insights/customersupport.jpg';
import backgroundImage from '/images/homebg/insight1.jpg';

const Insight = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.645, 0.045, 0.355, 1.0] },
    },
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row justify-between items-center bg-slate-100 p-14 sm:px-28 gap-10"
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
      <motion.div
        className="w-full lg:w-2/5 flex flex-col justify-center items-center text-center lg:text-left lg:items-start"
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Insight
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-8 max-w-2xl"
        >
          When you shop at Al Madina Retail, you can trust that you are getting
          more than just groceries and household essentials; it's an experience
          rooted in excellence, integrity, and care.
        </motion.p>
        <motion.a
          href="/promotions"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-base md:text-lg"
        >
          Know more
        </motion.a>
      </motion.div>

      <motion.div
        className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6"
        variants={containerVariants}
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
            variants={imageVariants}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full  object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent text-white p-4"
              variants={itemVariants}
            >
              <p className="text-center font-semibold text-lg">{item.title}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
export default Insight;
