import '../../styles/tailwind.output.css';
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class SearchTextField extends Component {
  render() {
    return(
      <div className="p-4">
        <TextField 
          id="standard-basic" 
          label="button"
        />
      </div>
    )
  }
}

export default SearchTextField