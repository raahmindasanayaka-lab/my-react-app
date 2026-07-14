import ProductCard from '../ProductCard';
import Cart from '../Cart';
import ExchangeRate from '../ExchangeRate';
import { useState } from 'react';

function Products() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  const products = [
    { name: "Cotton Hoodie",    price: 2000, color: "Black",  featured: true  },
    { name: "Brown Hoodie",     price: 2000, color: "Brown",  featured: false },
    { name: "Black Hoodie",     price: 2500, color: "Black",  featured: false },
    { name: "Oversized Hoodie", price: 3000, color: "Grey",   featured: false },
    { name: "XL Hoodie",        price: 3500, color: "Navy",   featured: false }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#043c09", padding: "30px" }}>
        Our Products
      </h1>
      <ExchangeRate />
      <Cart items={cart} />
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "30px"
      }}>
        {products.map((product, index) => (
          <ProductCard
              key={index}
              {...product}
              onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
