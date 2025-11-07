import PageTitle from '../PageTitle/PageTitle.js';
import styles from './Favorite.module.scss';

const Favorite = () => {
  return (
    <div className={styles.wrapper}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.text}>
        Mark the cards you like the most and they will appear here in the future. For now enjoy this
        cozy placeholder.
      </p>
    </div>
  );
};

export default Favorite;
