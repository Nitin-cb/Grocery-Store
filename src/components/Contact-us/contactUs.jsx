import { motion } from 'framer-motion';
import img1 from '/images/For Home Page section.jpeg';
import './contactUs.css';
import AnimatedSection from '../animated /section';

export default function ContactUs() {
  // Define the animation variants
  const textVariant = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0 }, // End at normal position
  };

  return (
    <AnimatedSection className="w-full bg-white sm:p-12 p-14 my-4">
      <div className="flex flex-col md:flex-row w-full justify-evenly">
        {/* Left Text Section with animation */}
        <motion.div
          className="flex flex-col justify-center items-start md:w-1/2 w-full text-left p-6 sm:p-8 md:p-16 space-y-4"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: 'easeInOut' }} // Smooth easing
          variants={textVariant}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
            <span className="text-green-600">Contact</span> Us
          </h2>
          <p className="text-md sm:text-lg md:text-xl text-gray-600">
            Our store offers a wide range of fresh products, organic options,
            and unbeatable prices. We pride ourselves on quality and customer
            service. Whether you need fresh produce or household essentials, we
            have everything for your needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-2 sm:px-6 py-1 sm:py-2 bg-white text-green-600 border hover:text-white border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Right Image Section */}
        <div
          className="md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover', // Ensure the image covers the area without distortion
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat', // Prevents background image from repeating
          }}
        />
      </div>
    </AnimatedSection>
  );
}
