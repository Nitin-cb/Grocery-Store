import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Store data including images
const storesData = [
  {
    branchName: 'Al Madina Supermarket - Gurfa',
    address: '123 Market Street, Gurfa, UAE',
    phone: '+971 123 456 789',
    email: 'gurfa@almadina.com',
    imageUrl: '/stores/Al MADIAN SUPERMARKET GURFA.jpg'
  },
  {
    branchName: 'Al Madina Supermarket - Dubai',
    address: '456 Al Wasl Road, Dubai, UAE',
    phone: '+971 987 654 321',
    email: 'dubai@almadina.com',
    imageUrl: '/stores/Al Madina Hypermarket Br-1, Bidya.jpg'
  },
  {
    branchName: 'Al Madina Supermarket - Abu Dhabi',
    address: '789 Corniche Road, Abu Dhabi, UAE',
    phone: '+971 555 678 910',
    email: 'abudhabi@almadina.com',
    imageUrl: '/stores/Al Madina Hypermarket, Dibba.jpg'
  },
  {
    branchName: 'Al Madina Supermarket - Sharjah',
    address: '123 Rolla Street, Sharjah, UAE',
    phone: '+971 234 567 890',
    email: 'sharjah@almadina.com',
    imageUrl: '/stores/Al Madina Hypermarket Br-2, Sharjah.jpg'
  },
  {
    branchName: 'Al Madina Supermarket - Ajman',
    address: '456 Ajman Street, Ajman, UAE',
    phone: '+971 876 543 210',
    email: 'ajman@almadina.com',
    imageUrl: '/stores/Al Madina Supermarket Br-3, Al Sharia.jpg'
  }
];

const OurStores = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Our <span className="text-green-600">Stores</span>
        </h1>

        {/* Swiper for carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3} // Show 3 slides at a time
          navigation
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="carousel-container"
        >
          {storesData.map((store, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300">
                {/* Store Image */}
                <img
                  src={store.imageUrl}
                  alt={store.branchName}
                  className="w-full h-48 object-cover"
                />

                {/* Store Details */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {store.branchName}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    <strong>Address:</strong> {store.address}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Phone:</strong> {store.phone}
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong> <a href={`mailto:${store.email}`} className="text-green-600">{store.email}</a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Footer or Additional Info */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Find the store nearest to you and enjoy our wide range of products and services!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStores;
