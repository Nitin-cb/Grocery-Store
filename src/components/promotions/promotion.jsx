import { motion } from 'framer-motion'; // Import motion
import img1 from '/images/homePage/promotions/Affordable Pricing.jpg';
import img2 from '/images/homePage/promotions/Exclusive Offers.jpg';
import img3 from '/images/homePage/promotions/Promotion 03.jpg';

export default function Promotions() {
  // Variants for fade-in and upward motion
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="grid grid-cols-1 items-center lg:grid-cols-2 h-[90vh] gap-8 w-full max-w-7xl mx-auto p-14 sm:p-12 ">
      {/* Images Column */}
      <motion.div
        className="grid grid-cols-2 gap-4 justify-self-center self-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* Left stacked images */}
        <div className="space-y-4">
          <motion.div variants={fadeUp}>
            <img
              className="object-contain object-center w-full  rounded-lg"
              src={img1}
              alt="Affordable Pricing"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <img
              className="object-contain object-center w-full  rounded-lg"
              src={img3}
              alt="Wide Product Range"
            />
          </motion.div>
        </div>
        {/* Right large image */}
        <motion.div variants={fadeUp}>
          <img
            className="object-cover object-center w-full h-full rounded-lg"
            src={img2}
            alt="Exclusive Offers"
          />
        </motion.div>
      </motion.div>

      {/* Text Column */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex flex-col justify-center">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
            variants={fadeUp}
          >
            Promotions and Offers
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-700 mb-4"
            variants={fadeUp}
          >
            Discover exclusive deals and promotions at our store. Whether you're
            searching for the best pricing or wide product variety, we've got
            you covered.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg text-gray-700 mb-6"
            variants={fadeUp}
          >
            Shop now and take advantage of our fantastic offers across various
            categories, tailored just for you.
          </motion.p>
        </div>
        <motion.a
          href="/promotions"
          className="inline-block px-6 py-3 bg-white text-green-600 border border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 hover:text-white transition duration-300 ease-in-out text-center sm:text-left"
        >
          Know more
        </motion.a>
      </motion.div>
    </div>
  );
}
