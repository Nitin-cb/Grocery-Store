import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AnimatedSection({
  children,
  className = '',
  animationDirection = 'up',
  delay = 0,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the component is visible
  })

  const directionOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }

  const initialAnimation = {
    opacity: 0,
    ...directionOffset[animationDirection],
  }

  return (
    <motion.section
      ref={ref}
      initial={initialAnimation}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initialAnimation}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Improved easing curve for smoother animation
      }}
      className={`w-full h-full ${className}`}
    >
      {children}
    </motion.section>
  )
}