import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InputRange = () => {
  const [lowBudget, setLowBudget] = useState(0);
  const [highBudget, setHighBudget] = useState(15000);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch packages within the default budget range on component mount
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      // Make a GET request to fetch packages within the selected budget range
      const response = await axios.get(`http://localhost:5000/AdminPackage/search/${lowBudget}/${highBudget}`);
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  const handleLowBudgetChange = (event) => {
    setLowBudget(parseFloat(event.target.value));
  };

  const handleHighBudgetChange = (event) => {
    setHighBudget(parseFloat(event.target.value));
  };

  return (
    <div>
      <div className="container">
        <div className="row g-3">
          <div className="col-12">
            <h1>Select Your Budget Range</h1>
            <div className="multi-range-slider">
              <label htmlFor="lowBudget" className="range-label">   ₹{lowBudget}</label>
              <input
                type="range"
                min="0"
                max="15000"
                step="1000"
                value={lowBudget}
                onChange={handleLowBudgetChange}
              />
              <input
                type="range"
                min="0"
                max="30000"
                step="1000"
                value={highBudget}
                onChange={handleHighBudgetChange}
              />
              <label htmlFor="highBudget" className="range-label">  ₹{highBudget}</label>
            </div>
            <button className="btn btn-success mt-3" onClick={fetchPackages}>
              Check
            </button>
          </div>
        </div>
        <div className="row g-3">
          {packages.map((packageItem) => (
            <div key={packageItem._id} className="col col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card shadow p-3 mb-5 bg-white rounded">
              <img src={packageItem.image} className="card-img-top" alt="..." />
                <h5 className="card-title">{packageItem.package_name}</h5>
                <div className="card-body">
                  <h5 className="card-title">{packageItem.price}</h5>
                  <a href="/studentbook" className="btn btn-outline-primary">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputRange;
