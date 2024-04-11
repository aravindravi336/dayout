import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    axios.post("http://localhost:5000/User/signup",formData).then((response)=>{
        alert(response.data.message)
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
                    t
                    id="form1Example13"
                    className="form-control form-control-lg"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Username"
                  />
                  
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
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
                  Sign Up
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <Link
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#3b5998" }}
                  to="/"
                  role="button"
                >
                  <i className="fab fa-facebook-f me-2"></i>Sign In
                </Link>
              
             
            </div>
          </div>
        </div>
      </section>
     
    </div>

  );
};

export default Register;
