import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Homepage from './components/homepage.jsx';
import Specs from './components/specs.jsx';
import { CartProvider } from "../contexts/CartContext.jsx";
import Cart from './components/carts.jsx';
import Fav from './components/fav.jsx';
import Profile from './components/profile.jsx';
import Offers from './components/offers.jsx'; 
import About from "./components/about.jsx";



function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/favourite" element={<Fav />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/collection" element={<Specs />} />
        <Route path="/frames" element={<Specs />} />
        <Route path="/shop" element={<Specs />} />
        <Route path="/products" element={<Specs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;