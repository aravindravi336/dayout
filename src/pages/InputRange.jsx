import React, { useState } from 'react';

const InputRange = () => {
  // State variable to track the budget range value
  const [budgetRange, setBudgetRange] = useState(0);

  // Event handler to update the budget range value
  const handleRangeChange = (event) => {
    setBudgetRange(parseFloat(event.target.value));
  };

  // Function to handle the search action
  const handleSearch = () => {
    // Here you can perform the search action based on the selected budgetRange
    console.log('Searching packages with budget:', budgetRange);
    // Example: You can make an API call to fetch packages with the selected budgetRange
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 co-xl-12 col-xxl-12">
            <h1>Select Your Budget Range</h1>
            {/* Label for the budget range slider */}
            <label htmlFor="customRange3" className="form-label">
              Select Your Budget Range: ${budgetRange}
            </label>
            {/* Slider input */}
            <input
              type="range"
              className="form-range"
              min="0"
              max="5000" // Assuming max budget is $5000, you can adjust accordingly
              step="100"
              id="customRange3"
              onChange={handleRangeChange} // Call handleRangeChange when slider value changes
            />
            {/* Button to trigger search action based on selected budget range */}
            <button className="btn btn-success " onClick={handleSearch}>
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputRange;
