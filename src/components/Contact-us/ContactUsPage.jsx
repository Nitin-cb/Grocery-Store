import React, { useState } from 'react';
import bannerimg from '/images/ContactUs/Banner for Contact Us Page.jpg';
import middleimg from '/images/ContactUs/Middle section.jpg';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        store: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div>
      {/* First Section: Image with text overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[50vh] md:h-screen bg-gray-900"
      >
        <img
          src={bannerimg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start text-white px-4 md:px-14 top-16 md:top-28">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-3xl sm:text-4xl md:text-6xl font-bold"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 md:mt-14 text-lg sm:text-2xl md:text-3xl"
          >
            We’re always ready for a coffee and a good chat!
          </motion.p>
        </div>
      </motion.div>

      {/* Second Section: Small paragraph */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="m-8 text-center p-12"
      >
        <p className="text-lg text-gray-600 md:text-xl font-bold mx-4">
          “We invite you to explore our stores, discover the wide range of
          products, and experience the difference of shopping with Al Madina
          retail. Whether stocking up on essentials or seeking something
          special, we are here to serve you with a smile.”
        </p>
      </motion.div>

      {/* Third Section: Address and Image */}
      <div className="flex flex-col md:flex-row justify-between items-start mx-4 md:mx-8 my-8 md:my-16">
        {/* Left side: Address */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Our Address
          </h2>
          <div className="flex items-center mb-2">
            <MailIcon />
            <p className="mx-2 text-sm md:text-base">info@almadinauae.ae</p>
          </div>
          <div className="flex items-center mb-2">
            <Phone size={18} />
            <p className="mx-2 text-sm md:text-base">+971 9 22 42 543</p>
          </div>
          <div className="flex items-start mb-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/535/535239.png"
              alt="Location Icon"
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <p className="mx-2 text-sm md:text-base">
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
          className="w-full md:w-1/2"
        >
          <h3 className="font-semibold text-lg md:text-xl mb-4">
            Our Location
          </h3>
          <div className="w-full h-48 md:h-64 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.0541025123753!2d56.33486257537939!3d25.121437477759756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4f965ca64b58b%3A0xd0770a1f918cc3d3!2sAl%20Madina%20Group!5e1!3m2!1sen!2sin!4v1729346169158!5m2!1sen!2sin"
              width="800"
              height="600"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Fourth Section: Full-screen Rectangle Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full p-6 flex flex-col items-center"
      >
        <h1 className="text-gray-500 text-center mb-4 text-3xl font-bold p-6">
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
        className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
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
            <p className="text-green-600 text-lg font-semibold">
              Thank you for your message. We will get back to you soon!
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ContactUsPage;
