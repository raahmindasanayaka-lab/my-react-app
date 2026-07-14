import styles from './ProductCard.module.css';

function ProductCard({name, price, color, featured, onAddToCart }) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <img
        className={styles.image}
        src="/src/images/cotton.png"
        alt={name}
      />
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.color}>{color}</p>
      <p className={styles.price}>Rs.{price}</p>
      <button
        className={styles.button}
        onClick={() => {
          console.log("button clicked");
          onAddToCart({ name, price, color});
        }}>
        Order Now
      </button>
    </div>
  );
}

export default ProductCard;
