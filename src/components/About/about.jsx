// About/about.jsx
import { motion } from 'framer-motion';
import img2 from '/images/Welcom.jpg';
import img1 from '/images/pattern-with-watercolor-flowers-vintage.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function AboutPage() {
  return (
    <motion.div
      className="w-full h-screen py-14 bg-cover bg-center bg-white flex flex-col items-center relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background with fade effect */}
      <motion.div
        style={{
          backgroundImage: `url(${img1})`,
        }}
        className="absolute inset-0 bg-cover bg-center z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 flex items-center flex-col gap-6 lg:flex-row w-full h-full max-w-6xl justify-center px-4 lg:px-0">
        {/* Text Section */}
        <motion.div
          className="flex flex-col items-center lg:items-start lg:w-1/2 lg:px-10 lg:mr-10 text-center lg:text-left"
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-blue-700 font-semibold"
          >
            About Us
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="font-medium text-2xl sm:text-3xl md:text-4xl text-gray-700 mt-2 mb-8"
          >
            Welcome To Al Madina
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="leading-6 sm:leading-7 mt-4 sm:mt-6 text-sm sm:text-base"
          >
            <span className="text-4xl sm:text-5xl leading-4 inline-block align-bottom float-left text-green-500 mr-2">
              A
            </span>
            t Al Madina Retail, more than just a chain of stores; it stands as a
            cornerstone of the communities we serve.
            <span className="block mt-4">
              Established in 1984, Al Madina Retail has been committed to
              providing high-quality products, exceptional service, and an
              unmatched shopping experience to our valued customers in Fujairah.
            </span>
          </motion.p>

          <motion.a
            href="/about"
            className="inline-block w-36 mt-4 px-6 py-3 bg-white text-green-600 border border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 hover:text-white transition duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know more
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-10/12 sm:w-2/4 md:w-2/4 flex justify-center items-center mt-6 lg:mt-0"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              },
            },
          }}
        >
          <motion.img
            src={img2}
            alt="Al Madina Store"
            className="rounded-lg w-full h-auto object-cover max-w-2xl lg:max-w-full shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
