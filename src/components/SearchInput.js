import React from 'react';

import css from "../styles/SearchInput.css"

const SearchInput = ({ city, setCity, onKeyPress }) => {
  return (  
    <input 
      type="text" 
      placeholder="Введите свой город"
      onChange={(e) => setCity(e.target.value)}
      value={city}
      onKeyPress={onKeyPress}
    />      
  );
};

export default SearchInput;