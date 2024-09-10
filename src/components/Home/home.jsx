import img1 from '../../assets/images/brooke-lark-08bOYnH_r_E-unsplash-removebg-preview.png';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); 
  }, []);

  return (
    <section className="w-full bg-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full min-h-[70vh]">
        <div
          className={`flex flex-col justify-center items-start md:w-1/2 w-full text-left p-6 sm:p-8 md:p-16 space-y-4 
            transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <h1
            className={`text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight transform transition-all duration-1000 delay-300
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            Make a healthy life with <span className="text-green-600">Fresh</span> Grocery
          </h1>
          <p
            className={`text-md sm:text-lg md:text-xl text-gray-600 transform transition-all mt-4 duration-1000 delay-500
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 '}`}
          >
            Fresh products, great deals, and convenient shopping right at your fingertips.
          </p>
          <a
            href="/promotions"
            className={`inline-block px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition
              transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            Shop Now
          </a>
        </div>
        <div
          className={`md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center 
            transition-transform duration-1000 ease-in-out transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
      </div>
    </section>
  );
}
