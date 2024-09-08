import storeImage from '../../assets/images/World map.png';

export default function StoreLocations() {
  return (
    <section className="w-full bg-gray-100 overflow-hidden py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Left Column (Background Image) */}
        <div className="md:w-1/2 w-full h-full md:h-auto relative">
          <div 
            className="absolute inset-0 object-cover bg-center"
           
          />
          <img src={storeImage} alt='store'/>
        </div>

        {/* Right Column (Text Content) */}
        <div className="md:w-1/2 flex flex-col justify-center p-6 space-y-6 text-left">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 text-center">
            Our <span className='text-green-600'> Store</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center">
            We are conveniently located across multiple locations to serve you better. 
            Find our stores in the following cities:
            <a
                href="/promotions"
                className="inline-block px-2 sm:px-6 mt-4 py-2 bg-white text-green-600 border hover:text-white border-green-600 font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
                >
                Know more
                </a>
          </p>
         
        </div>
      </div>
    </section>
  );
}
