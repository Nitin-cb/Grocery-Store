import React, { useState, useEffect, useRef } from 'react';
import { Element, scroller, scrollSpy } from 'react-scroll';
import { motion } from 'framer-motion';
import AboutPage from '../components/About/about';
import ContactUs from '../components/Contact-us/contactUs';
import Features from '../components/Features/features';
import HomePage from '../components/Home/home';
import StoreLocations from '../components/Our-stores/OurStores';
import Promotions from '../components/promotions/promotion';

const sections = [
  { name: 'Home', component: <HomePage /> },
  { name: 'About', component: <AboutPage /> },
  { name: 'Features', component: <Features /> },
  { name: 'Promotions', component: <Promotions /> },
  { name: 'Stores', component: <StoreLocations /> },
  { name: 'Contact', component: <ContactUs /> },
];

export function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  let lastScrollTop = 0;

  useEffect(() => {
    scrollSpy.update();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollPosition = scrollContainerRef.current.scrollTop;
        const windowHeight = window.innerHeight;
        const index = Math.round(scrollPosition / windowHeight);
        setActiveSection(index);

        setScrollDirection(scrollPosition > lastScrollTop ? 'down' : 'up');
        lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDotClick = (index) => {
    scroller.scrollTo(sections[index].name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: 'scrollContainer',
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Dot indicator - hidden on mobile */}
      {!isMobile && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredSection(index)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {hoveredSection === index && (
                <span className="absolute right-8 px-3 py-1 bg-gray-800 text-white text-xs sm:text-sm rounded-md shadow-lg transition-all duration-300">
                  {section.name}
                </span>
              )}

              <button
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 transform focus:outline-none
                  ${
                    activeSection === index
                      ? 'bg-blue-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }
                  ${hoveredSection === index ? 'scale-150' : 'scale-100'}
                `}
                aria-label={`Navigate to ${section.name}`}
              />
            </div>
          ))}
        </div>
      )}

      {/* Sections with scroll snapping and slide-in/out transition effect */}
      <div
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
        id="scrollContainer"
        ref={scrollContainerRef}
      >
        {sections.map((section, index) => (
          <Element
            key={index}
            name={section.name}
            className="snap-start h-auto flex items-center justify-center"
          >
            <motion.div
              className="w-full h-full flex items-center justify-center"
              initial={{
                opacity: 0,
                translateX: scrollDirection === 'down' ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                transition: {
                  duration: 1.2,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
              exit={{
                opacity: 0,
                translateX: scrollDirection === 'down' ? 50 : -50,
              }}
              transition={{
                duration: 1.2,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {section.component}
            </motion.div>
          </Element>
        ))}
      </div>
    </div>
  );
}
