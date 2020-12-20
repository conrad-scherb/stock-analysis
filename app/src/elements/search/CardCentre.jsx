import { Card, makeStyles } from "@material-ui/core";
import React from "react";
import { Centre } from "./Centre";

const useStyles = makeStyles({
  root: {
    minWidth: 450,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CardCentre = ({ children }) => {
  const classes = useStyles();
  return (
    <Centre>
      <Card className={classes.root} variant="elevation">
        {children}
      </Card>
    </Centre>
  );
};

export default CardCentre;
