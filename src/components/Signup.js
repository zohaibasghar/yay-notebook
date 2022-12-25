import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const credChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  const signupSubmit = async (e) => {
    e.preventDefault();
    if (cred.password !== cred.cpassword) {
      props.showAlert("Password does not match. ", "danger");
    } else {
      const response = await fetch(
        `http://localhost:5000/api/auth/createUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: cred.name,
            email: cred.email,
            password: cred.password,
          }),
        }
      );
      const json = await response.json();

      localStorage.setItem("authToken", json.authToken);
      props.showAlert(
        "Congratulations🎉! Account created successfully.",
        "success"
      );
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={signupSubmit}>
        <div className="form-group my-2">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter name"
            onChange={credChange}
            value={cred.name}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="semail">Email address: </label>
          <input
            type="email"
            className="form-control"
            id="semail"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={credChange}
            value={cred.email}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="new-password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={credChange}
            value={cred.password}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="cpassword">Confirm Password: </label>
          <input
            type="password"
            autoComplete="new-password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            onChange={credChange}
            value={cred.cpassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
