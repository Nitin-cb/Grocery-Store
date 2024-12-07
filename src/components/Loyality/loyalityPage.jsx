import { motion, useInView } from 'framer-motion';
import cardimg1 from '/images/loyalityCard/Ahlan.jpg';
import cardimg from '/images/loyalityCard/With Qr code.jpg';
import cardimg2 from '/images/loyalityCard/Ahlan Loyalty Card.png';
import cardimg3 from '/images/loyalityCard/BUY MORE.jpg';
import cardimg4 from '/images/loyalityCard/EARN MORE.jpg';
import cardimg5 from '/images/loyalityCard/REDDEM.jpg';
import b1 from '/images/loyalityCard/b1.png';
import b2 from '/images/loyalityCard/b2.png';
import b3 from '/images/loyalityCard/b3.png';
import b4 from '/images/loyalityCard/b4.png';
// import app from '/images/loyalityCard/App .jpg';
import banner from '/images/loyalityCard/AhlanBaner.jpg';
import React from 'react';
import { BackArrowIcon, DownloadIcon } from '../../utils/icons';

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
    <div className="bg-lime-50">
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
          <p className="text-black mt-4 text-xl">
            "<span className="font-bold">Ahlan Madina</span>" is a Loyalty
            Mobile Application program. Points will be added to your account at
            the time of purchase.
          </p>
          <p className="text-black mt-4 text-xl">
            "This app is used for viewing total Points, Nearest Outlets, with
            Location and Contact details, and Promotional Flyers"
          </p>
          <p className="text-black mt-12 font-bold text-xl">
            You can redeem your points at any of our Outlets
          </p>
        </motion.div>
      </div>
      <motion.div
        className="mt-12"
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
      {/* Customer Loyalty */}
      <motion.div
        ref={customerLoyaltyRef}
        className="text-center py-10 bg-lime-50"
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

        <div className="flex flex-wrap bg-lime-50 justify-center mt-8 gap-6">
          {[cardimg3, cardimg4, cardimg5].map((img, index) => (
            <motion.div
              key={index}
              className="bg-lime-100 shadow-lg rounded-lg overflow-hidden w-full sm:w-1/3 max-w-sm"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 10,
              }}
            >
              <img
                src={img}
                alt={['Buy More', 'Earn More', 'Redeem'][index]}
                className="w-full object-contain"
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

      {/* Benefits */}
      <motion.div
        ref={benefitsRef}
        className="text-center py-12 bg-lime-50"
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
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',
              }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 8,
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
