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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <HomePage />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <AboutPage />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <Features />
      </motion.div>

      <div
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.2 }}
      // variants={fadeUp}
      >
        <Promotions />
      </div>

      <div
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.2 }}
      // variants={fadeUp}
      >
        <Insight />
      </div>

      <div
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.2 }}
      // variants={fadeUp}
      >
        <ExclusiveDeals />
      </div>

      <motion.div
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.2 }}
      // variants={fadeUp}
      >
        <StoreLocations />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <ContactUs />
      </motion.div>
    </div>
  );
}
