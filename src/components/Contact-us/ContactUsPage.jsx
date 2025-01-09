import axios from 'axios';
import React, { useState } from 'react';
import bannerimg from '/images/ContactUs/Banner for Contact Us Page.jpg';
import middleimg from '/images/ContactUs/Middle section.jpg';
import bgimg1 from '/images/ContactUs/bg1.jpg';
import bgimg2 from '/images/ContactUs/bg2.jpg';
import { MailIcon } from '../../utils/icons';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    store: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newErrors = validateForm();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        setSubmitted(true);
        const currentDate = new Date().toISOString().split('T')[0];
        const response = await axios.post(import.meta.env.VITE_SHEETDBIO, {
          data: {
            Date: currentDate, // Add the submission date
            Name: formData.name,
            Email: formData.email,
            Store: formData.store,
            Message: formData.message,
          },
        });
      }
    } catch (error) {
      console.error('Error submitting data to SheetDB:', error);
    }
  };

  return (
    <div>
      {/* First Section: Image with text overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full   bg-gray-900"
      >
        <img
          src={bannerimg}
          alt="Background"
          className="w-full h-full object-contain object-center sm:object-top md:object-center lg:object-center"
        />
        <div className="absolute inset-0 flex flex-col items-start text-white px-4 sm:px-10 md:px-14 top-4  md:top-12 lg:top-16">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-2 text-white flex sm:flex-wrap md:mt-4 lg:mt-10 text-[9.5px] sm:text-lg md:text-xl lg:text-3xl"
          >
            We're always ready for a coffee and good chat!
          </motion.p>
        </div>
      </motion.div>

      <div className="relative  pt-7">
        {/* Overlay for better text visibility */}
        <div
          className="absolute inset-0 bg-black bg-opacity-0"
          style={{
            backgroundImage: `url(${bgimg1})`, // Replace bgimg1 with the actual image variable
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Content */}
        <div className="relative">
          {/* Second Section: Small paragraph */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center px-12"
          >
            <p className="text-lg text-black md:text-xl font-bold mx-4">
              “We invite you to explore our stores, discover the wide range of
              products, and experience the difference of shopping with Al Madina
              retail. Whether stocking up on essentials or seeking something
              special, we are here to serve you with a smile.”
            </p>
          </motion.div>

          {/* Third Section: Address and Image */}
          <div className="flex md:flex-row  flex-col justify-between items-center mx-4  md:mx-8">
            {/* Left side: Address */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full  pl-20 pt-5 md:w-1/2 md:mb-72"
            >
              <div className="flex items-center mb-2">
                <MailIcon />
                <p className="mx-2 text-sm text-black md:text-xl">
                  info@almadinauae.ae
                </p>
              </div>
              <div className="flex items-center mb-2">
                <Phone size={18} />
                <p className="mx-2 text-sm text-black md:text-xl">
                  +971 9 22 42 543
                </p>
              </div>
              <div className="flex items-start mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/535/535239.png"
                  alt="Location Icon"
                  className="w-6 h-6 md:w-6 md:h-6"
                />
                <p className="mx-2 text-sm text-black md:text-xl">
                  Al Madina Group, Emirates Islamic Bank Building, Office# 1508,
                  15th floor, Opp. Dubai Islamic Bank, Hamad Bin Abdulla Road,
                  Merashid – Fujairah
                </p>
              </div>
            </motion.div>

            {/* Location Map */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full md:w-2/5"
            >
              <div className="w-full p-12 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.0541025123753!2d56.33486257537939!3d25.121437477759756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4f965ca64b58b%3A0xd0770a1f918cc3d3!2sAl%20Madina%20Group!5e1!3m2!1sen!2sin!4v1729346169158!5m2!1sen!2sin"
                  className="w-full aspect-square rounded-lg"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fourth Section: Full-screen Rectangle Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full p-6 flex flex-col items-center"
      >
        <h1 className="text-gray-500 text-center  text-3xl font-bold p-6">
          “We are committed to providing valuable consumable products at
          <br />
          affordable price: Best Quality, Healthy & Tasty, Fresh Products,
          Competitive Prices”
        </h1>

        <img
          src={middleimg}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Contact us form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bgimg2})`, // Replace bgimg1 with the actual image variable
        }}
      >
        {/* Optional Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}

        {/* Content */}
        <div className="relative z-10 max-w-md w-full bg-opacity-40 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-extrabold text-green-900 mb-6">
            Contact Us
          </h2>
          {!submitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="store"
                  className="block text-sm font-medium text-gray-700"
                >
                  Store (Optional)
                </label>
                <input
                  id="store"
                  name="store"
                  type="text"
                  value={formData.store}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm">{errors.message}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-lg font-medium text-green-800">
                Thank you for contacting us! We'll get back to you soon.
              </h3>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ContactUsPage;
