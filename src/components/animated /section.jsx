import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: -50, // Start slightly above the final position
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring', // Use a spring animation for a natural, bouncy effect
        stiffness: 100, // Adjust stiffness for desired bounciness
        damping: 15, // Adjust damping for smoothness
        delay: delay,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={`w-full h-full ${className}`}
    >
      {children}
    </motion.section>
  );
}
