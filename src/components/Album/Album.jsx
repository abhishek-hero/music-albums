import React, { useEffect, useState } from "react";
import axios from "axios";
import { AlbumCard } from "../Card/AlbumCard";
import "./album.css";
import { Link } from "react-router-dom";
import { SearchAlbum } from "../Search/SearchAlbum";
import { useHistory } from "react-router-dom";
export const Album = () => {
  const [albums, setAlbums] = useState([]);

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

  console.log(page);
  // NOTE Fetching Data
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/albums?page=${page}&size=${limit}`
      );

      if (data) {
        setAlbums([...data.album]);
        setPageCount(data.pageCount);
      }
    } catch (err) {
      console.log(`Can't get Albums`, err);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <div>
        <SearchAlbum></SearchAlbum>
      </div>
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
              history.push(`?page=${page}&size=${limit}`);
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
              history.push(`?page=${e}&size=${limit}`);
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
              history.push(`?page=${page}&size=${limit}`);
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
