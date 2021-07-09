import React from "react";
import { useStylesLayout } from "./style";

export const Layout = ({ children }) => {
  const classes = useStylesLayout();

  return <div className={classes.containerGeneral}>{children}</div>;
};

export const LayoutContainer = ({ children }) => {
  const classes = useStylesLayout();
  return <div className={classes.container}>{children}</div>;
};
