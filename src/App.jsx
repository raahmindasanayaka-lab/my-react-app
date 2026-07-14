import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Order from './pages/Order';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    document.title = cart.length > 0
    ? `(${cart.length}) The Collection`
      : 'The Collection';
  }, [cart]);

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
