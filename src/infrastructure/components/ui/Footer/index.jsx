import { Typography } from "@material-ui/core";
import React from "react";
import { useStyleFooter } from "./style";

const Footer = () => {
  const classes = useStyleFooter();

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div className={classes.container}>
        <div className={classes.containerFooter}>
          <Typography>© Sistema Bodega {new Date().getFullYear()}</Typography>
        </div>
      </div>
    </>
  );
};

export default Footer;
