import { motion, useInView } from 'framer-motion';
import cardimg1 from '/images/loyalityCard/For Ahlan Paged Header.jpg';
import cardimg from '/images/loyalityCard/With Qr code.jpg';
import cardimg2 from '/images/loyalityCard/Ahlan Loyalty Card.png';
import cardimg3 from '/images/loyalityCard/BUY MORE.jpg';
import cardimg4 from '/images/loyalityCard/EARN MORE.jpg';
import cardimg5 from '/images/loyalityCard/REDDEM.jpg';
import b1 from '/images/loyalityCard/b1.png';
import b2 from '/images/loyalityCard/b2.png';
import b3 from '/images/loyalityCard/b3.png';
import b4 from '/images/loyalityCard/b4.png';
import app from '/images/loyalityCard/App .jpg';
import banner from '/images/loyalityCard/AhlanBaner.jpg';
import React from 'react';

export default function Loyality() {
  // Refs and visibility tracking for each section
  const imgRef = React.useRef(null);
  const textRef = React.useRef(null);
  const bannerRef = React.useRef(null);
  const loyaltyCardRef = React.useRef(null);
  const customerLoyaltyRef = React.useRef(null);
  const benefitsRef = React.useRef(null);

  const isImgInView = useInView(imgRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });
  const isBannerInView = useInView(bannerRef, { once: true });
  const isLoyaltyCardInView = useInView(loyaltyCardRef, { once: true });
  const isCustomerLoyaltyInView = useInView(customerLoyaltyRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  return (
    <div className="bg-gray-50">
      <div className="relative mb-7">
        <img
          src={cardimg1}
          alt="Large Screen Image"
          className="hidden lg:block w-full"
        />
        <img
          src={cardimg}
          alt="Small Screen Image"
          className="block lg:hidden w-full"
        />
      </div>
      {/* Top section with Image */}
      <div className=" h-full  flex items-center justify-center">
        {/* <div className="flex items-center justify-center"> */}
        <motion.div
          className="text-center max-w-6xl px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isImgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          ref={imgRef}
        >
          <h1 className="text-black text-5xl font-semibold leading-tight">
            <span className="text-yellow-400">Buy More...</span>
            <span className="text-orange-500">Earn More...</span>
          </h1>
          <p className="text-black mt-4 text-lg">
            “<span className="font-bold ">Ahlan Madina</span>” is a Loyalty
            Mobile Application program. Points will be added to your account at
            the time of purchase.
          </p>
        </motion.div>
        {/* </div> */}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-12 text-white">
        {/* Image Section with Framer Motion */}
        <motion.img
          ref={imgRef}
          className="w-full md:w-1/2"
          src={app}
          alt="App Screenshot"
          initial={{ opacity: 0, y: 50 }}
          animate={isImgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Text and Button Section with Framer Motion */}
        <motion.div
          ref={textRef}
          className="w-full md:w-1/2 text-black flex flex-col items-center mt-11 p-6 md:p-10 md:mx-12 lg:mx-24"
          initial={{ opacity: 0, x: -50 }}
          animate={isTextInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          <p className="text-center sm:text-lg text-xl">
            "This app is used for viewing total Points, Nearest Outlets, with
            Location and Contact details, and Promotional Flyers".
          </p>
          <p className="text-center mt-6 sm:text-lg text-xl font-bold">
            You can redeem your points at any of our Outlets
          </p>
          <motion.button
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Loyalty Program
          </motion.button>
        </motion.div>
      </div>
      {/* Additional Banner Image with Framer Motion */}
      <motion.div
        ref={bannerRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isBannerInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
      >
        <img src={banner} alt="Banner" />
      </motion.div>

      {/* Loyalty Card Section */}
      <motion.div
        ref={loyaltyCardRef}
        className="text-center py-10 flex items-center flex-wrap justify-evenly"
        initial={{ opacity: 0, y: 50 }}
        animate={isLoyaltyCardInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.p
          className="text-gray-700 text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoyaltyCardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          This Loyalty Rewards program allows Ahlan Card holders to earn points
          <br /> and redeem shopping vouchers and enjoy their rewards every day.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLoyaltyCardInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <img
            src={cardimg2}
            alt="Loyalty Card"
            className="w-full h-auto max-w-sm"
          />
        </motion.div>
      </motion.div>

      {/* Customer Loyalty Programs */}
      <motion.div
        ref={customerLoyaltyRef}
        className="text-center py-10 bg-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isCustomerLoyaltyInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-4xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={isCustomerLoyaltyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          Customer Loyalty Programs
        </motion.h2>

        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {/* Buy More Card */}
          <motion.div
            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full sm:w-1/3 max-w-sm transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isCustomerLoyaltyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          >
            <img
              src={cardimg3}
              alt="Buy More"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800">BUY MORE</h3>
              <p className="mt-2 text-gray-600">
                Exclusive offers and early access to sales
              </p>
            </div>
          </motion.div>

          {/* Earn More Card */}
          <motion.div
            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full sm:w-1/3 max-w-sm transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isCustomerLoyaltyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          >
            <img
              src={cardimg4}
              alt="Earn More"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800">EARN MORE</h3>
              <p className="mt-2 text-gray-600">
                Earn points for every AED spent
              </p>
            </div>
          </motion.div>

          {/* Redeem Card */}
          <motion.div
            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full sm:w-1/3 max-w-sm transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isCustomerLoyaltyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
          >
            <img
              src={cardimg5}
              alt="Redeem"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800">REDEEM</h3>
              <p className="mt-2 text-gray-600">
                Redeem points for discounts, freebies, and more
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        ref={benefitsRef}
        className="text-center py-12 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-3xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          Benefits
        </motion.h2>

        <div className="flex justify-center mt-8 space-x-8">
          {[
            {
              src: b1,
              alt: 'Discounts',
              text: 'Earn points on every purchase',
            },
            { src: b2, alt: 'Rewards', text: 'Exclusive Offers' },
            {
              src: b3,
              alt: 'Rewards',
              text: 'Create an account & stay logged in',
            },
            { src: b4, alt: 'Rewards', text: 'More points, more rewards' },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.2,
                ease: 'easeOut',
              }}
            >
              <img
                src={benefit.src}
                alt={benefit.alt}
                className="w-16 h-16 mx-auto"
              />
              <p className="mt-4 text-gray-600">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
