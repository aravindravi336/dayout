import React, { useState, useEffect } from 'react';
import Admin_Navbar from './Admin_NavBar';
import axios from 'axios';

const AdminHome = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchPackages = async () => {
        try {
            const response = await axios.get('http://localhost:5000/Student/viewbookings');
            setPackages(response.data);
        } catch (error) {
            console.error('Error fetching packages:', error);
        }
    };

   const markAsDone = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/Student/delete/${id}`);
        fetchPackages(); // Refresh packages after marking as done
    } catch (error) {
        console.error('Error marking package as done:', error);
    }
};


    const markAsNotCompleted = async (id) => {
        try {
            // Here you might handle marking as not completed, if necessary
            console.log("Mark as not completed function placeholder");
        } catch (error) {
            console.error('Error marking package as not completed:', error);
        }
    };

    return (
        <div>
            <Admin_Navbar />
            <div className="container">
                
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12-col-xxl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Institution</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Students</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Tickets</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packages.map((pkg, index) => (
                                    <tr key={pkg._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{pkg.institution}</td>
                                        <td>{pkg.inst_email}</td>
                                        <td>{pkg.no_of_students}</td>
                                        <td>{pkg.date}</td>
                                        <td>{pkg.tickets}</td>
                                        <td>{pkg.phone}</td>
                                        <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => markAsDone(pkg._id)}
                                            >
                                                Mark as Done
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => markAsNotCompleted(pkg._id)}
                                            >
                                                Mark as Not Completed
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
