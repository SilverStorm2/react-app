import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { getGlobalSearchStringValue, updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const globalSearchStringValue = useSelector(getGlobalSearchStringValue);
  const [searchValue, setSearchValue] = useState(globalSearchStringValue);

  useEffect(() => {
    setSearchValue(globalSearchStringValue);
  }, [globalSearchStringValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateSearchString(searchValue));
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
