import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

const CardForm = (props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return;
    }

    props.action?.({ title: trimmedTitle }, props.columnId);
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
