import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
//import Footer from './Components/Footer';
//import Home from './Pages/Home';
// import About from './Pages/About';
// import Notfound from './Pages/Not-found';

function App() {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Header />
        {/* <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
