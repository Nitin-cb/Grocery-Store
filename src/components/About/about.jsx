import img2 from '/images/about.png';
import Section from '../animated /section';
import './about.css';

export default function AboutPage() {
  return (
    <Section className="w-full bg-white py-16">
      <div className="flex flex-col md:flex-row w-full min-h-[70vh]">
        {/* Left Text Section with animation */}
        <div className="flex flex-col justify-center items-start md:w-1/2 w-full text-left p-6 sm:p-8 md:p-16 space-y-4 text-animation">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-2">
            About <span className="text-green-600">Us</span>
          </h2>
          <p className="text-md sm:text-lg md:text-xl text-gray-600">
            Our store offers a wide range of fresh products, organic options,
            and unbeatable prices. We pride ourselves on quality and customer
            service. Whether you need fresh produce or household essentials, we
            have everything for your needs.
          </p>
          <a
            href="/promotions"
            className="inline-block px-4 sm:px-6 py-1 sm:py-3 bg-white text-green-600 border hover:text-white border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Know more
          </a>
        </div>
        <div
          className="md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center floating-background"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </Section>
  );
}
