import Links from './links/Links';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>upnflow</div>
      <div>
        <Links />
      </div>
    </nav>
  );
}

export default Navbar;
