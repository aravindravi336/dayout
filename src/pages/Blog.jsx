import { useState } from 'react';
import NavBar from './NavBar';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

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
    const selectedImages = Array.from(event.target.files);
    setImage(selectedImages);
  };

  const validateForm = () => {
    let isValid = true;
    setErrorMessage('');

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
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('feedback', feedback);
      formData.append('rating', rating);
      image.forEach((image) => formData.append('image', image));

      const response = await fetch('http://localhost:5000/blog/add', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowAlert(true);
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
      <div className="container mt-4"> {/* Added margin-top to create space from the navbar */}
        <div className="rounded-box">
          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          {showAlert && (
            <div className="alert alert-success mt-3" role="alert">
              Feedback submitted successfully!
            </div>
          )}
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
              <div className="form-group rating mb-3">
                <label htmlFor="rating">Rating:</label>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} style={{ marginRight: '5px' }}>
                    <FontAwesomeIcon
                      icon={faStar}
                      value={rating}
                      className={star <= rating ? 'fas text-warning fa-lg' : 'far text-muted fa-lg'}
                      onClick={() => handleRatingChange(star)}
                    />
                  </span>
                ))}
              </div>
              <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
