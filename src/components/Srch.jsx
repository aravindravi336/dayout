import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Fetch data or perform search action here
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search for destinations, activities, or packages"
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;