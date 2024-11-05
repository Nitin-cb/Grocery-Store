import { motion } from 'framer-motion';
import img2 from '/images/Welcom.jpg';
import './about.css';
import Rectangle from './rectangleComponent';
import img1 from '/images/pattern-with-watercolor-flowers-vintage.jpg';

export default function AboutPage() {
  return (
    <div className="w-full h-screen py-14 bg-cover bg-center bg-white flex flex-col items-center relative">
      {/* Background image with reduced opacity */}
      <div
        style={{
          backgroundImage: `url(${img1})`,
          opacity: 0.5,
        }}
        className="absolute inset-0 bg-cover bg-center z-0"
      ></div>

      {/* Content section */}
      <motion.div
        className="relative z-10 flex items-center flex-col gap-6 lg:flex-row w-full h-full max-w-6xl sm:items-center justify-center px-4 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Text Section */}
        <motion.div
          className="flex flex-col items-center lg:items-start lg:w-1/2 lg:px-10 lg:mr-10 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm sm:text-base text-blue-700 font-semibold">
            About Us
          </p>
          <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl text-gray-700 mt-2 mb-8">
            Welcome To Al Madina
          </h2>
          <p className="leading-6 sm:leading-7 mt-4 sm:mt-6 text-sm sm:text-base">
            <span className="text-4xl sm:text-5xl leading-4 inline-block align-bottom float-left text-green-500 mr-2">
              A
            </span>
            t Al Madina Retail, more than just a chain of stores; it stands as a
            cornerstone of the communities we serve.
            <span className="block">
              Established in 1984, Al Madina Retail has been committed to
              providing high-quality products, exceptional service, and an
              unmatched shopping experience to our valued customers in Fujairah.
            </span>
          </p>
          <motion.a
            href="/about"
            className="inline-block w-36 mt-4 px-6 py-3 bg-white text-green-600 border border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 hover:text-white transition duration-300 ease-in-out text-center sm:text-left"
          >
            Know more
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-10/12 sm:w-2/4 md:w-2/4     flex justify-center items-center mt-6 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={img2}
            alt="Al Madina Store"
            className="rounded-lg w-full h-auto object-cover max-w-2xl lg:max-w-full shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
