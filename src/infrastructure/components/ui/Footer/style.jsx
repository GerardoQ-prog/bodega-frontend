import { makeStyles } from "@material-ui/core";

export const useStyleFooter = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    position: "absolute",
    bottom: 0,
  },
  containerFooter: {
    maxWidth: 1260,
    margin: "auto",
    padding: "20px 20px",
  },
  divTypography: {
    display: "flex",
    justifyContent: "space-around",
  },
  Grid: {
    fontSize: "11px",
    display: "flex",
    alignItems: "center",
  },
  linkTerm: {
    fontSize: "10px",
    // margin: "0px 10px",
    // padding: "10px",
    textDecoration: "none",
    color: "#4D4D4D",
    [theme.breakpoints.down(600)]: {
      margin: "30px 0px",
    },
  },
  textLogo: {
    // marginLeft: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "12px",
  },
  politics: {
    [theme.breakpoints.down(600)]: {
      margin: "5px 0px",
    },
  },
}));
