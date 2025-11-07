import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container.js';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarInner}>
          <Link to="/" className={styles.logo} aria-label="Home">
            <span className={`fa fa-tasks ${styles.icon}`} aria-hidden="true" />
          </Link>
          <ul className={styles.menu}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                }
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
