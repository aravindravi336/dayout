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
    axios.post("http://localhost:5000/api/User/signup",formData).then((response)=>{
        alert(response.data.message)
    });
  };

  return (
   
    <div>
     


<div class="wrapper fadeInDown">
  <div id="formContent">
   

 
    <div class="fadeIn first">
      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
    </div>


    <input type="text" id="email " class="fadeIn second" onChange={handleChange} value={formData.email} name="email" placeholder="Email"/>
      <input type="text" id="username" class="fadeIn second" onChange={handleChange} value={formData.username} name="username" placeholder="Username"/>
      <input type="text" id="password" class="fadeIn third" name="password"  onChange={handleChange} value={formData.password} placeholder="password"/>
      <input type="submit" class="fadeIn fourth" onClick={handleSubmit} value="Sign Up"/>
 

 
    <div id="formFooter">
      <Link class="underlineHover" to={"/login"}>Already have an account?</Link>
    </div>

  </div>
</div>
     
    </div>

  );
};

export default Register;
