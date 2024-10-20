import React from 'react';
import video from '/images/exclusivedeals/MS.mp4';
import DealsScroll from './scroll';

const ExclusiveDeals = () => {
  return (
    <div className="bg-gray-100 w-full h-screen p-4">
      <div className="flex flex-col h-auto md:flex-row">
        <div className="w-full md:w-1/2 pl-14 mt-16">
          <h2 className="text-3xl font-bold mb-4 text-green-600">
            Exclusive Deals
          </h2>
          <p className="mb-4">
            "We are committed to provide valuable consumable products at
            affordable price Best Quality, Healthy & Tasty, Fresh Products,
            Competitive Prices"
          </p>
        </div>

        {/* video */}
        <div className="w-full md:w-1/2 p-4">
          <div className="relative aspect-video">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <DealsScroll />
      </div>
    </div>
  );
};

export default ExclusiveDeals;
