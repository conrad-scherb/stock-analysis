import "../../styles/tailwind.output.css";
import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class SearchTextField extends Component {
    render() {
        return (
            <div>
                <TextField fullWidth variant="outlined" id="standard-basic" label="MSFT, AAPL..." size="medium" />
            </div>
        );
    }
}

export default SearchTextField;
