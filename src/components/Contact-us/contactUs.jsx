import img1 from '../../assets/images/Contact.png';

export default function ContactUs() {
  return (
    <section className="w-full bg-white py-16">
      <div className="flex flex-col md:flex-row w-full min-h-[70vh]">
        
        {/* Left Text Section */}
        <div className="flex flex-col justify-center items-start md:w-1/2 w-full text-left p-6 sm:p-8 md:p-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
          <span className='text-green-600'>Contact</span> Us 
          </h2>
          <p className="text-md sm:text-lg md:text-xl text-gray-600">
            Our store offers a wide range of fresh products, organic options, and unbeatable prices. We pride ourselves on quality and customer service. Whether you need fresh produce or household essentials, we have everything for your needs.
          </p>
          <a
              href="/promotions"
              className="inline-block px-2 sm:px-6 py-1 sm:py-2 bg-white text-green-600 border hover:text-white border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
            >
             Contact Us
            </a>
        </div>

        {/* Right Image Section */}
        <div 
          className="md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${img1})`, 
            backgroundSize: 'contain', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat' // Prevents background image from repeating
          }}
        >
        </div>
      </div>

      
    </section>
  );
}
