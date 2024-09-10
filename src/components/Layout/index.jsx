import Footer from '../Footer';
import Navbar from '../navbar/index'; // Adjust the path if necessary

export default function Layout({ children }) {
  return (
    <div>
      <Navbar /> {/* Navbar will always be available for all pages */}
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
