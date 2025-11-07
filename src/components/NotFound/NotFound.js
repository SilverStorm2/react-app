import PageTitle from '../PageTitle/PageTitle.js';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <PageTitle>404</PageTitle>
      <p className={styles.text}>Ups! Wyglada na to, ze ta strona nie istnieje.</p>
    </div>
  );
};

export default NotFound;
