import { useEffect, useState } from 'react';
import Footer from '../Footer';
import Navbar from '../navbar/index'; 

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className={`${isSticky ? 'fixed top-0 left-0 right-0 shadow-md z-50' : 'absolute top-0 left-0 right-0'} transition-all duration-300`}>
        <Navbar /> 
      </div>
      <main className="pt-20">{children}</main> 
      <Footer />
    </div>
  );
}
