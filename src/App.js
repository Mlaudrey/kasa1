import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Notfound from './Pages/Not-found';

const app = (
  <BrowserRouter>
    <div className='main-container'>
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Not-found" element={<Notfound />} />
          </Routes>
        </Router>
      </main>
      <Footer />

    </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);