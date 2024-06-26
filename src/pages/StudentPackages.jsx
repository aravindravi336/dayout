import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import InputRange from './InputRange';
import Footer from '../components/footer/Footer';

const StudentPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch packages from backend when component mounts
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/AdminStudent/viewall');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Destinations for Students</h1>
      <br />

      <div className="container">
        <div className="col col 12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
          <div className="row gy-3">
            {packages.map((pkg) => (
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex" key={pkg._id}>
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <img src={pkg.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{pkg.package_name}</h5>
                    <p className="card-text">Explore {pkg.package_name}.</p>
                    <p className="card-text">{pkg.days}.</p>
                    <Link to="/studentbook" className="btn btn-outline-warning">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentPackages;
