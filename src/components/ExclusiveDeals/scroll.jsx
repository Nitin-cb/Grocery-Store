import { useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import img1 from '/images/exclusivedeals/Personal Hygiene.png';
import img2 from '/images/exclusivedeals/Fresh Meat.jpg';
import img3 from '/images/exclusivedeals/Vegetables.jpg';
import img4 from '/images/exclusivedeals/Seafood.jpg';
import img5 from '/images/exclusivedeals/Grocery.jpg';
import img6 from '/images/exclusivedeals/Food.jpg';
import img7 from '/images/exclusivedeals/Garments.jpg';
import img8 from '/images/exclusivedeals/Fruits.jpg';

// Sample product data (replace with your actual product data)
const products = [
  { id: 1, name: 'Personal Hygiene', image: `${img1}` },
  { id: 2, name: 'Fresh Meat', image: `${img2}` },
  { id: 3, name: 'Vegetables', image: `${img3}` },
  { id: 4, name: 'Seafood', image: `${img4}` },
  { id: 5, name: 'Grocery', image: `${img5}` },
  { id: 6, name: 'Food', image: `${img6}` },
  { id: 7, name: 'Garments', image: `${img7}` },
  { id: 8, name: 'Fruits', image: `${img8}` },
];

export default function DealsScroll() {
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  useEffect(() => {
    const updateScrollAnimation = () => {
      const scrollWidth = scrollRef.current?.scrollWidth ?? 0;
      const viewportWidth = scrollRef.current?.offsetWidth ?? 0;

      controls.start({
        x: [-scrollWidth / 2, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        },
      });
    };

    // Start the initial animation
    updateScrollAnimation();

    // Add event listener for window resizing to adjust the animation
    window.addEventListener('resize', updateScrollAnimation);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateScrollAnimation);
  }, [controls]);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-12">
      {/* <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h2> */}
      <motion.div
        ref={scrollRef}
        className="flex"
        style={{ x }}
        animate={controls}
      >
        {[...products, ...products].map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="flex-shrink-0 w-64 mx-4"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-center capitalize font-semibold text-gray-600 truncate">
                  {product.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
