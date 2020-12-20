import '../../styles/tailwind.output.css';
import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class ConfirmSearchButton extends Component {
  render() {
    return(
      <Button 
        variant="contained" 
        color="primary" 
        style={{maxWidth: '80px', maxHeight: '40px', minWidth: '80px', minHeight: '40px'}}>
          Confirm
      </Button>
    )
  }
}

export default ConfirmSearchButton