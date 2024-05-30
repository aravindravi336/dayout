import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

const Book_Student_Package = () => {
    const [formData, setFormData] = useState({
        institution: '',
        inst_email: '',
        no_of_students: '',
        date: '',
        tickets: '',
        ticketType: '', // New state for ticket type
        phone: ''
    });

    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [alreadyBooked, setAlreadyBooked] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const errors = {};

        // Validation logic here...


        if (!formData.institution.trim()) {
            errors.institution = 'Institution name is required';
        }

        if (!formData.inst_email.trim()) {
            errors.inst_email = 'Institution email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.inst_email)) {
            errors.inst_email = 'Institution email is invalid';
        }

        if (!formData.no_of_students.trim()) {
            errors.no_of_students = 'Number of students is required';
        } else if (isNaN(formData.no_of_students) || formData.no_of_students <= 0) {
            errors.no_of_students = 'Number of students must be a positive number';
        }

        if (!formData.date.trim()) {
            errors.date = 'Date is required';
        }

        if (!formData.tickets.trim()) {
            errors.tickets = 'Tickets information is required';
        }

        if (formData.tickets === 'yes' && !formData.ticketType.trim()) {
            errors.ticketType = 'Ticket type is required';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (isNaN(formData.phone) || formData.phone.toString().length !== 10) {
            errors.phone = 'Phone number is invalid';
        }



        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                // Check if the package is already booked
                const checkResponse = await axios.post('http://localhost:5000/Student/checkbooking', {
                    institution: formData.institution,
                    date: formData.date
                });
                if (checkResponse.status === 200) {
                    // If the package is available, proceed with booking
                    const response = await axios.post('http://localhost:5000/Student/addstudentpackage', formData);
                    if (response.status === 201) {
                        setShowAlert(true); // Show success alert
                        setTimeout(() => setShowAlert(false), 5000); // Hide alert after 5 seconds
                        setFormData({
                            institution: '',
                            inst_email: '',
                            no_of_students: '',
                            date: '',
                            tickets: '',
                            ticketType: '', // Reset ticket type
                            phone: ''
                        });
                    } else {
                        console.error('Failed to book student package:', response.statusText);
                    }
                } else {
                    // Show alert if the package is already booked
                    setAlreadyBooked(true);
                }
            } catch (error) {
                console.error('Failed to book student package:', error.message);
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
                            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill" /></svg>
                            <div>
                                Your student package has been booked successfully!
                            </div>
                        </div>
                    )}
                    {alreadyBooked && (
                        <div className="alert alert-danger" role="alert">
                            This package is already booked.
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Institution</span>
                            <input
                                type="text"
                                className={`form-control ${errors.institution ? 'is-invalid' : ''}`}
                                placeholder="Institution"
                                name="institution"
                                value={formData.institution}
                                onChange={handleChange}
                            />
                            {errors.institution && <div className="invalid-feedback">{errors.institution}</div>}
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Institution Email</span>
                            <input
                                type="text"
                                className={`form-control ${errors.inst_email ? 'is-invalid' : ''}`}
                                placeholder="Institution's Email"
                                name="inst_email"
                                value={formData.inst_email}
                                onChange={handleChange}
                            />
                            {errors.inst_email && <div className="invalid-feedback">{errors.inst_email}</div>}
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">No of Students</span>
                            <input
                                type="number"
                                className={`form-control ${errors.no_of_students ? 'is-invalid' : ''}`}
                                aria-label="Amount (to the nearest dollar)"
                                name="no_of_students"
                                value={formData.no_of_students}
                                onChange={handleChange}
                            />
                            {errors.no_of_students && <div className="invalid-feedback">{errors.no_of_students}</div>}
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Date</span>
                            <input
                                type="date"
                                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                                placeholder="Date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                            {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Include Tickets</span>
                            <select
                                className="form-select"
                                name="tickets"
                                value={formData.tickets}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        {/* Conditional rendering of ticket type dropdown */}
                        {formData.tickets === 'yes' && (
                            <div className="input-group mb-3">
                                <span className="input-group-text">Ticket Type</span>
                                <select
                                    className={`form-select ${errors.ticketType ? 'is-invalid' : ''}`}
                                    name="ticketType"
                                    value={formData.ticketType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select</option>
                                    <option value="train">Train</option>
                                    <option value="flight">Flight</option>
                                    <option value="bus">Bus</option>
                                </select>
                                {errors.ticketType && <div className="invalid-feedback">{errors.ticketType}</div>}
                            </div>
                        )}

                        <div className="input-group mb-3">
                            <span className="input-group-text">Phone</span>
                            <input
                                type="number"
                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                placeholder="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">Book</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Book_Student_Package;
