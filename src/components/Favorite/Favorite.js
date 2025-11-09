import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle.js';
import Card from '../Card/Card.js';
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);
  const hasFavorites = favoriteCards.length > 0;

  return (
    <div className={styles.wrapper}>
      <PageTitle>Favorite</PageTitle>
      {hasFavorites ? (
        <ul className={styles.cards}>
          {favoriteCards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              isFavorite={card.isFavorite}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.text}>No cards...</p>
      )}
    </div>
  );
};

export default Favorite;
