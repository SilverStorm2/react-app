import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle || !trimmedDescription) {
      return;
    }

    dispatch(addList({ title: trimmedTitle, description: trimmedDescription }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="list-title">
          Title
        </label>
        <TextInput
          id="list-title"
          placeholder="Enter list title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="list-description">
          Description
        </label>
        <TextInput
          id="list-description"
          placeholder="Enter list description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className={styles.button}>
        <Button type="submit" aria-label="Add list">
          <span className="fa fa-plus" aria-hidden="true" /> Add list
        </Button>
      </div>
    </form>
  );
};

export default ListForm;
