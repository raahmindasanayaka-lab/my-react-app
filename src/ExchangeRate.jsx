import { useState, useEffect } from 'react';

function ExchangeRate() {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRate() {
      try {
        let response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        let data = await response.json();
        setRate(data.rates.LKR);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchRate();
  }, []);

  return (
    <p style={{
      color: "#0d9367",
      fontWeight: "bold",
      margin: "5px 0"
    }}>
      {loading ? "loading rate..." : `1 USD = Rs.${rate?.toFixed(2)} LKR`}
    </p>
  );
}

export default ExchangeRate;
