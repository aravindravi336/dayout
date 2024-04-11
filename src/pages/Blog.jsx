import { useState } from 'react';

import NavBar from './NavBar';
import '../App.css'; // Import your custom CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState([]);
  const [errorMessage, setErrorMessage] = useState(''); // Added for error handling

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleImageChange = (event) => {
    // Handle multiple file selection and preview (optional)
    const selectedImages = Array.from(event.target.files);
    setImage(selectedImages); // Update images state with selected files
  };

  const validateForm = () => {
    let isValid = true;
    setErrorMessage(''); // Clear any previous error message

    if (feedback.trim() === '') {
      isValid = false;
      setErrorMessage('Please provide feedback.');
    }

    if (rating === 0) {
      isValid = false;
      setErrorMessage('Please select a rating.');
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // Prevent submission if validation fails
    }

    // Implement form submission logic here
    // - Send feedback data (feedback, rating, images) to server

    try {
      const formData = new FormData();
      formData.append('name', name); // Add user's name
      formData.append('feedback', feedback);
      formData.append('image', image);
      formData.append('rating', rating);


      // Handle image uploads (consider using a library like Axios for server communication)
      image.forEach((image) => formData.append('image', image));

      const response = await fetch('http://localhost:5000/blog/add', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Feedback submitted successfully!');
        // Clear form after successful submission (optional)
        setName('');
        setFeedback('');
        setRating(0);
        setImage([]);
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="nameInput" placeholder="Your Name" onChange={handleNameChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="feedback" className="form-label">
                Feedback
              </label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={feedback} onChange={handleFeedbackChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Images (optional)
              </label>
              <input className="form-control" type="file" id="formFileMultiple" multiple onChange={handleImageChange} />
            </div>
            <div className="form-group rating">
              <label htmlFor="rating">Rating:</label>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>
                  <FontAwesomeIcon
                    icon={faStar}
                    value={rating}
                    className={star <= rating ? 'fas text-warning' : 'far text-muted'}
                    onClick={() => handleRatingChange(star)}
                  />
                </span>
              ))}
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

