import AboutPage from "../components/About/about";
import ContactUs from "../components/Contact-us/contactUs";
import HomePage from "../components/Home/home";
import Layout from "../components/Layout";
import StoreLocations from "../components/Our-stores/OurStores";
import Promotions from "../components/promotions/promotion";

export function Home(){
    return (
        <div className='w-full'>

            <HomePage/>
            <AboutPage/>
            <Promotions/>
            <StoreLocations/>
            <ContactUs/>
          
        </div>
      )
}