function Header() {
  let storeName = "The Collection";
  let tagline = "The Premium collection of your favourite hoodies";

  return (
    <header style={{ textAlign: "center", padding: "30px" }}>
      <h1 style={{ color: "#043c09"}}>{storeName}</h1>
      <p>{tagline}</p>
      <button style={{
        backgroundColor: "#0d9367",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "20px",
        cursor: "pointer"
      }}>
        Shop Now
      </button>
    </header>
  );
}

export default Header;
