import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    axios.post("http://localhost:5000/api/User/signup",formData).then((response)=>{
        alert(response.data.message)
    });
  };

  return (
    <div className="container">
      <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" name="username" value={formData.username} onChange={handleChange} />
            </div>
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>

        </div>
      </div>
    </div>
  );
};

export default Register;
