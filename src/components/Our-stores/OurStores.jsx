import { motion } from 'framer-motion';
import storeImage from '/images/Choice 02.jpg';
import AnimatedSection from '../animated /section';

export default function StoreLocations() {
  // Define the animation variants for the text coming from the right
  const textVariant = {
    hidden: { opacity: 0, x: 50 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0 }, // End at the normal position
  };

  return (
    <AnimatedSection className="w-full  bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-6xl gap-11 mx-auto flex flex-col lg:flex-row">
        {/* Left Column (Background Image) */}
        <div className="lg:w-1/2 w-full h-64 sm:h-80 md:h-96 lg:h-auto relative">
          <img
            src={storeImage}
            alt="Store locations world map"
            className="object-cover object-center w-full h-full rounded-lg"
          />
        </div>

        {/* Right Column (Text Content with animation) */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center p-6 space-y-6 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: 'easeInOut' }} // Smooth easing transition
          variants={textVariant}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Our <span className="text-green-600">Store</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            We are conveniently located across multiple locations to serve you
            better. Find our stores in the following cities:
          </p>
          <div className="pt-4">
            <a
              href="/promotions"
              className="inline-block px-6 py-3 bg-white text-green-600 border hover:text-white border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out text-sm sm:text-base"
            >
              Know more
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
