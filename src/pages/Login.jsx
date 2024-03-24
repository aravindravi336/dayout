import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

<NavBar/>
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log(formData);

  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // const handleSubmit = () => {
  //   axios
  //     .post("http://localhost:5000/api/User/signin", formData)
  //     .then((response) => {
  //       alert(response.data.message);
  //       // Redirect to home page after successful login
  //       navigate("/home");
  //     })
  //     .catch((error) => {
  //       // Handle error if login fails
  //       console.error("Login failed:", error);
  //     });
  // };
  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/User/signin", formData)
      .then((response) => {
        if (response.data.message === "Login successful") {
          alert(response.data.message);
          // Redirect to home page after successful login
          navigate("/home");
        } else {
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
     


<div class="wrapper fadeInDown">
  <div id="formContent">
   

 
    <div class="fadeIn first">
      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
    </div>



      <input type="text" id="username" class="fadeIn second" onChange={handleChange} value={formData.username} name="username" placeholder="login"/>
      <input type="text" id="password" class="fadeIn third" name="password"  onChange={handleChange} value={formData.password} placeholder="password"/>
      <input type="submit" class="fadeIn fourth" onClick={handleSubmit} value="Log In"/>
 

 
    <div id="formFooter">
      <Link class="underlineHover" to={"/register"}>Dont have an account?</Link>
    </div>

  </div>
</div>
     
    </div>
    
    
    
  );
};

export default Login;
