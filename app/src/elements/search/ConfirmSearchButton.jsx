import "../../styles/tailwind.output.css";
import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

class ConfirmSearchButton extends Component {
  render() {
    return (
      <Button
        startIcon={<Search />}
        variant="contained"
        color="primary"
        size="medium"
      >
        Search
      </Button>
    );
  }
}

export default ConfirmSearchButton;
