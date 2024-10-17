import img2 from '/images/Welcom.jpg';
import AnimatedSection from '../animated /section'; // Updated to use AnimatedSection
import './about.css';
import Rectangle from './rectangleComponent';
import img1 from '/images/pattern-with-watercolor-flowers-vintage.jpg';
export default function AboutPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${img1})`, // Replace with your background image URL
      }}
      className="w-full h-screen  bg-cover bg-center bg-white items-center flex flex-col md:justify-between"
    >
      <div className="flex flex-col gap-6 lg:flex-row w-full h-full max-w-6xl sm:items-center justify-center px-4 lg:px-0">
        {/* Text Section */}
        <div className="flex flex-col lg:w-1/2  lg:px-10 lg:mr-10">
          <p className="text-sm text-center sm:text-base text-blue-700 font-semibold">
            About Us
          </p>
          <h2 className="font-medium text-center text-2xl sm:text-3xl md:text-4xl text-gray-700 mt-2 mb-8">
            Welcome To Al Madina
          </h2>
          <p className="leading-6 sm:leading-7 mt-4 sm:mt-6 text-sm sm:text-base">
            <span className="text-4xl sm:text-5xl leading-4 inline-block align-bottom float-left text-green-500 mr-2">
              A
            </span>
            t Al Madina Retail, more than just a chain of stores; it stands as a
            cornerstone of the communities we serve.
            <span className=" block">
              Established in 1984, Al Madina Retail has been committed to
              providing high-quality products, exceptional service, and an
              unmatched shopping experience to our valued customers in Fujairah.
            </span>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={img2}
            alt="Al Madina Store"
            className="rounded-lg w-full h-auto object-cover lg:max-w-4xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
