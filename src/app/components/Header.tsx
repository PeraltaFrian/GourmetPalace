import styles from '../styles/Header.module.css';
import { FaUtensils } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.restaurantName}> <FaUtensils size={40}/> Gourmet Palace </h1>
        <p className={styles.tagline}>Exquisite Dining, Perfected</p>
      </div>
    </header>
  );
};

export default Header;
