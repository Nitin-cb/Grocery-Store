import { motion } from 'framer-motion';
import storeImage from '/images/Choice 02.jpg';
import backgroundImage from '/images/background.jpg'; // Add your background image import
// import AnimatedSection from '../animated/section';

export default function StoreLocations() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.645, 0.045, 0.355, 1.0] },
    },
  };

  return (
    <motion.div
      className="w-full relative flex justify-center items-center p-14 sm:p-12 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          opacity: 0.6, // Adjust this value between 0 and 1 to control opacity
        }}
      />

      {/* Content Container with backdrop-filter for better readability */}
      <div className="relative z-10 max-w-6xl gap-18 md:gap-28 mx-auto flex flex-col lg:flex-row">
        <motion.div
          className="lg:w-1/2 w-full h-64 sm:h-80 md:h-96 lg:h-auto relative"
          variants={imageVariants}
        >
          <motion.img
            src={storeImage}
            alt="Store locations world map"
            className="object-cover object-center w-full h-full rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex flex-col justify-center p-6 space-y-6 text-center lg:text-left  rounded-lg backdrop-blur-sm"
          variants={containerVariants}
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800"
          >
            Our <span className="text-green-600">Store</span>
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600"
          >
            We are conveniently located across multiple locations to serve you
            better. Find our stores in the following cities:
          </motion.p>
          <motion.a
            href="/stores"
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block w-36 px-6 py-3 bg-white text-green-600 border hover:text-white border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out text-sm sm:text-base"
          >
            Know more
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
