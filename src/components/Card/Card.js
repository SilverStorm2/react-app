import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={styles.card}>
      <span>{title}</span>
      <button
        type="button"
        aria-pressed={isFavorite}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        className={clsx('fa', 'fa-star-o', styles.favoriteButton, isFavorite && styles.isFavorite)}
        onClick={handleFavoriteClick}
      />
    </li>
  );
};

export default Card;
