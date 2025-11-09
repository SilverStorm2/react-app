import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ColumnForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addColumn } from '../../redux/store';

const ColumnForm = ({ listId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedIcon = icon.trim();

    if (!trimmedTitle || !trimmedIcon || !listId) {
      return;
    }

    dispatch(addColumn({ title: trimmedTitle, icon: trimmedIcon, listId }));
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="column-title">
          Title
        </label>
        <TextInput
          id="column-title"
          placeholder="Enter column title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="column-icon">
          Icon
        </label>
        <TextInput
          id="column-icon"
          placeholder="Enter column icon"
          value={icon}
          onChange={(event) => setIcon(event.target.value)}
        />
      </div>
      <div className={styles.button}>
        <Button type="submit" aria-label="Add column">
          <span className="fa fa-plus" aria-hidden="true" />
        </Button>
      </div>
    </form>
  );
};

export default ColumnForm;
