import PageTitle from '../PageTitle/PageTitle.js';
import styles from './Favorite.module.scss';

const Favorite = () => {
  return (
    <div className={styles.wrapper}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.text}>
        This is the Favorite page.
      </p>
    </div>
  );
};

export default Favorite;
