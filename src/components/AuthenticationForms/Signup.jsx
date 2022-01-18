import React, { useState, useContext } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

export const Signup = () => {
  const { user, handleUser } = useContext(UserContext);

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
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

    let name = input.name;
    let email = input.email;
    let password = input.password;
    console.log("name", name, "email", email);

    try {
      const { data } = await axios.post("http://localhost:3001/artist/signup", {
        name,
        email,
        password,
      });
      if (data) {
        handleUser(data.email);
      }
    } catch (err) {
      console.log("There is something wrong with axios", err);
    }
  };

  return (
    <div className="main-div">
      <h3>Register</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            value={input.name}
            onChange={handleChange}
            className="input-form-sign"
            type="text"
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <input
            name="email"
            value={input.email}
            onChange={handleChange}
            className="input-form-sign"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <input
            name="password"
            value={input.password}
            onChange={handleChange}
            className="input-form-sign"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="btn-div-input">
          <input
            className="input-form-sign btn-input-sign-form"
            type="submit"
            value="Register"
          />
        </div>
        <div className="input-form-sign-info">
          <p>
            Already Registered?{" "}
            <Link to="/login" style={{ color: "white" }}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
