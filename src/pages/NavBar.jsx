import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Packages from './Packages'

const NavBar = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
    sessionStorage.clear()
  }
  return (
    <div>

      <nav class="navbar navbar-expand-lg data-bs-theme=dark  ">
        <div class="container-fluid">
        <Link class="navbar-brand" to="/home">DayOut</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li class="nav-item">
                <Link class="nav-link" to='/packages'>Packages</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/student'>Student Packages</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/student'>Book Stays</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="#">Stay</Link></li>
                  <li><Link class="dropdown-item" to="/chat">ChatBot</Link>
                  <li><Link class="dropdown-item" to="/blog">Blogs</Link>
                  </li></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class="dropdown-item" to="/" onClick={handleLogout}>Log Out</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>



    </div>
  )
}

export default NavBar