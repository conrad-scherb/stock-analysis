import '../../styles/tailwind.output.css';
import SearchTextField from './SearchTextField.js'
import React, { Component } from 'react';
import ConfirmSearchButton from './ConfirmSearchButton';

class SearchBar extends Component {
  render() {
    return(     
      <div className="flex flex-row justify-center">
        <SearchTextField/>
        <ConfirmSearchButton/>
      </div>
    )
  }
}

export default SearchBar