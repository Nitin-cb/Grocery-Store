import { motion } from 'framer-motion';
import img1 from '/images/homePage/promotions/Affordable Pricing.jpg';
import img2 from '/images/homePage/promotions/Exclusive Offers.jpg';
import img3 from '/images/homePage/promotions/Promotion 03.jpg';
import backgroundImage from '/images/homebg/promotion.jpg';

export default function Promotions() {
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

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust to 'contain' if you want the full image visible
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div
        className="grid grid-cols-1 items-center lg:grid-cols-2 h-full gap-8 w-full max-w-7xl mx-auto p-14 sm:p-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-2 gap-4 justify-self-center self-center"
          variants={containerVariants}
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants}>
              <img
                className="object-contain object-center w-full rounded-lg"
                src={img1}
                alt="Affordable Pricing"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <img
                className="object-contain object-center w-full rounded-lg"
                src={img3}
                alt="Wide Product Range"
              />
            </motion.div>
          </div>
          <motion.div variants={itemVariants}>
            <img
              className="object-cover object-center w-full h-full rounded-lg"
              src={img2}
              alt="Exclusive Offers"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
            >
              Promotions and Offers
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 mb-4"
            >
              Discover exclusive deals and promotions at our store. Whether
              you're searching for the best pricing or wide product variety,
              we've got you covered.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 mb-6"
            >
              Shop now and take advantage of our fantastic offers across various
              categories, tailored just for you.
            </motion.p>
            <motion.a
              href="/promotions"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 w-36 bg-white text-green-600 border border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 hover:text-white transition duration-300 ease-in-out text-center sm:text-left"
            >
              Know more
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
