import styles from './Cart.module.css';

function Cart({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}> Cart ({items.length} items)</h2>

      {items.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              <span>{item.name} - {item.color}</span>
              <span>Rs.{item.price}</span>
            </li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <p className={styles.total}>Total: Rs.{total}</p>
      )}
    </div>
  );
}

export default Cart;
