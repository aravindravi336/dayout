import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log(formData);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/User/signin", formData)
      .then((response) => {
        alert(response.data.message);
      });
  };
  return (
    <div>
      <h2>Login</h2>
      <lable className="form-label">Username</lable>
      <input
        type="text"
        className="form-control"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="" className="form-label">
        password
      </label>
      <input
        type="text"
        className="form-control"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="btn btn-success" onClick={handleSubmit}>
        click me for submit
      </button>
    </div>
  );
};

export default Login;
