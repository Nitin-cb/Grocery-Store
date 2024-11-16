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
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.7,
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
    { image: '/images/homePage/carousel/Header__C_tablet.jpg' },
  ],
  desktop: [
    { image: '/images/homePage/carousel/Header___A.jpg' },
    { image: '/images/homePage/carousel/Header___B.jpg' },
    { image: '/images/homePage/carousel/Header___D.jpg' },
  ],
};

export default function GroceryCarousel() {
  // Initialize with a check for window width if available, otherwise default to 'desktop'
  const getInitialScreenSize = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 768) return 'mobile';
      if (width < 1024) return 'tablet';
      return 'desktop';
    }
    return 'desktop';
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState('desktop');
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getCurrentItems = () =>
    carouselItems[screenSize] || carouselItems.desktop;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [screenSize, isHovered, currentIndex]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === 0 ? getCurrentItems().length - 1 : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === getCurrentItems().length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const currentItems = getCurrentItems();
  const currentItem = currentItems[currentIndex];

  // Render nothing if no items are available
  if (!currentItems || !currentItem) {
    return null;
  }

  return (
    <div className="relative w-full h-[90vh] bg-gray-100 overflow-hidden">
      <div
        className="relative w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative w-full h-full">
          <div
            className={`absolute w-full h-full transition-opacity duration-500 ${
              isTransitioning ? 'opacity-50' : 'opacity-100'
            }`}
          >
            <picture>
              {/* Mobile Image */}
              <source
                media="(max-width: 767px)"
                srcSet={carouselItems.mobile[currentIndex].image}
              />
              {/* Tablet Image */}
              <source
                media="(max-width: 1023px)"
                srcSet={carouselItems.tablet[currentIndex].image}
              />
              {/* Desktop Image */}
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden sm:block"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden sm:block"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {currentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-4 bg-blue-500'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
