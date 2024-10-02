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

        // Detect scroll direction
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
                className={`relative w-[13px] h-[13px] rounded-full transition-all duration-300 transform focus:outline-none
                  ${
                    activeSection === index
                      ? 'bg-gray-300 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }
                  ${hoveredSection === index ? 'scale-150' : 'scale-100'}
                `}
                aria-label={`Navigate to ${section.name}`}
              >
                {activeSection === index && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-[6px] h-[6px] bg-blue-500 rounded-full"></span>
                  </span>
                )}
              </button>
            </div>
          ))}
        </div>
      )}

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
                y: scrollDirection === 'down' ? -100 : 100, // Start above if scrolling down, below if scrolling up
              }}
              whileInView={{
                opacity: 1,
                y: 0, // End at 0 when in view
                transition: {
                  duration: 1.0,
                  ease: [0.42, 0.0, 0.58, 1.0], // Smoother easing
                },
              }}
              exit={{
                opacity: 0,
                y: scrollDirection === 'down' ? 100 : -100, // Pull up if scrolling down, pull down if scrolling up
                transition: {
                  duration: 0.8,
                  ease: [0.42, 0.0, 0.58, 1.0], // Same easing
                },
              }}
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the element is visible
            >
              {section.component}
            </motion.div>
          </Element>
        ))}
      </div>
    </div>
  );
}
