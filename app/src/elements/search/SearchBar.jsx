import "../../styles/tailwind.output.css";
import SearchTextField from "./SearchTextField";
import React, { Component } from "react";
import ConfirmSearchButton from "./ConfirmSearchButton";

class SearchBar extends Component {
  render() {
    return (
      <div className="flex flex-row justify-center py-8">
        <SearchTextField />
        <ConfirmSearchButton />
      </div>
    );
  }
}

export default SearchBar;
