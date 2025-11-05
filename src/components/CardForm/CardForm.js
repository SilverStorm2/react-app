import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { addCard } from '../../redux/store';

const CardForm = ({ columnId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return;
    }

    dispatch(addCard({ columnId, title: trimmedTitle }));
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={(event) => setTitle(event.target.value)} />
      <Button type="submit">Add card</Button>
    </form>
  );
};

export default CardForm;
