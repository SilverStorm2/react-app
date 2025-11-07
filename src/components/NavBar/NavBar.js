import { NavLink } from 'react-router-dom';
import Container from '../Container/Container.js';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link;

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarInner}>
          <NavLink to="/" className={styles.logo} aria-label="Home" end>
            <span className={`fa fa-tasks ${styles.icon}`} aria-hidden="true" />
          </NavLink>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/" end className={getNavLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorite" className={getNavLinkClass}>
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getNavLinkClass}>
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
