import logo from './logo.svg';
import './App.css';
import Home from './twopages/Home';
import Exercise from './components/Exercise';
import ProductExercise from './components/ProductExercise';
import { useRef, useState } from 'react';
import Design from './twopages/Design';
import DesignAss from './components/DesignAss';
import Product from './onepage/Product';
import { Route, Routes } from 'react-router-dom';
import Development from './components/Development';
import E_Design from './twopages/E_Design';
import Navbar from './components/Navbar';
import E_Development from './twopages/E_Development';
import DevelopmentTest from './components/DevelopmentTest';
import ScrollToTop from './components/ScrollToTop';

function App() {

  

  return (
    <div className="h-[80vh]">
  
      <Routes>
      
      <Route exact path="/" element={<Home />} />
        <Route path="e_design" element={<E_Design />} />
        <Route path="e_development" element={<E_Development />} />
        <Route path="development" element={<Development />} />
        <Route path="developmenttest" element={<DevelopmentTest />} />
        <Route path="designtest" element={<DesignAss />} />
        <Route path="producttest" element={<ProductExercise />} />
        <Route path="product" element={<Product />} />
        <Route path="design" element={<Design />} />
      </Routes>
      
       
       
      
    </div>
  );
}

export default App;
