import React, { useEffect, useState } from "react";
import axios from "axios";
import { AlbumCard } from "../Card/AlbumCard";
import "./album.css";
import { SearchAlbum } from "../Search/SearchAlbum";
import { useHistory } from "react-router-dom";
import { useQuery } from "../../useQuery";

export const Album = () => {
  // NOTE Filtering based on genres
  const [genre, setGenre] = useState("");

  // NOTE query
  const query = useQuery();
  const pageIndex = query.get("page");
  const actualGenre = query.get("genre");

  const [albums, setAlbums] = useState([]);

  // NOTE History
  const history = useHistory();

  // NOTE Pagination
  const [page, setPage] = useState(1);
  const [limit] = useState(6);

  // NOTE Page count
  const [pageCount, setPageCount] = useState(0);
  const arr = [];

  for (let i = 1; i <= pageCount; i++) {
    arr.push(i);
  }

  // NOTE Fetching Data
  const getData = async (a) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/albums?page=${pageIndex}&size=${limit}&genre=${a}`
      );
      console.log(data);
      if (data) {
        setAlbums([...data.album]);
        setPageCount(data.pageCount);
      }
    } catch (err) {
      console.log(`Can't get Albums`, err);
    }
  };

  useEffect(() => {
    getData(genre);
  }, [pageIndex, page]);

  // NOTE Filtering based on genres
  const handleGenre = (e) => {
    setGenre(e.target.value);
    history.push(`?page=${page}&size=${limit}&genre=${e.target.value}`);
    getData(e.target.value);
  };

  const handleGenreSelect = () => {
    console.log("genre is selected go on!");
  };

  return (
    <>
      {/* NOTE search albums */}
      <div>
        <SearchAlbum></SearchAlbum>
      </div>

      {/* NOTE Fitering */}

      <div>
        <select
          name="genre"
          id="genre"
          onChange={handleGenre}
          onSelect={handleGenreSelect}
        >
          <option value="">Genres</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Blues">Blues</option>
        </select>
      </div>

      {/* NOTE  */}
      <div className="main-div-album">
        {albums
          ? albums.map((ele) => <AlbumCard ele={ele} key={ele._id} />)
          : ""}
      </div>

      <div className="pagination-div">
        <button
          onClick={() => {
            if (page > 0) {
              setPage((prev) => prev - 1);
              history.push(`?page=${page}&size=${limit}&genre=${genre}`);
            }
          }}
          className="pagination-div-button"
        >
          Prev
        </button>
        {arr.map((e) => (
          <div
            onClick={() => {
              setPage(e);
              history.push(`?page=${e}&size=${limit}&genre=${genre}`);
            }}
            className="pagination-inner-div"
          >
            {e}
          </div>
        ))}
        <button
          onClick={() => {
            if (page < pageCount) {
              setPage((prev) => prev + 1);
              history.push(`?page=${page}&size=${limit}&genre=${genre}`);
            }
          }}
          className="pagination-div-button"
        >
          Next
        </button>
      </div>
    </>
  );
};
