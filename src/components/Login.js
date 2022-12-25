import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const credChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();
    props.username(credential.email);
    if (json.passCompare) {
      localStorage.setItem("authToken", json.authToken);
      navigate('/')
      props.showAlert('Logged in successfully.','success')
    } else {
      props.showAlert('Invalid credentials.','warning')
    }
  };
  return (
    <div className="login-form">
      <h1>User Login</h1>
      <form onSubmit={loginSubmit}>
        <div className="form-group my-2">
          <label htmlFor="email">Email address: </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            autoComplete="username"
            value={credential.email}
            onChange={credChange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="current-password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={credential.password}
            onChange={credChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
