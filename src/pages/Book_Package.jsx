import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const BookPackage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    no_of_people: '',
    date: '',
    package_type: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [packageTypes, setPackageTypes] = useState([]);
  const [selectedPackagePrice, setSelectedPackagePrice] = useState(0);

  useEffect(() => {
    fetchPackageTypes();
  }, []);

  const fetchPackageTypes = () => {
    fetch("http://localhost:5000/AdminPackage/viewall")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch package types");
        }
        return response.json();
      })
      .then(data => {
        setPackageTypes(data);
      })
      .catch(error => console.error('Error fetching package types:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (name === 'package_type') {
      const selectedPackage = packageTypes.find(packageType => packageType.days === value);
      setSelectedPackagePrice(selectedPackage ? selectedPackage.price : 0);
    }
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
    } else if (isNaN(formData.no_of_people) || formData.no_of_people >= 10) {
      errors.no_of_people = 'Number of people must be less than 10';
    }

    if (!formData.date.trim()) {
      errors.date = 'Date is required';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    console.log("check")

    const isValid = validate();
    handlePayment();
    // if (isValid) {
    //   setShowAlert("true");

    //   // Handle form submission, e.g., send data to server
    // } else {
    //   setShowAlert(false);
    // }
  };


  const handlePayment = () => {

    const amount = selectedPackagePrice * formData.no_of_people;
    if (amount === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "rzp_test_VRIW1uUcMO8RF3",
        key_secret: "sdSnY7pZmtWqOgMVcl0rxC8M",
        amount: amount * 100,
        currency: "INR",
        name: "Dayout Holidays",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          setShowAlert(true);

          axios.post("http://localhost:5000/Package/add", formData).then((response) => {
            if (response.data.status === "success") {
              alert("Package Booked Successfully");
            } else {
              alert("somthing went wrong")
            }
          })

        },
        prefill: {
          name: "Aravind",
          email: "aravindravi336@gmail.com",
          contact: "9495216830"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  console.log(formData)


  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <div className="rounded-box">
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

          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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

            {/* Other form inputs */}

            <div>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                name="package_type"
                value={formData.package_type}
                onChange={handleChange}
              >
                <option value="">Select Package Type</option>
                {packageTypes.map((packageType, index) => (
                  <option key={index} value={packageType.days}>{packageType.days}</option>
                ))}
              </select>
            </div>

            {/* Other form inputs */}

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

            <div className="input-group mb-3">
              <span className="input-group-text">Phone</span>
              <input
                type="tel"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                placeholder="Recipient's Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">email</span>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Recipient's email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>
              Proceed to Pay {selectedPackagePrice > 0 && `\₹${selectedPackagePrice}`}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookPackage;
