import React, { useState, useEffect, useRef } from 'react';
import { Element, scroller, scrollSpy } from 'react-scroll';
import { motion } from 'framer-motion'; // Import Framer Motion
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
  { name: 'Contact', component: <ContactUs /> }
];

export function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredSection, setHoveredSection] = useState(null); // New state for hovered section
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    scrollSpy.update();

    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollPosition = scrollContainerRef.current.scrollTop;
        const windowHeight = window.innerHeight;
        const index = Math.round(scrollPosition / windowHeight);
        setActiveSection(index);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleDotClick = (index) => {
    scroller.scrollTo(sections[index].name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: 'scrollContainer'
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Dot indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative flex items-center" // Wrapper for the dot and text
            onMouseEnter={() => setHoveredSection(index)} // Set hovered section
            onMouseLeave={() => setHoveredSection(null)}  // Clear hovered section
          >
            {/* Section Name Tooltip */}
            {hoveredSection === index && (
              <span className="absolute right-8 px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg transition-all duration-300">
                {section.name}
              </span>
            )}

            <button
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 transform focus:outline-none
                ${activeSection === index 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
                }
                ${hoveredSection === index 
                  ? 'scale-150'  // Scale up on hover
                  : 'scale-100'
                }
              `}
              aria-label={`Navigate to ${section.name}`}
            />
          </div>
        ))}
      </div>

      {/* Sections with scroll snapping and reveal animation */}
      <div 
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth" 
        id="scrollContainer"
        ref={scrollContainerRef}
      >
        {sections.map((section, index) => (
          <Element
            key={index}
            name={section.name}
            className="snap-start h-screen flex items-center justify-center"
          >
            {/* Adding Framer Motion for reveal effect */}
            <motion.div
              className="w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, translateY: 50 }} 
              animate={{ opacity: 1, translateY: 0 }}   
              exit={{ opacity: 0, translateY: -50 }}     
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              whileInView={{ translateY: 0 }}           
              viewport={{ once: true }}                 
            >
              {section.component}
            </motion.div>
          </Element>
        ))}
      </div>
    </div>
  );
}
