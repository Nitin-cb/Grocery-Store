import { useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import './parallax.css';

function ParallaxScroll({ images, className }) {
  const gridRef = useRef(null);
  const [visibleImages, setVisibleImages] = useState([]); // Track visible images for lazy loading
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  // Lazy load images when they are in the viewport
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleImages((prev) => [...prev, entry.target.getAttribute('data-src')]);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const imagesToObserve = document.querySelectorAll('img[data-src]');
    imagesToObserve.forEach((img) => observer.observe(img));

    return () => {
      imagesToObserve.forEach((img) => observer.unobserve(img));
    };
  }, []);

  return (
    <div
      className={cn(
        "h-[40rem] w-full overflow-auto scrollbar-hide", // Allow scrolling and hide scrollbar
        className
      )}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start max-w-[90%] mx-auto py-20 px-6 lg:px-12">
        <div className="grid gap-8">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
            >
              <img
                data-src={el} // Lazy loading attribute
                src={visibleImages.includes(el) ? el : ""} // Load image only if visible
                className="h-96 w-full object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform" // will-change hint for smoother transform
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-8">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                data-src={el} // Lazy loading attribute
                src={visibleImages.includes(el) ? el : ""} // Load image only if visible
                className="h-96 w-full object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-8">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                data-src={el} // Lazy loading attribute
                src={visibleImages.includes(el) ? el : ""} // Load image only if visible
                className="h-96 w-full object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParallaxScroll;
