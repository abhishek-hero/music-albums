import React, { useState } from "react";
import "./search.css";
import axios from "axios";

export const SearchAlbum = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `http://localhost:3001/albums?albumname=${searchQuery}`
      );

      if (data) console.log(data);
    } catch (err) {
      console.log(`can't get what you looking for`, err);
    }
  };

  return (
    <div className="search-main-div">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-form-sign marginLR"
          type="text"
          placeholder="Enter album name"
        />
        <button
          className="input-form-sign btn-input-sign-form marginLR"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};
