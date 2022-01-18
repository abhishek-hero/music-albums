import React, { useEffect, useState } from "react";
import "./search.css";
import axios from "axios";

export const SearchAlbum = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const [results, setResults] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/albums/search`);
      if (data) setAlbums([...data]);
    } catch (err) {
      console.log(`can't get what you looking for`, err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);

    albums
      .filter((val) => {
        if (searchQuery == "") {
          return "";
        } else if (
          val.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return val;
        }
      })
      .map((ele) => {
        setResults(ele);
      });
  };

  return (
    <>
      <div className="search-main-div">
        <input
          onChange={handleChange}
          className="input-form-sign marginLR"
          type="text"
          placeholder="Search album ..."
        />

        {searchQuery ? (
          <div className="searchResult-div">
            <p>{results.title}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
