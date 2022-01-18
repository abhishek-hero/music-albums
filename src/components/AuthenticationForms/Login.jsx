import React, { useContext, useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
  // NOTE context
  const { user, handleUser } = useContext(UserContext);
  const history = useHistory();

  const [input, setInput] = useState({
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

    let email = input.email;
    let password = input.password;

    try {
      const { data } = await axios.post("http://localhost:3001/artist/login", {
        email,
        password,
      });
      if (data) {
        handleUser(data[0].email);
        console.log("just consoled");
        history.push("/artist");
      }
    } catch (err) {
      console.log("There is something wrong with axios", err);
    }
  };

  return (
    <div className="main-div">
      <h3>Login</h3>
      <form className="form" onSubmit={handleSubmit}>
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
            Not Registered?{" "}
            <Link to="/register" style={{ color: "white" }}>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
