import React from 'react';
import { Link } from 'react-router-dom';

const Admin_Navbar = () => {
    return (
        <div>


<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Admin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/adminviewpackage">Bookings</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/adminviewstudent">Student Bookings</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/adminadd">Add Package</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/adminaddstudent">Add Student Package</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    );
}

export default Admin_Navbar;
