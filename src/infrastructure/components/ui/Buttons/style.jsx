import { makeStyles } from "@material-ui/core";

export const useStylesButtons = makeStyles((theme) => ({
  btnPrimary: {
    background: theme.palette.primary.main,
    height: 40,
    color: "white",
    borderRadius: 0,
    textTransform: "initial",
    fontWeight: 700,
    borderRadius: 5,
    "&:hover": {
      background: theme.palette.primary.main,
    },
    "&:disabled": {
      background: `${theme.palette.primary.main} !important`,
    },
    margin: "10px 0px",
    fontSize: 16,
    width: ({ width }) => (width ? width : "100%"),
  },
  btnSecondary: {
    background: theme.palette.secondary.main,
    width: ({ width }) => (width ? width : "100%"),
    height: 40,
    color: "white",
    borderRadius: 5,
    textTransform: "initial",
    fontWeight: 700,
    "&:hover": {
      background: theme.palette.secondary.main,
    },
    "&:disabled": {
      background: theme.palette.secondary.main,
    },
    margin: "10px 0px",
    fontSize: 16,
  },
  circular: {
    color: "white",
    fontSize: 14,
  },
  btnTerciary: {
    background: "transparent",
    margin: "20px 0px",
    cursor: "pointer",
    textTransform: "initial",
    padding: 0,
    boxShadow: "none",
    "&:hover": {
      background: "transparent",
      boxShadow: "none",
    },
  },
  btntext: {
    fontWeight: 700,
    textDecoration: "underline",
  },
}));
