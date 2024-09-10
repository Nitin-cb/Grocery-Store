import img1 from '../../assets/images/homePage/promotions/Affordable Pricing.jpg';
import img2 from '../../assets/images/homePage/promotions/Exclusive Offers.jpg';
import img3 from '../../assets/images/homePage/promotions/Wide Product Range.jpg';
import AnimatedSection from '../animated /section';
import Section from '../animated /section';

export default function Promotions() {
  return (
    <AnimatedSection className="min-h-[140px] bg-gray-200 w-full rounded-md py-14 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        
        {/* Left Column (Images aligned to the left) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2 ml-6 justify-self-center self-center">
          {/* Left stacked images */}
          <div className="space-y-6 ">
            <div>
              <img 
                className="object-cover object-center h-40 w-full md:h-[30vh] lg:h-[calc(30vh-1rem)]" 
                src={img1} 
                alt="Affordable Pricing" 
              />
            </div>
            <div>
              <img 
                className="object-cover object-center h-40 w-full md:h-[30vh] lg:h-[calc(30vh-1rem)]" 
                src={img3} 
                alt="Wide Product Range" 
              />
            </div>
          </div>
          
          {/* Right large image */}
          <div>
            <img 
              className="object-cover object-center h-[60vh] md:h-[calc(60vh-1rem)] w-full" 
              src={img2} 
              alt="Exclusive Offers" 
            />
          </div>
        </div>

        {/* Right Column (Title and Text) */}
        <div className="flex flex-col justify-center px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Promotions and Offers
          </h1>
          <p className="text-lg text-gray-700">
            Discover exclusive deals and promotions at our store. Whether you're searching for the best pricing or wide product variety, we've got you covered.
          </p>
          <div>

          <p className="text-lg text-gray-700 mt-4">
            Shop now and take advantage of our fantastic offers across various categories, tailored just for you.
          </p>
          <a
            href="/promotions"
            className="inline-block px-4 sm:px-6 py-1 sm:py-3 bg-white text-green-600 border hover:text-white border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Know more
          </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
