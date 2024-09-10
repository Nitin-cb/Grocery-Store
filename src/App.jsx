import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Promotion from './Pages/Promotion.jsx';


function App() {
  return (
    <div className="w-full">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/promotions' element={<Promotion/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
