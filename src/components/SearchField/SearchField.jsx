import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import css from "./SearchField.module.css"; 

export const SearchNews = ({ onSearch }) =>{
  const [query, setQuery] = useState("");


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        className={css.searchInput}
      />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className={css.clearBtn}
        >
          <IoCloseOutline />
        </button>
      )}
      <button
        type="submit"
        className={css.searchBtn}
        disabled={!query}
      >
        <CgSearch  width={18} height={18}/>
      </button>
    </form>
  );
};

export const SearchFind = ({ onSearch }) =>{
  const [query, setQuery] = useState("");


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchContainerFind}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        className={css.searchInputFind}
      />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className={css.clearBtnFind}
        >
          <IoCloseOutline />
        </button>
      )}
      <button
        type="submit"
        className={css.searchBtnFind}
        disabled={!query}
      >
        <CgSearch />
      </button>
    </form>
  );
};



