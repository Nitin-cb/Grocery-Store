import { motion } from 'framer-motion';
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

export default function Loyality() {
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
          className="text-center max-w-6xl px-6 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-black text-5xl font-semibold leading-tight">
            <span className="text-yellow-400">Buy More...</span>
            <span className="text-orange-500">Earn More...</span>
          </h1>
          <p className="text-black mt-4 text-lg">
            “<span className="font-bold ">Ahlan Madina</span>” is a Loyalty
            Mobile Application program. Points will be added to your account at
            the time of purchase. This app is used for viewing total Points,
            Nearest Outlets with Location and Contact details, and Promotional
            Flyers.
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Join the Loyalty Program
          </button>
        </motion.div>
        {/* </div> */}
      </div>

      {/* Loyalty Card Section */}
      <motion.div
        className="text-center py-10 flex items-center flex-wrap justify-evenly"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="text-gray-700 text-xl">
          This Loyalty Rewards program allows Ahlan Card holders to earn points
          <br /> and redeem shopping vouchers and enjoy their rewards every day.
        </p>
        <div className="flex justify-center">
          <img
            src={cardimg2}
            alt="Loyalty Card"
            className="w-full h-auto max-w-sm"
          />
        </div>
      </motion.div>

      {/* Customer Loyalty Programs */}
      <motion.div
        className="text-center py-10 bg-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-semibold text-gray-800">
          Customer Loyalty Programs
        </h2>
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {/* Buy More Card */}
          <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full sm:w-1/3 max-w-sm transform hover:scale-105 transition duration-300">
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
          </div>

          {/* Earn More Card */}
          <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full sm:w-1/3 max-w-sm transform hover:scale-105 transition duration-300">
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
          </div>

          {/* Redeem Card */}
          <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full sm:w-1/3 max-w-sm transform hover:scale-105 transition duration-300">
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
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        className="text-center py-12 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-semibold text-gray-800">Benefits</h2>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="text-center">
            <img src={b1} alt="Discounts" className="w-16 h-16 mx-auto" />
            <p className="mt-4 text-gray-600">Earn points on every purchase</p>
          </div>
          <div className="text-center">
            <img src={b2} alt="Rewards" className="w-16 h-16 mx-auto" />
            <p className="mt-4 text-gray-600">Exclusive Offers</p>
          </div>
          <div className="text-center">
            <img src={b3} alt="Rewards" className="w-16 h-16 mx-auto" />
            <p className="mt-4 text-gray-600">
              Create an account & stay logged in
            </p>
          </div>
          <div className="text-center">
            <img src={b4} alt="Rewards" className="w-16 h-16 mx-auto" />
            <p className="mt-4 text-gray-600">More points, more rewards</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
