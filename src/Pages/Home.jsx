import React from 'react';
import { motion } from 'framer-motion';
import AboutPage from '../components/About/about';
import ContactUs from '../components/Contact-us/contactUs';
import Features from '../components/Features/features';
import HomePage from '../components/Home/home';
import StoreLocations from '../components/Our-stores/OurStores';
import Promotions from '../components/promotions/promotion';
import Insight from '../components/Insight/Insight';
import ExclusiveDeals from '../components/ExclusiveDeals/ExclusiveDeals';

export function Home() {
  // Animation variants for fade-in/up effect
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div>
      {/* Home Page */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
        variants={fadeUp}
      >
        <HomePage />
      </motion.div>

      {/* About Page */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Consistent viewport amount
        variants={fadeUp}
      >
        <AboutPage />
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
        variants={fadeUp}
      >
        <Features />
      </motion.div>

      {/* Promotions Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
        variants={fadeUp}
      >
        <Promotions />
      </motion.div>

      {/* Insight Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
        variants={fadeUp}
      >
        <Insight />
      </motion.div>

      {/* Exclusive Deals Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} // Trigger when 40% of the element is in view
        variants={fadeUp}
      >
        <ExclusiveDeals />
      </motion.div>

      {/* Store Locations Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
        variants={fadeUp}
      >
        <StoreLocations />
      </motion.div>

      {/* Contact Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }} // Trigger when 60% of the element is in view
        variants={fadeUp}
      >
        <ContactUs />
      </motion.div>
    </div>
  );
}
