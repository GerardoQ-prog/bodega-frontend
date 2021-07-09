import { makeStyles } from "@material-ui/core";

export const useStylesProducts = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    margin: "30px 0px",
  },
  header: {
    color: "#262626",
    fontWeight: 700,
  },
  cell: {
    padding: " 25px 15px",
  },
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
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
