import { useSelector } from 'react-redux';
import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = (props) => {
  const { id, title, icon, action } = props;
  const cards = useSelector((state) =>
    state.cards.filter((card) => card.columnId === props.id)
  );

  return (
    <article className={styles.column} data-column-id={id}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${icon}`} aria-hidden="true" />
        {' '}
        {title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={id} action={action} />
    </article>
  );
};

export default Column;
