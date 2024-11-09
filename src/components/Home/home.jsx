// HomePage/home.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};
const carouselItems = {
  mobile: [
    { image: '/images/homePage/carousel/Header___A_mobile.jpg' },
    { image: '/images/homePage/carousel/Header___A_mobile.jpg' },
    { image: '/images/homePage/carousel/Header___A_mobile.jpg' },
    { image: '/images/homePage/carousel/Header___A_mobile.jpg' },
  ],
  tablet: [
    { image: '/images/homePage/carousel/Header___A_tablet.jpg' },
    { image: '/images/homePage/carousel/Header___A_tablet.jpg' },
    { image: '/images/homePage/carousel/Header___A_tablet.jpg' },
    { image: '/images/homePage/carousel/Header___A_tablet.jpg' },
  ],
  desktop: [
    { image: '/images/homePage/carousel/Header___A.jpg' },
    { image: '/images/homePage/carousel/Header___B.jpg' },
    { image: '/images/homePage/carousel/Header___D.jpg' },
    { image: '/images/homePage/carousel/Header__C.jpg' },
  ],
};
export default function GroceryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [screenSize, setScreenSize] = useState('desktop');

  // Update screen size logic remains the same...

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % carouselItems[screenSize].length
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [screenSize]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) return carouselItems[screenSize].length - 1;
      if (newIndex >= carouselItems[screenSize].length) return 0;
      return newIndex;
    });
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <motion.div
            className="relative w-full h-full "
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={carouselItems[screenSize][currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full "
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 rounded-full p-2 z-10"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </motion.button>

      <motion.button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 rounded-full p-2 z-10"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </motion.button>
    </div>
  );
}
