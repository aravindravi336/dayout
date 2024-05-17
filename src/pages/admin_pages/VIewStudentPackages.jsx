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
            await axios.delete(`http://localhost:5000/Student/delete/${id}`).then((response)=>{
                console.log(response.data);
            });
            fetchPackages();
        } catch (error) {
            console.error('Error marking package as done:', error);
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
                                    <th scope="col">institution</th>
                                    <th scope="col">inst_email</th>
                                    <th scope="col">no_of_students</th>
                                    <th scope="col">date</th>
                                    <th scope="col">tickets</th>
                                    <th scope="col">ticketType</th>
                                    <th scope="col">phone</th>
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
                                        <td>{pkg.ticketType}</td>
                                        <td>{pkg.phone}</td>

                                        <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => markAsDone(pkg._id)}
                                            >
                                                Mark as Done
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
