import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Error from './pages/Error'
import Location from './pages/location/index.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/about' element={<About />}/>
      <Route path='/logement/:idLogement' element = {<Location />} />
      <Route  path='*' element={<Error />}/>
    </Routes>
    <Footer />
</BrowserRouter>
);


