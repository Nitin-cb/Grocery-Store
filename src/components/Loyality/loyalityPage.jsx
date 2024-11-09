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

  // Add margin to trigger animations slightly before elements come into view
  const inViewOptions = {
    once: true,
    margin: '-100px 0px',
  };

  const isImgInView = useInView(imgRef, inViewOptions);
  const isTextInView = useInView(textRef, inViewOptions);
  const isBannerInView = useInView(bannerRef, inViewOptions);
  const isLoyaltyCardInView = useInView(loyaltyCardRef, inViewOptions);
  const isCustomerLoyaltyInView = useInView(customerLoyaltyRef, inViewOptions);
  const isBenefitsInView = useInView(benefitsRef, inViewOptions);

  // Reusable animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1.0], // Cubic bezier for smooth easing
      },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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

      <div className="h-full flex items-center justify-center">
        <motion.div
          className="text-center max-w-6xl px-6"
          variants={fadeInUp}
          initial="hidden"
          animate={isImgInView ? 'visible' : 'hidden'}
          ref={imgRef}
        >
          <h1 className="text-black text-5xl font-semibold leading-tight">
            <span className="text-yellow-400">Buy More...</span>
            <span className="text-orange-500">Earn More...</span>
          </h1>
          <p className="text-black mt-4 text-lg">
            "<span className="font-bold">Ahlan Madina</span>" is a Loyalty
            Mobile Application program. Points will be added to your account at
            the time of purchase.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-12 text-white">
        <motion.img
          ref={imgRef}
          className="w-full md:w-1/2"
          src={app}
          alt="App Screenshot"
          variants={fadeInScale}
          initial="hidden"
          animate={isImgInView ? 'visible' : 'hidden'}
        />

        <motion.div
          ref={textRef}
          className="w-full md:w-1/2 text-black flex flex-col items-center mt-11 p-6 md:p-10 md:mx-12 lg:mx-24"
          variants={fadeInUp}
          initial="hidden"
          animate={isTextInView ? 'visible' : 'hidden'}
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
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            Join the Loyalty Program
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        ref={bannerRef}
        variants={fadeInScale}
        initial="hidden"
        animate={isBannerInView ? 'visible' : 'hidden'}
      >
        <img src={banner} alt="Banner" />
      </motion.div>

      <motion.div
        ref={loyaltyCardRef}
        className="text-center py-10 flex items-center flex-wrap justify-evenly"
        variants={staggerChildren}
        initial="hidden"
        animate={isLoyaltyCardInView ? 'visible' : 'hidden'}
      >
        <motion.p className="text-gray-700 text-xl" variants={fadeInUp}>
          This Loyalty Rewards program allows Ahlan Card holders to earn points
          <br /> and redeem shopping vouchers and enjoy their rewards every day.
        </motion.p>
        <motion.div className="flex justify-center" variants={fadeInScale}>
          <img
            src={cardimg2}
            alt="Loyalty Card"
            className="w-full h-auto max-w-sm"
          />
        </motion.div>
      </motion.div>

      <motion.div
        ref={customerLoyaltyRef}
        className="text-center py-10 bg-white"
        variants={staggerChildren}
        initial="hidden"
        animate={isCustomerLoyaltyInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="text-4xl font-semibold text-gray-800"
          variants={fadeInUp}
        >
          Customer Loyalty Programs
        </motion.h2>

        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {[cardimg3, cardimg4, cardimg5].map((img, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full sm:w-1/3 max-w-sm transform hover:scale-105 transition duration-300"
              variants={fadeInUp}
            >
              <img
                src={img}
                alt={['Buy More', 'Earn More', 'Redeem'][index]}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800">
                  {['BUY MORE', 'EARN MORE', 'REDEEM'][index]}
                </h3>
                <p className="mt-2 text-gray-600">
                  {
                    [
                      'Exclusive offers and early access to sales',
                      'Earn points for every AED spent',
                      'Redeem points for discounts, freebies, and more',
                    ][index]
                  }
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={benefitsRef}
        className="text-center py-12 bg-gray-50"
        variants={staggerChildren}
        initial="hidden"
        animate={isBenefitsInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="text-3xl font-semibold text-gray-800"
          variants={fadeInUp}
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
            <motion.div key={index} className="text-center" variants={fadeInUp}>
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
