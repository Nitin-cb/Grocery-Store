// import img2 from '../../assets/images/OurVision.png';
import img1 from '/images/bgaboutus.png';
import certi1 from '/images/certificate1.jpg';
import certi2 from '/images/certificate2.jpg';
import mission from '/images/mission.jpg';

import './about.css';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${img1})`, // Replace with your background image URL
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-white bg-opacity-70 p-8 rounded-lg text-center shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-gray-900">
            Welcome to Al Madina
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Your ultimate destination for quality products at affordable prices.
          </p>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* About Al Madina Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <div className="order-last md:order-first">
            <motion.h2
              className="text-4xl font-extrabold text-gray-900"
              variants={fadeInUp}
              transition={{ delay: 0.1, duration: 1 }}
            >
              About Al Madina
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 1 }}
            >
              At Al Madina Retail, more than just a chain of stores; it stands
              as a cornerstone of the communities we serve. Established in 1984,
              Al Madina Retail has been committed to providing high-quality
              products, exceptional service, and an unmatched shopping
              experience to our valued customers in Fujairah.
            </motion.p>
          </div>
          <motion.img
            className="w-full h-72 object-cover rounded-lg shadow-md"
            src="https://img.freepik.com/premium-photo/rack-shopping-mall-supermarket_601128-13212.jpg?ga=GA1.1.1031503010.1714190988&semt=ais_hybrid"
            alt="About Al Madina"
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 1 }}
          />
        </motion.div>

        {/* Additional Sections with Scroll Animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          {/* Add your content for other sections here */}
        </motion.div>

        {/* Community Engagement Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <motion.img
            className="w-full h-72 object-cover rounded-lg shadow-md"
            src="https://img.freepik.com/free-photo/closeup-group-people-holding-hands-psychotherapy-session_637285-10017.jpg?ga=GA1.1.1031503010.1714190988"
            alt="Community Engagement"
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <div>
            <motion.h2
              className="text-4xl font-extrabold text-gray-900"
              variants={fadeInUp}
              transition={{ delay: 0.1, duration: 1 }}
            >
              Community Engagement
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 1 }}
            >
              As a proud member of the community, we believe in giving back and
              making a positive impact wherever we can. Through various
              initiatives and partnerships, we support local businesses,
              charities, and organizations, working together to build a brighter
              future for all.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
