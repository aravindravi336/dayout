import React, { useState } from 'react';
import NavBar from './NavBar';

const Book_Package = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    no_of_people: '',
    date: '',
    package_type: ''
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.no_of_people.trim()) {
      errors.no_of_people = 'Number of people is required';
    } else if (isNaN(formData.no_of_people) || formData.no_of_people <= 0) {
      errors.no_of_people = 'Number of people must be a positive number';
    }

    if (!formData.date.trim()) {
      errors.date = 'Date is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('http://localhost:5000/Package/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 5000); // Hide alert after 5 seconds
          // Optionally, reset form fields
          setFormData({
            name: '',
            email: '',
            no_of_people: '',
            date: '',
            package_type: '' // Reset package type as well
          });
        } else {
          console.error('Failed to book package:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to book package:', error.message);
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          {showAlert && (
            <div className="alert alert-success d-flex align-items-center" role="alert">
              <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
                <use xlinkHref="#check-circle-fill" />
              </svg>
              <div>
                Your package has been booked successfully!
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text">Name</span>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Email</span>
              <input
                type="text"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Recipient's Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                name="package_type"
                value={formData.package_type}
                onChange={handleChange}
              >
                <option value="">Select Package Type</option>
                <option value="3 Day 2 Night">3 Day 2 Night</option>
                <option value="4 Day 3 Night">4 Day 3 Night</option>
                <option value="5 Day 4 Night">5 Day 4 Night</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">No of Person</span>
              <input
                type="number"
                className={`form-control ${errors.no_of_people ? 'is-invalid' : ''}`}
                aria-label="Amount (to the nearest dollar)"
                name="no_of_people"
                value={formData.no_of_people}
                onChange={handleChange}
              />
              {errors.no_of_people && <div className="invalid-feedback">{errors.no_of_people}</div>}
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Date</span>
              <input
                type="date"
                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                placeholder="Username"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <div className="invalid-feedback">{errors.date}</div>}
            </div>

            <button type="submit" className="btn btn-primary btn-lg">Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book_Package;
