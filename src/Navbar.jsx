import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/products" className={styles.link}>Products</Link>
      <Link to="/about" className={styles.link}>About</Link>
      <Link to="/order" className={styles.link}>Order</Link>
    </nav>
  );
}

export default Navbar;
