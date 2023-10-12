import React, { useState } from "react";
import './MovieSearch.css';

function MovieSearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="inputContainer">
      <input
        className="inputSearch"
        type="text"
        placeholder="Search Movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="searchButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default MovieSearchInput;
