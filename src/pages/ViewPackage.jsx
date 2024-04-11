import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import NavBar from './NavBar';

const ViewPackage = () => {
    const [packages, setPackages] = useState([]);

    // Fetch packages from the server when the component mounts
    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/AdminPackage/view'); // Assuming your backend endpoint is '/api/packages'
                setPackages(response.data);
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        };

        fetchPackages();
    }, []);

    // Function to mark a package as done
    const markAsDone = async (id) => {
        try {
            // Perform action to mark package as done (remove from list)
            await axios.delete(`http://localhost:5000/AdminPackage/${id}`);
            // Update state to reflect changes
            setPackages(packages.filter(pkg => pkg._id !== id));
        } catch (error) {
            console.error('Error marking package as done:', error);
        }
    };

    return (
        <div>
            <NavBar/>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Package Name</th>
                            <th>Days</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {packages.map(pkg => (
                            <tr key={pkg._id}>
                                <td>{pkg.package_name}</td>
                                <td>{pkg.days}</td>
                                <td>${pkg.price}</td>
                                <td>{pkg.package_type}</td>
                                <td>
                                    <button className="btn btn-success p-2" onClick={() => markAsDone(pkg._id)}>Completed</button>
                                    <button className="btn btn-danger p-2">Not Complete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewPackage;
