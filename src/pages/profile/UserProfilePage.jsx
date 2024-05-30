import React, { useState, useEffect } from 'react';
import './UserProfilePage.css';
import NavBar from '../NavBar';
import axios from 'axios';

const UserProfilePage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [bookedPackages, setBookedPackages] = useState([
    { id: 1, name: 'Package 1', dateBooked: '2024-04-12' },
    { id: 2, name: 'Package 2', dateBooked: '2024-04-11' }
  ]);

  useEffect(() => {
    // Fetch details of the logged-in user
    fetchLoggedInUser();
  }, []);

  const fetchLoggedInUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/current_user'); // Assuming this endpoint returns details of the currently logged-in user
      setLoggedInUser(response.data); // Assuming response.data is an object containing user details
    } catch (error) {
      console.error('Error fetching logged-in user:', error);
    }
  };

  const handleDeletePackage = (id) => {
    const updatedPackages = bookedPackages.filter(pkg => pkg.id !== id);
    setBookedPackages(updatedPackages);
  };

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h1 className="mb-4">User Profile</h1>
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">User Information</h2>
            {loggedInUser && ( // Check if logged-in user data is available before rendering
              <div>
                <p>Username: {loggedInUser.username}</p>
                <p>Email: {loggedInUser.email}</p>
                <button className="btn btn-primary">Edit</button>
              </div>
            )}
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Booked Packages</h2>
            {bookedPackages.map(pkg => (
              <div key={pkg.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1">{pkg.name}</p>
                  <p className="mb-0">Booked on: {pkg.dateBooked}</p>
                </div>
                <button className="btn btn-danger" onClick={() => handleDeletePackage(pkg.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfilePage;
