import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchValue });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Button type="submit" aria-label="Search">
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
