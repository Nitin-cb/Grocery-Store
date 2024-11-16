// About/about.jsx
import { motion } from 'framer-motion';
import img2 from '/images/Welcom.jpg';
import img1 from '/images/pattern-with-watercolor-flowers-vintage.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AboutPage() {
  return (
    <motion.div
      className="w-full min-h-screen bg-cover justify-center bg-center bg-white flex flex-col items-center relative py-16 lg:py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background with fade effect */}
      <motion.div
        style={{ backgroundImage: `url(${img1})` }}
        className="absolute inset-0 bg-cover bg-center z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 flex items-center flex-col gap-8 lg:gap-12 lg:flex-row w-full max-w-7xl justify-center px-6 lg:px-8">
        {/* Text Section */}
        <motion.div
          className="flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left space-y-6"
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-2xl text-blue-700 font-semibold"
          >
            About Us
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="font-medium text-3xl sm:text-4xl lg:text-5xl text-gray-700"
          >
            Welcome To Al Madina
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl leading-relaxed space-y-6"
          >
            <p>
              <span className="text-5xl sm:text-6xl leading-4 inline-block align-bottom float-left text-green-500 mr-3 mt-2">
                A
              </span>
              t Al Madina Retail, more than just a chain of stores; it stands as
              a cornerstone of the communities we serve.
            </p>
            <p>
              Established in 1984, Al Madina Retail has been committed to
              providing high-quality products, exceptional service, and an
              unmatched shopping experience to our valued customers in Fujairah.
            </p>
          </motion.div>

          <motion.a
            href="/about"
            className="inline-block w-44 mt-8 px-8 py-4 bg-white text-green-600 border-2 border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 hover:text-white transition duration-300 text-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know more
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0"
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
            className="rounded-xl w-full h-auto object-cover shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
