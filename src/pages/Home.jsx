import {useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "60px 20px"}}>
      <h1 style={{ color: "#043c09", fontSize: "3rem" }}>The Collection</h1>
      <p style={{ color: "#555", fontSize: "1.2rem", margin: "20px 0" }}>
        Premium hoodies crafted for comfort and style.
      </p>
      <button
        onClick={() => navigate('/products')}
        style={{
          backgroundColor: "#0d9367",
          color: "white",
          border: "none",
          padding: "15px 40px",
          borderRadius: "25px",
          fontSize: "1.1rem",
          cursor: "pointer"
        }}>
        Shop Now
      </button>
    </div>
  );
}

export default Home;
