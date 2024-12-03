import { useState, useEffect } from 'react';
import ParallaxScroll from './ParallaxScroll';
import Spinner from '../../lib/Spinner';
import backgroundImage from '/images/homebg/gallery.jpg';

const images = [
  '/images/Gallery/3Y1A4873.JPG',
  '/images/Gallery/3Y1A4877.JPG',
  '/images/Gallery/3Y1A4880.JPG',
  '/images/Gallery/3Y1A5011.JPG',
  '/images/Gallery/3Y1A5012.JPG',
  '/images/Gallery/3Y1A5023.JPG',
  '/images/Gallery/3Y1A5031.JPG',
  '/images/Gallery/3Y1A5037.JPG',
  '/images/Gallery/3Y1A5054.JPG',
  '/images/Gallery/3Y1A5059.JPG',
  '/images/Gallery/3Y1A5064.JPG',
  '/images/Gallery/3Y1A5072.JPG',
];

export default function GalleryPage() {
  const [loading, setLoading] = useState(true);

  // Check if all images are loaded
  useEffect(() => {
    let loadedCount = 0;
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === images.length) {
          setLoading(false); // All images are loaded
        }
      };
    });
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-gray-50"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust to 'contain' if you want the full image visible
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {loading ? (
        <Spinner /> // Show loading spinner
      ) : (
        <div className="container mx-auto py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 tracking-wide">
            Our <span className="text-green-600">Gallery</span>
          </h2>
          <ParallaxScroll images={images} className="mt-4" />
        </div>
      )}
    </div>
  );
}
