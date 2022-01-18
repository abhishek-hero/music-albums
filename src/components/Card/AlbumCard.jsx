import React from "react";
import "./albumCard.css";

export const AlbumCard = ({ ele }) => {
  return (
    <div className="card-main-div">
      <h3>{ele.title}</h3>
      <div className="card-sub-div">
        <p>{ele.artist}</p>
        <p>Genre: {ele.genre}</p>
        <p>Release Year: {ele.releaseYear}</p>
      </div>
    </div>
  );
};
