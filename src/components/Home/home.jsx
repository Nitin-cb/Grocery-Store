import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.9,
    rotate: direction > 0 ? -10 : 10,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.9,
    rotate: direction < 0 ? -10 : 10,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const carouselItems = {
  mobile: [
    {
      image: '/images/homePage/carousel/Header_A_mobile.jpg',
      alt: 'Mobile Slide A',
    },
    {
      image: '/images/homePage/carousel/Header_A_mobile copy.jpg',
      alt: 'Mobile Slide B',
    },
    {
      image: '/images/homePage/carousel/Header_A_mobile.jpg',
      alt: 'Mobile Slide C',
    },
  ],
  tablet: [
    {
      image: '/images/homePage/carousel/Header_A_tablet.jpg',
      alt: 'Tablet Slide A',
    },
    {
      image: '/images/homePage/carousel/Header_B_tablet.jpg',
      alt: 'Tablet Slide B',
    },
  ],
  desktop: [
    {
      image: '/images/homePage/carousel/Header_A_desktop.jpg',
      alt: 'Desktop Slide A',
    },
    {
      image: '/images/homePage/carousel/Header_B_desktop.jpg',
      alt: 'Desktop Slide B',
    },
    {
      image: '/images/homePage/carousel/Header_C_desktop.jpg',
      alt: 'Desktop Slide C',
    },
  ],
};

export default function GroceryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState('desktop');
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  const updateScreenSize = () => {
    const width = window.innerWidth;
    if (width < 768) setScreenSize('mobile');
    else if (width < 1024) setScreenSize('tablet');
    else setScreenSize('desktop');
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => handleNext(), 1500);
    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? getCurrentItems().length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === getCurrentItems().length - 1 ? 0 : prev + 1
    );
  };

  const getCurrentItems = () =>
    carouselItems[screenSize] || carouselItems.desktop;

  const currentItems = getCurrentItems();

  return (
    <div className="relative w-full h-[90vh] bg-gray-100 overflow-hidden">
      <div
        className="relative w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentItems[currentIndex].image}
            src={currentItems[currentIndex].image}
            alt={currentItems[currentIndex].alt}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 p-2 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden sm:block"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 p-2 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden sm:block"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-50">
          {currentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-5 bg-blue-500'
                  : 'w-3 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
