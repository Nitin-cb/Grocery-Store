import img1 from '../../assets/images/ad1.png';
import img2 from '../../assets/images/ad3.png';
import img3 from '../../assets/images/ad4.png';

export default function Promotions() {
  return (
    <div className="min-h-[140px] bg-gray-200 w-full place-items-center overflow-x-scroll rounded-md py-14 lg:overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {/* Left Column (two stacked images) */}
        <div className="md:col-span-1 space-y-6">
          <div>
            <img 
              className="object-cover object-center h-40 w-full md:h-[30vh] lg:h-[calc(30vh-1rem)]" 
              src={img2} 
              alt="First image" 
            />
          </div>
          <div>
            <img 
              className="object-cover object-center h-40 w-full md:h-[30vh] lg:h-[calc(30vh-1rem)]" 
              src={img3} 
              alt="Second image" 
            />
          </div>
        </div>
        
        {/* Right Column (one tall image) */}
        <div className="md:col-span-2">
          <img 
            className="object-cover object-center h-[60vh] md:h-[calc(60vh-1rem)] w-full" 
            src={img1} 
            alt="Third image" 
          />
        </div>
      </div>
    </div>
  );
};
