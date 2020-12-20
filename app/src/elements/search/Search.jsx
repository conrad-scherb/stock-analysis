import { CardContent, Typography } from "@material-ui/core";
import React from "react";
import CardCentre from "./CardCentre";
import ConfirmSearchButton from "./ConfirmSearchButton";
import SearchField from "./SearchTextField";

const Search = () => {
  return (
    <div>
      <CardCentre>
        <CardContent className="mx-8">
          <div className="text-center p-4">
            <Typography variant="h5" className="p-2">
              Search for a Stock
            </Typography>
          </div>
          <div className="py-4">
            <SearchField />
          </div>
          <div className="flex flex-row-reverse justify-between pt-4 pb-2">
            <ConfirmSearchButton />
          </div>
        </CardContent>
      </CardCentre>
    </div>
  );
};

export default Search;
