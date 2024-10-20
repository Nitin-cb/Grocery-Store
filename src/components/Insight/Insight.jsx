import React from 'react';
import img1 from '/images/insights/Affordable Pricing.jpeg';
import img2 from '/images/insights/wideproducts.jpg';
import img3 from '/images/insights/exclusiveoffer.jpg';
import img4 from '/images/insights/customersupport.jpg';

const Insight = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen bg-white p-4 md:p-8 gap-8">
      {/* Left Section */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Insight</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          When you shop at Al Madina Retail, you can trust that you are getting
          more than just groceries and household essentials; it's an experience
          rooted in excellence, integrity, and care.
        </p>
        <div className="pt-4">
          <a
            href="/promotions"
            className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-base md:text-lg"
          >
            Know more
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { title: 'Affordable Pricing', img: img1 },
          { title: 'Wide Product Range', img: img2 },
          { title: 'Exclusive Offers', img: img3 },
          { title: 'Customer Support', img: img4 },
        ].map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent text-white p-4">
              <p className="text-center font-semibold text-lg">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insight;
