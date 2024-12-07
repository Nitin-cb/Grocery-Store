import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; // Optional effect
import ProductScroll from './scroll';
import { motion } from 'framer-motion';
import bannerimg from '/images/Our Stores/banner.jpg';
import location from '/images/Our Stores/location.png';

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
  // {
  //   branchName: 'Al Madina Supermarket LLC Br-3',
  //   address: 'Al Sharia, Faseel Fujairah - United Arab Emirates',
  //   phone: '+971 9 234 8959',
  //   whatsApp: '+971 55 436 6979',
  //   email: 'info@almadinauae.ae',
  //   workingHours: '08:30 am to 11:00 pm',
  //   map: 'https://maps.app.goo.gl/KpUtPtG4MZj6vMVY8',
  //   imageUrl: '/stores/Al Madina Supermarket Br-3, Al Sharia.jpg',
  // },
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
    <section className="bg-green-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full mb-12 bg-gray-900"
      >
        <img
          src={bannerimg}
          alt="Background"
          className="w-full h-full object-contain object-center sm:object-top md:object-center lg:object-center"
        />
        <div className="absolute inset-0 flex flex-col items-start text-white px-4 sm:px-10 md:px-14 top-4 md:top-40 lg:top-52">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black"
          >
            Locate <span className="text-green-600"> Our Store</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-2 text-black flex sm:flex-wrap md:mt-4 lg:mt-10 text-[9.5px] sm:text-lg md:text-xl lg:text-3xl"
          >
            "The new way of shopping at your fingertips"
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 bg-green-50">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="stores-carousel w-full h-auto py-10"
        >
          {storesData.map((store, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white w-full max-w-sm h-full shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col">
                {/* Store Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={store.imageUrl}
                    alt={store.branchName}
                    className="w-full h-full object-cover object-center	"
                  />
                </div>

                {/* Store Details */}
                <div className="p-6 h-80 flex-grow flex flex-col">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">
                    {store.branchName}
                  </h2>
                  <div className="flex-grow">
                    <div className="space-y-2 h-full">
                      <p className="text-gray-600 text-sm flex">
                        <strong className="mr-2 min-w-[80px]">Address:</strong>
                        <span>{store.address}</span>
                      </p>
                      <p className="text-gray-600 flex">
                        <strong className="mr-2 min-w-[80px]">Phone:</strong>
                        {store.phone}
                      </p>
                      <p className="text-gray-600 flex">
                        <strong className="mr-2 min-w-[80px]">WhatsApp:</strong>
                        {store.whatsApp}
                      </p>
                      <p className="text-gray-600 flex">
                        <strong className="mr-2 min-w-[80px]">Email:</strong>
                        <a
                          href={`mailto:${store.email}`}
                          className="text-green-600 truncate"
                        >
                          {store.email}
                        </a>
                      </p>
                      <p className="text-gray-600 flex">
                        <strong className="mr-2 min-w-[80px]">Hours:</strong>
                        {store.workingHours}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href={store.map}
                      className="flex items-center gap-3 text-green-600 hover:text-green-800 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Open in Maps</strong>
                      <img src={location} alt="Location" className="w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h1 className="text-4xl font-extrabold text-center text-gray-800 my-12">
          Our <span className="text-green-600">Products</span>
        </h1>
      </div>
      <ProductScroll />
      <div className="text-center mt-12 py-4">
        <p className="text-lg text-gray-600">
          Find the store nearest to you and enjoy our wide range of products and
          services!
        </p>
      </div>
    </section>
  );
};

export default OurStores;
