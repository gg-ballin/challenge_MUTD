import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchChange, players}) => {
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
      
    </div>
  );
}

export default SearchBox;