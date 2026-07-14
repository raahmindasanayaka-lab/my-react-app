import { useState } from 'react';

function Order() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    item: 'Cotton Hoodie',
    size: 'S',
    customization: ''
  });

  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function validate() {
    let newError = {};
    if (!formData.name.trim()) newError.name = "Name is required";
    if (!formData.email.includes('@')) newError.email = "Email is required";
    if (!formData.address.trim()) newError.address = "Address is required";
    setError(newError);
    return Object.keys(newError).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2 style={{ color: "#043c09" }}>Order Placed!</h2>
        <p>Thanks {formData.name}, your {formData.item} ({formData.size}) is on its way!</p>
        <p style  ={{ color: "#555" }}>Confirmation sent to {formData.email}</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '', email: '', address: '',
              item: 'Cotton Hoodie', size: 'S', customization: ''
            });
          }}
          style={{
            marginTop: "20px",
            backgroundColor: "#0d9367",
            color: "white",
            border: "none",
            padding: "10px 30px",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
          Place Another Order
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "40px 20px"}}>
      <h1 style={{ color: "#043c09", marginBottom: "24px" }}>Place Your Order</h1>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold"}}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: error.name ? "1px solid red" : "1px solid #ddd",
              fontSize: "1rem"
            }}
          />
          {error.name && (
            <p style={{ color: "red", fontSize: "0.85rem", marginTop: "4px" }}>
              {error.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: error.email ? "1px solid red" : "1px solid #ddd",
              fontSize: "1rem"
            }}
          />
          {error.email && (
            <p style={{ color: "red", fontSize: "0.85rem", marginTop: "4px"}}>
              {error.email}
            </p>
          )}
        </div>

        {/* Address */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
            Delivery Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: error.address ? "1px solid red" : "1px solid #ddd",
              fontSize: "1rem",
              resize: "vertical"
            }}
          />
          {error.address && (
            <p style={{ color: "red", fontSize: "0.85rem", marginTop: "4px" }}>
              {error.address}
            </p>
          )}
        </div>

        {/* Items */}
        <div style={{ marginBottom: "16px"}}>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
            Item
          </label>
          <select
            name="item"
            value={formData.item}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "1rem",
            }}>
            <option>Cotton Hoodie</option>
            <option>Brown Hoodie</option>
            <option>Black Hoodie</option>
            <option>Oversized Hoodie</option>
            <option>XL Hoodie</option>
          </select>
        </div>

        {/* Size */}
        <div style={{ marginBottom: "16px"}}>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
            Size
          </label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "1rem",
            }}>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
            </select>
        </div>

        {/* Customization */}
        <div style={{ marginBottom: "16px"}}>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
            Customization (optional)
          </label>
          <textarea
            name="customization"
            value={formData.customization}
            onChange={handleChange}
            rows={3}
            placeholder="Any special requests..."
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              resize: "vertical"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#0d9367",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "8px",
            cursor: "pointer",
            width:"100%",
            fontSize: "1rem"
          }}>
          Place Order
        </button>
      </form>
    </div>
  );
}


export default Order;
