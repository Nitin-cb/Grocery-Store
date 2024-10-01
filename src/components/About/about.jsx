import img2 from '/images/Welcom.jpg';
import AnimatedSection from '../animated /section';  // Updated to use AnimatedSection
import './about.css';
import Rectangle from './rectangleComponent';

export default function AboutPage() {
  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Text Section */}
        <AnimatedSection className="flex flex-col w-full lg:w-1/2 p-3 sm:p-4 md:p-6" animationDirection="up">
          <p className="text-sm sm:text-base text-blue-700 font-semibold">About Us</p>
          <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl text-gray-700 mt-2">Welcome To Al Madina</h2>
          <p className="leading-6 sm:leading-7 mt-4 sm:mt-6 text-sm sm:text-base">
            <span className="text-4xl sm:text-5xl leading-4 inline-block align-bottom float-left text-green-500 mr-2">A</span>
            t Al Madina Retail, more than just a chain of stores; it stands as a cornerstone of the communities we serve.
            <span className="mt-4 sm:mt-6 block">
              Established in 1984, Al Madina Retail has been committed to providing high-quality products, exceptional service, and an unmatched shopping experience to our valued customers in Fujairah.
            </span>
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full lg:w-[90%] xl:w-[80%] mt-6 sm:mt-8">
            <Rectangle heading={'18'} subHeading={''} />
            <Rectangle heading={'250+'} subHeading={'full-time employees'} />
            <Rectangle heading={'33'} subHeading={'Nationalities'} />
            <Rectangle heading={'9'} subHeading={'Growth awards'} />
          </div>
        </AnimatedSection>

        {/* Image Section - Hidden on small screens */}
        <AnimatedSection className="hidden lg:block w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto mt-6 lg:mt-0" animationDirection="right">
          <img src={img2} alt="Al Madina Store" className="rounded-lg w-full h-full object-cover" />
        </AnimatedSection>
      </div>
    </div>
  );
}
