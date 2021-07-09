import { makeStyles } from "@material-ui/core";

export const useStylesLayout = makeStyles((theme) => ({
  containerGeneral: {
    position: "relative",
    minHeight: "100vh !important",
    width: "100%",
  },
  container: {
    position: "relative",
    maxWidth: 1440,
    margin: "auto",
    padding: "20px",
  },
}));
