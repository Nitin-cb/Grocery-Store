import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import AboutPage from '../components/About/about';
import ContactUs from '../components/Contact-us/contactUs';
import Features from '../components/Features/features';
import HomePage from '../components/Home/home';
import StoreLocations from '../components/Our-stores/OurStores';
import Promotions from '../components/promotions/promotion';
import Insight from '../components/Insight/Insight';
import ExclusiveDeals from '../components/ExclusiveDeals/ExclusiveDeals';
import LoyalitySection from '../components/Loyality/Loyality';
// Shared animation variants
export const sharedAnimationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1.0],
      staggerChildren: 0.1,
    },
  },
};

// Optimized scroll progress indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(to right, #22c55e, #16a34a)',
        transformOrigin: '0%',
        zIndex: 50,
      }}
    />
  );
};

// Section wrapper component for consistent animations
const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1.0],
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="relative">
        <AnimatedSection>
          <HomePage />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <AboutPage />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Features />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Promotions />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Insight />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <LoyalitySection />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ExclusiveDeals />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <StoreLocations />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ContactUs />
        </AnimatedSection>
      </div>
    </>
  );
}
