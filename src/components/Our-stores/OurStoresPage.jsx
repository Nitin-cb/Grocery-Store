import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; // Optional effect
import ProductScroll from './scroll';

// Store data including images
const storesData = [
  {
    branchName: 'Al Madina Hypermarket LLC Fuj Br-1',
    address:
      ' Twin Tower Building Hamad Bin Abdulla Road Merashid, Fujairah - United Arab Emirates',
    phone: '+971 9 223 4998',
    whatsApp: '+971 52 475 9646',
    email: 'info@almadinauae.ae',
    workingHours: '08:00 am to 12:00 am',
    map: 'https://maps.app.goo.gl/yRE3tzVjabY9Bbq77?g_st=iw',
    imageUrl: '/stores/Al Madina Hypermarket Fuj Br-1, Merashid.jpg',
  },
  {
    branchName: 'Al Madina Supermarket LLC Br-3',
    address: 'Al Sharia, Faseel Fujairah - United Arab Emirates',
    phone: '+971 9 234 8959',
    whatsApp: '+971 55 436 6979',
    email: 'info@almadinauae.ae',
    workingHours: '08:30 am to 11:00 pm',
    map: 'https://maps.app.goo.gl/KpUtPtG4MZj6vMVY8',
    imageUrl: '/stores/Al Madina Supermarket Br-3, Al Sharia.jpg',
  },
  {
    branchName: 'Al Madina Supermarket LLC Br-2',
    address:
      'CBI Building, Near ADIB bank Safad, Hamad Bin Abdulla Road Fujairah - United Arab Emirates',
    phone: '+971 9 222 2133',
    whatsApp: '+971 58 609 5132',
    email: 'info@almadinauae.ae',
    workingHours: '08:00 am to 12:00 am',
    map: 'https://maps.app.goo.gl/vQ4ek1DhipWoZAJ8A',
    imageUrl: '/stores/Al Madina Supermarket Br-2, Safad.jpg',
  },
  {
    branchName: 'Express Al Madina Supermarket LLC',
    address: 'Sakamkam Fujairah - United Arab Emirates',
    phone: '+971 9 224 3660 , +971 9 224 3661',
    whatsApp: '+971 52 508 2495',
    email: 'info@almadinauae.ae',
    workingHours: '07:00 am to 12:00 am',
    map: 'https://maps.app.goo.gl/HfZF6avzMzqZo16y7',
    imageUrl: '/stores/EXPRESS AL MADINA SUPERMARKET.jpg',
  },
  {
    branchName: 'Al Madina Hypermarket LLC Br-1',
    address: 'Bidya, Near VIP Hangover Fujairah - United Arab Emirates',
    phone: '+971 9 224 4456',
    whatsApp: '+971 58 609 5135',
    email: 'info@almadinauae.ae',
    workingHours: '08:00 am to 12:30 am',
    map: 'https://maps.app.goo.gl/uv1Ugnnamk1v4WdHA',
    imageUrl: '/stores/Al Madina Hypermarket Br-1, Bidya.jpg',
  },
  {
    branchName: 'Al Madina Hypermarket LLC',
    address:
      'Salim Al Kahabi Building Near Emirates post, Dibba Fujairah - United Arab Emirates',
    phone: '+971 9 244 4590',
    whatsApp: '+971 52 508 2497',
    email: 'info@almadinauae.ae',
    workingHours: '07:00 am to 1:00 am',
    map: 'https://maps.app.goo.gl/9o1EPXCaZHgH3fMi9',
    imageUrl: '/stores/Al Madina Hypermarket, Dibba.jpg',
  },
  {
    branchName: 'Zam Zam Supermarket LLC',
    address:
      'Gurfa, Near Fish & Vegetables Market Fujairah - United Arab Emirates',
    phone: '+971 9 222 9032',
    whatsApp: '+971 52 508 2491',
    email: 'info@almadinauae.ae',
    workingHours: '07:00 am to 12:00 am',
    map: 'https://maps.app.goo.gl/GA61egMXUSo8Qk4q8',
    imageUrl: '/stores/ZAM ZAM SUPERMARKET GURFA.jpg',
  },
  {
    branchName: 'Al Madina Supermarket LLC',
    address: 'Faseel, Fujairah - United Arab Emirates',
    phone: '+971 9 223 9003',
    whatsApp: '+971 52 508 2494',
    email: 'info@almadinauae.ae',
    workingHours: '07:00 am to 12:00 am',
    map: 'https://maps.app.goo.gl/Z3xCZVsTDA58iNsX7',
    imageUrl: '/stores/AL MADINA SUPERMARKET FASEEL.jpg',
  },
  {
    branchName: 'Al Madina Supermarket LLC',
    address:
      'Gurfa, Near Fish & Vegetables MarketFujairah - United Arab Emirates',
    phone: '+971 9 222 4757',
    whatsApp: '+971 52 508 2487',
    email: 'info@almadinauae.ae',
    workingHours: '07:00 am to 12:00 am',
    map: 'https://maps.app.goo.gl/1BD8F1qVjppvEMJQA',
    imageUrl: '/stores/Al MADIAN SUPERMARKET GURFA.jpg',
  },
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
          modules={[Navigation, Autoplay]} // Add Autoplay module
          spaceBetween={20}
          slidesPerView={3} // Show 3 slides at a time
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay with a 3-second delay
          loop
          speed={800} // Smooth transition speed
          effect="slide" // You can change to other effects like 'fade', 'coverflow', etc.
          breakpoints={{
            270: { slidesPerView: 1 },
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
                  <p className="text-gray-600 mb-1">
                    <strong>WhatsApp:</strong> {store.whatsApp}
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong>{' '}
                    <a
                      href={`mailto:${store.email}`}
                      className="text-green-600"
                    >
                      {store.email}
                    </a>
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Working Hours:</strong> {store.workingHours}
                  </p>
                  <p className="text-gray-600">
                    <strong>Map:</strong>{' '}
                    <a
                      href={store.map}
                      className=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {store.map}
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <h1 className="text-4xl font-extrabold text-center text-gray-800 my-12">
          Our <span className="text-green-600">Products</span>
        </h1>
        <ProductScroll />

        {/* Footer or Additional Info */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Find the store nearest to you and enjoy our wide range of products
            and services!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStores;
