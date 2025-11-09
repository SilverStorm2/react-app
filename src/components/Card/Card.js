import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    dispatch(toggleCardFavorite(id));
  };

  const handleRemoveClick = () => {
    dispatch(removeCard(id));
  };

  return (
    <li className={styles.card}>
      <span>{title}</span>
      <div className={styles.actions}>
        <button
          type="button"
          aria-pressed={isFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className={clsx('fa', 'fa-star-o', styles.favoriteButton, isFavorite && styles.isFavorite)}
          onClick={handleFavoriteClick}
        />
        <button
          type="button"
          aria-label="Remove card"
          className={clsx('fa', 'fa-trash', styles.removeButton)}
          onClick={handleRemoveClick}
        />
      </div>
    </li>
  );
};

export default Card;
