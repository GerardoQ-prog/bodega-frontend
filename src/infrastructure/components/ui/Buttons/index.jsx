import { Button, CircularProgress, Typography } from "@material-ui/core";
import React from "react";
import { useStylesButtons } from "./style";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export const ButtonPrimary = ({ text, onClick, loading, width }) => {
  const classes = useStylesButtons({ width });
  return (
    <Button
      className={classes.btnPrimary}
      color="primary"
      variant="contained"
      onClick={onClick}
      disabled={loading}
      // fullWidth
    >
      {loading ? (
        <CircularProgress className={classes.circular} size={20} />
      ) : (
        text
      )}
    </Button>
  );
};

export const ButtonSecondary = ({ text, onClick, width }) => {
  const classes = useStylesButtons({ width });
  return (
    <Button
      className={classes.btnSecondary}
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export const ButtonTerciary = ({ text, onClick }) => {
  const classes = useStylesButtons();
  return (
    <Button
      variant="contained"
      onClick={onClick}
      className={classes.btnTerciary}
      disableRipple={true}
    >
      <ChevronRightIcon color="primary" />{" "}
      <Typography className={classes.btntext}>{text}</Typography>
    </Button>
  );
};
