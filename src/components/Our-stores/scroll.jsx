import { useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

// Sample product data (replace with your actual product data)
const products = [
  {
    id: 1,
    name: 'Chana dal',
    image: '/images/Our Stores/own products/chana dal.jpg',
  },
  // { id: 2, name: "Fresh Juice", image: "/images/Our Stores/own products/Fresh Juice.jpg" },
  {
    id: 3,
    name: 'Masoor Dal',
    image: '/images/Our Stores/own products/Masoor Dal.jpg',
  },
  { id: 4, name: 'Mokup', image: '/images/Our Stores/own products/mokup.jpg' },
  {
    id: 5,
    name: 'Toor Dal',
    image: '/images/Our Stores/own products/toor dal.jpg',
  },
  {
    id: 6,
    name: 'White Chickpeas',
    image: '/images/Our Stores/own products/white chickpeas.jpg',
  },
];

export default function ProductScroll() {
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
    <div className="w-full overflow-hidden bg-green-50 py-12">
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
                className="w-full h-60 object-cover"
              />
              {/* <div className="p-4">
                <h3 className="text-lg text-center capitalize font-semibold text-gray-600 truncate">
                  {product.name}
                </h3>
              </div> */}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
