import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    axios
      .post("http://localhost:5000/User/signin", formData)
      .then((response) => {
        if (response.data.message === "Login successful") {
          alert(response.data.message);
          // Redirect to home page after successful login
          navigate("/home");
        } 
        else if(response.data.message === "Admin login successful")
        {
          alert(response.data.message)
          navigate("/adminadd");
        }
        
        
        else {
          // Handle other messages if needed
          alert(response.data.message);
        }
      })
      .catch((error) => {
        // Handle error if login fails
        console.error("Login failed:", error);
      });
  };

  return (
    <div>
     
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                  />
                  
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                   
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <Link
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#3b5998" }}
                  to="/register"
                  role="button"
                >
                  <i className="fab fa-facebook-f me-2"></i>Sign Up
                </Link>
              
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
