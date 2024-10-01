import img1 from '/images/homePage/promotions/Affordable Pricing.jpg';
import img2 from '/images/homePage/promotions/Exclusive Offers.jpg';
import img3 from '/images/homePage/promotions/Wide Product Range.jpg';
import AnimatedSection from '../animated /section';

export default function Promotions() {
  return (
    <AnimatedSection className="bg-gray-200 w-full h-screen rounded-md  sm:py-12 md:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Images Column */}
        <div className="grid grid-cols-2 gap-4 justify-self-center self-center">
          {/* Left stacked images */}
          <div className="space-y-4">
            <div>
              <img
                className="object-cover object-center w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg"
                src={img1}
                alt="Affordable Pricing"
              />
            </div>
            <div>
              <img
                className="object-cover object-center w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg"
                src={img3}
                alt="Wide Product Range"
              />
            </div>
          </div>
          {/* Right large image */}
          <div>
            <img
              className="object-cover object-center w-full h-full rounded-lg"
              src={img2}
              alt="Exclusive Offers"
            />
          </div>
        </div>

        {/* Text Column */}
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className='flex flex-col justify-center'>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            Promotions and Offers
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Discover exclusive deals and promotions at our store. Whether you're searching for the best pricing or wide product variety, we've got you covered.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Shop now and take advantage of our fantastic offers across various categories, tailored just for you.
          </p>
          </div>
          <a
            href="/promotions"
            className="inline-block px-6 py-3 bg-white text-green-600 border border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 hover:text-white transition duration-300 ease-in-out text-center sm:text-left"
          >
            Know more
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}