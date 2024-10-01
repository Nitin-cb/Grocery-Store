import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [screenSize, setScreenSize] = useState('desktop'); // Default to desktop

  // Update screen size on mount and when window resizes
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth <= 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth <= 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    updateScreenSize(); // Check on initial render
    window.addEventListener('resize', updateScreenSize); // Update on resize
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Auto-play carousel
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
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) return carouselItems[screenSize].length - 1;
      if (newIndex >= carouselItems[screenSize].length) return 0;
      return newIndex;
    });
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={{
            enter: (direction) => ({
              x: direction > 0 ? '100%' : '-100%',
              opacity: 0,
            }),
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1,
            },
            exit: (direction) => ({
              zIndex: 0,
              x: direction < 0 ? '100%' : '-100%',
              opacity: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <img
              src={carouselItems[screenSize][currentIndex].image}
              alt={`Image ${currentIndex + 1}`}
              className="w-full h-full object-fit"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75 transition-all duration-300"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75 transition-all duration-300"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}
