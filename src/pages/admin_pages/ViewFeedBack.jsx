import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Admin_Navbar from './Admin_NavBar';

const ViewFeedback = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        // Fetch feedback data when component mounts
        const fetchFeedback = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blog/feedback'); // Replace '/api/feedback' with your actual endpoint
                setFeedback(response.data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };

        fetchFeedback();
    }, []);

    return (
        
     <div>
<Admin_Navbar/>
<div className="container">
            
            <div className="row g-3">
                {feedback.map((item) => (
                    <div key={item._id} className="col col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt="image" />
                            <div className="card-body">
                                <h5 className="card-title">Name: {item.name}</h5>
                                <p className="card-text">FeedBack: {item.feedback}</p>
                                <p className="card-text">Rating: {item.rating}</p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


     </div>
    );
};

export default ViewFeedback;
