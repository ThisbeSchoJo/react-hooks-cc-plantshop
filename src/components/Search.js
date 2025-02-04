import React from "react";

function Search({updateSearchText, searchText}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={updateSearchText}
          // (e) => console.log("Searching...")
        value={searchText}
      />
    </div>
  );
}

export default Search;