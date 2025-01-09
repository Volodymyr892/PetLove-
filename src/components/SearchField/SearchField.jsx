import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import css from "./SearchField.module.css"; 

export default function SearchField({ onSearch }){
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
        <CgSearch />
      </button>
    </form>
  );
};

