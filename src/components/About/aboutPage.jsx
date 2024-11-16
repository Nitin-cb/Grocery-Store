// import img2 from '../../assets/images/OurVision.png';
import img1 from '/images/bgaboutus.png';
import certi1 from '/images/certificate1.jpg';
import certi2 from '/images/certificate2.jpg';
import mission from '/images/mission.jpg';

import './about.css';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center "
        style={{
          backgroundImage: `url(${img1})`, // Replace with your background image URL
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-white bg-opacity-70 p-8 rounded-lg text-center shadow-lg "
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
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-slideUp"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <div className="order-last md:order-first">
            <motion.h2
              className="text-4xl font-extrabold text-gray-900 animate-fadeIn"
              variants={fadeInUp}
              transition={{ delay: 0.1, duration: 1 }}
            >
              About Al Madina
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600 animate-fadeIn"
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
            className="w-full h-72 object-cover rounded-lg shadow-md animate-fadeIn"
            src="https://img.freepik.com/premium-photo/rack-shopping-mall-supermarket_601128-13212.jpg?ga=GA1.1.1031503010.1714190988&semt=ais_hybrid" // Replace with your image URL
            alt="About Al Madina"
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 1 }}
          />
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <motion.img
            className="w-full h-72 object-cover rounded-lg shadow-md"
            src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?ga=GA1.1.1031503010.1714190988&semt=ais_hybrid" // Replace with your image URL
            alt="Our Story"
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <div>
            <motion.h2
              className="text-4xl font-extrabold text-gray-900"
              variants={fadeInUp}
              transition={{ delay: 0.1, duration: 1 }}
            >
              Our Story
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 1 }}
            >
              The inception commenced 40 years ago with a vision to create a
              shopping destination that caters to the diverse needs and
              preferences of our Customer. What started as a small retail outlet
              has grown into a trusted brand with multiple locations across
              Fujairah
            </motion.p>
          </div>
        </motion.div>

        {/* Our Vision Section */}
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
              Our Vision
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 1 }}
            >
              "To become top choice for shopping and delivering outstanding
              customer experiences, pioneering product selections, and impactful
              community involvement."
            </motion.p>
          </div>
          <motion.img
            className="w-full h-72 object-cover rounded-lg shadow-md"
            src="https://img.freepik.com/free-photo/business-strategy-success-target-goals_1421-33.jpg?ga=GA1.1.1031503010.1714190988&semt=ais_hybrid" // Replace with your image URL
            alt="Our Vision"
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 1 }}
          />
        </motion.div>

        {/* Our Mission Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <motion.img
            className="w-full h-72 object-cover rounded-lg shadow-md"
            src={mission} // Replace with your image URL
            alt="Our Mission"
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <div>
            <motion.h2
              className="text-4xl font-extrabold text-gray-900"
              variants={fadeInUp}
              transition={{ delay: 0.1, duration: 1 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 1 }}
            >
              "To enrich the lives of our customers by providing a wide array of
              high-quality products, personalized services, and memorable
              shopping journeys. Our dedication lies in upholding integrity,
              sustainability, and social responsibility while actively
              contributing to the development and well-being of our
              communities."
            </motion.p>
          </div>
        </motion.div>

        {/* Our Values Section */}
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
              Our Values
            </motion.h2>
            <motion.ul
              className="mt-4 text-lg text-gray-600 list-disc list-inside space-y-2"
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <li>
                Integrity, quality, and customer satisfaction are at the heart
                of everything we do.
              </li>
              <li>
                Committed to upholding the highest standards of honesty,
                transparency, and fairness in all interactions.
              </li>
              <li>
                Dedication to quality extends to every product on shelves,
                ensuring that customers receive nothing but the best.
              </li>
              <li>Teamwork: We work together to achieve our goals.</li>
            </motion.ul>
          </div>
          <motion.img
            className="w-full h-72 object-cover rounded-lg shadow-md"
            src="https://img.freepik.com/free-photo/why-choose-us-question-with-paper-lightbulb_23-2148932316.jpg?ga=GA1.1.1031503010.1714190988" // Replace with your image URL
            alt="Our Values"
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 1 }}
          />
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
            src="https://img.freepik.com/free-photo/closeup-group-people-holding-hands-psychotherapy-session_637285-10017.jpg?ga=GA1.1.1031503010.1714190988" // Replace with your image URL
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

        {/* Our promise Section */}
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
              Our Promise
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 1 }}
            >
              When you shop at Al Madina Retail, you can trust that you are
              getting more than just groceries and household essentials; it's an
              experience rooted in excellence, integrity, and care.
            </motion.p>
          </div>
          <motion.img
            className="w-full h-72 object-cover rounded-lg shadow-md"
            src="https://img.freepik.com/free-photo/greeting_23-2148103954.jpg?ga=GA1.1.1031503010.1714190988&semt=ais_hybrid" // Replace with your image URL
            alt="Our Vision"
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 1 }}
          />
        </motion.div>

        {/* certificate section*/}
        <div className="text-center mb-6">
          <motion.h1
            className="text-4xl font-bold text-gray-900"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            HACCP Certification
          </motion.h1>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          {/* First Certificate Image */}
          <div className="text-center">
            <motion.img
              className="w-full  object-cover rounded-lg shadow-md"
              src={certi2} // Replace with your first certificate image URL
              alt="Certificate 1"
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 1 }}
            />
            <motion.p
              className="mt-6 text-gray-600"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 1 }}
            >
              <b>Al Madina Supermarket L.L.C</b>
              <br /> Gurfa Road, Near Fujairah fish market, Fujairah, United
              Arab Emirates
            </motion.p>
          </div>

          {/* Second Certificate Image */}
          <div className="text-center">
            <motion.img
              className="w-full object-cover rounded-lg shadow-md"
              src={certi1} // Replace with your first certificate image URL
              alt="Certificate 2"
              variants={fadeInUp}
              transition={{ delay: 0.4, duration: 1 }}
            />
            <motion.p
              className="mt-6 text-gray-600"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 1 }}
            >
              <b>Al Madina Supermarket L.L.C</b> <br />
              Gurfa Road, Near Fujairah fish market, Fujairah, United Arab
              Emirates
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* join us */}
      <motion.div
        className="relative bg-green-600 py-12 px-4 sm:px-6 lg:px-8  shadow-lg text-white mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="text-center md:text-left">
            <motion.h2
              className="text-3xl font-extrabold text-white"
              variants={fadeIn}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              Join Us
            </motion.h2>
            <motion.p
              className="mt-4 text-lg"
              variants={fadeIn}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              We invite you to explore our stores, discover the wide range of
              products, and experience the difference of shopping with Al Madina
              Retail. Whether stocking up on essentials or seeking something
              special, we are here to serve you with a smile.
            </motion.p>
          </div>
          <motion.div
            className="text-center md:text-right w-56"
            variants={fadeInUp}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.a
              href="#"
              className="h-16 bg-white items-center flex justify-center text-blue-600 font-bold p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
