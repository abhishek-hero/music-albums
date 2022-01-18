import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Login } from "../AuthenticationForms/Login";
import "../AuthenticationForms/signup.css";
import axios from "axios";

export const Artist = () => {
  const { user, handleUser } = useContext(UserContext);

  const [input, setInput] = useState({
    artist: "",
    title: "",
    releaseYear: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let artist = input.artist;
    let title = input.title;
    let releaseYear = input.releaseYear;
    let genre = input.genre;

    try {
      const { data } = await axios.post("http://localhost:3001/albums", {
        artist,
        title,
        releaseYear,
        genre,
      });
      if (data) {
        alert("Album added successfully!");
      }
    } catch (err) {
      console.log("Album not added");
    }
  };

  return user ? (
    <div className="main-div">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-form-sign"
          name="title"
          value={input.title}
          onChange={handleChange}
          type="text"
          placeholder="Enter album name"
        />
        <input
          className="input-form-sign"
          name="artist"
          value={input.artist}
          onChange={handleChange}
          type="text"
          placeholder="Enter artist"
        />
        <input
          className="input-form-sign"
          name="genre"
          value={input.genre}
          onChange={handleChange}
          type="text"
          placeholder="Enter genre"
        />
        <input
          className="input-form-sign"
          name="releaseYear"
          value={input.releaseYear}
          onChange={handleChange}
          type="number"
          placeholder="Enter release year"
        />

        <div className="btn-div-input">
          <input
            className="input-form-sign btn-input-sign-form"
            type="submit"
            value="Add Album"
          />
        </div>
      </form>
    </div>
  ) : (
    <Login />
  );
};
