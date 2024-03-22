import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'

const Home = () => {
  return (
    <div>

      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3 col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <label htmlFor="" className="form-label">User Name</label>
              <input type="text" className="form-control" />


            </div>
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <label htmlFor="" className="form-label">Password</label>
              <input type="password" className="form-control" />


            </div>
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <button className="btn btn-success">Login</button>

            </div>
            <br />
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <Link to="#">Forgot Password?</Link>
            </div>
            <br />
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <Link to="/register">Sign Up</Link>
            </div>


          </div>


        </div>
      </div>
    </div>
  )
}

export default Home