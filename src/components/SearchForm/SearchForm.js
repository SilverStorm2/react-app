const SearchForm = ({ onSearch }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const q = e.target.elements.query?.value;
        if (onSearch) onSearch(q);
      }}
    >
      <input name="query" type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
