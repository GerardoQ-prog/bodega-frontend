import { makeStyles } from "@material-ui/core";

export const useStylesCategories = makeStyles((theme) => ({
  contentTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0px",
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    margin: "10px 0px",
  },
  contentModal: {
    width: "300px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
