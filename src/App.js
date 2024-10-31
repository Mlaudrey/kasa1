import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import FicheLogement from './Pages/Fiche-Logement/Fiche-Logement';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Fiche-Logement/:id" element={<FicheLogement />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </main>  
        <Footer /> 
      </div>
      
    </BrowserRouter>
  );
}

export default App;
