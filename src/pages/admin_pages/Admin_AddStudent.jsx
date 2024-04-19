import React, { useState } from 'react';
import Admin_Navbar from './Admin_NavBar';
import axios from 'axios'; // Make sure to install axios if you haven't already

const Admin_AddStudent = () => {
  const [formData, setFormData] = useState({
    package_name: '',
    days: '',
    price: '',
    package_type: '',
    image: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/AdminStudent/add', formData);
      setSuccessMessage('Student Package added successfully!');
      setErrorMessage('');
      setFormData({
        package_name: '',
        days: '',
        price: '',
        package_type: '',
        image: ''
      });
    } catch (error) {
      setErrorMessage('Failed to add student package. Please try again later.');
      setSuccessMessage('');
      console.error(error);
    }
  };

  return (
    <div>
      <Admin_Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h2>Add Student Package</h2>
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="packageName" className="form-label">Package Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="packageName"
                  name="package_name"
                  value={formData.package_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="days" className="form-label">Days</label>
                <input
                  type="number"
                  className="form-control"
                  id="days"
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="packageType" className="form-label">Package Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="packageType"
                  name="package_type"
                  value={formData.package_type}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-success">Add Package</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_AddStudent;
