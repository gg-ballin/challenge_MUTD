import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchChange, players, onAgeChange }) => {
  return  (
    
    <div className='pa2'>
      <label>
        <input
          className='pa3 ba b--black bg-white'
          type='search'
          placeholder='Search M. Utd players'
          onChange={searchChange}
        />
      </label>
      <label>
        <input
          className='pa3 ba b--black bg-white'
          type='search'
          placeholder='Search age of players'
          onChange={onAgeChange}
        />
      </label>
    </div>
  );
}

export default SearchBox;