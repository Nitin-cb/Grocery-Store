import cardimg1 from '/images/loyalityCard/For Ahlan Paged Header.jpg';
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
      {/* Top section with Image */}
      <div
        className="relative h-[700px] bg-cover bg-center flex items-center justify-center "
        style={{
          backgroundImage: `url(${cardimg1})`, // Replace with your background image URL
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl font-semibold">
              Buy More... Earn More...
            </h1>
            <p className="text-white mt-4">
              {/* Earn points and redeem them on your next shopping spree. */}
              “Ahlan Madina” is a Loyalty Mobile Application program, points
              will be added to your Account at the time of purchase. <br />
              This app used for viewing total Points, Nearest Outlasts with
              Location and Contact details and Promotional Flyers
            </p>
          </div>
        </div>
      </div>

      {/* Loyalty Card Section */}
      <div className="text-center py-12 flex items-center flex-wrap justify-evenly">
        <p className="text-gray-700 text-xl">
          This Loyalty Rewards program allows the Ahlan Card holders to earn
          points
          <br /> and redeem shopping vouchers and enjoy their rewards every day.
        </p>
        <div className="flex justify-center ">
          <img src={cardimg2} alt="Loyalty Card" className="w-full h-auto" />
        </div>
      </div>

      {/* Customer Loyalty Programs */}
      <div className="text-center py-12 bg-white">
        <h2 className="text-3xl font-semibold">Customer Loyalty Programs</h2>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="text-center">
            <img
              src={cardimg3}
              alt="Buy More"
              className="w-full h-40 mx-auto rounded-lg"
            />
            <p className="mt-4 font-bold text-xl">BUY MORE</p>
            <p className="mt-2">Exclusive offers and early access to sales</p>
          </div>
          <div className="text-center">
            <img
              src={cardimg4}
              alt="Earn More"
              className="w-full h-40 mx-auto rounded-lg"
            />
            <p className="mt-4 font-bold text-xl">EARN MORE</p>
            <p className="mt-2">Earn points for every AED spent</p>
          </div>
          <div className="text-center">
            <img
              src={cardimg5}
              alt="Redeem"
              className="w-full h-40 mx-auto rounded-lg"
            />
            <p className="mt-4 font-bold text-xl">REDEEM</p>
            <p className="mt-2">
              Redeem points for discount, freebies and more
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="text-center py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold">Benefits</h2>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="text-center">
            <img src={b1} alt="Discounts" className="w-16 h-16 mx-auto" />
            <p className="mt-4">Earn point on every purchase</p>
          </div>
          <div className="text-center">
            <img src={b2} alt="Rewards" className="w-16 h-16 mx-auto" />
            <p className="mt-4">Exclusive Offers</p>
          </div>
          <div className="text-center">
            <img src={b3} alt="Rewards" className="w-16 h-16 mx-auto" />
            <p className="mt-4">Create an account & be logged in</p>
          </div>
          <div className="text-center">
            <img src={b4} alt="Rewards" className="w-16 h-16 mx-auto" />
            <p className="mt-4">Earn point on every purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
