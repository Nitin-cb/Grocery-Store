import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { OurStores } from './Pages/OurStores';
import Promotion from './Pages/Promotion.jsx';
import GalleryPage from './Pages/Gallery.jsx';
import { ContactUs } from './Pages/ContactUs.jsx';


function App() {
  return (
    <div className="w-full">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/stores' element={<OurStores/>}/>
            <Route path='/promotions' element={<Promotion/>}/>
            <Route path='/gallery' element={<GalleryPage/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
