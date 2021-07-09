import { makeStyles } from "@material-ui/core";

export const useStylesRow = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    margin: "30px 0px",
  },
  btn: {
    color: "#1C69D4",
    fontWeight: 700,
    textTransform: "initial",
  },
  header: {
    color: "#262626",
    fontWeight: 700,
  },
  cell: {
    padding: " 25px 15px",
  },
  btnActionEdit: {
    textTransform: "initial",
    fontWeight: 700,
  },
  quantity: {
    border: ({ quantity }) =>
      quantity > 0
        ? `3px solid ${theme.palette.secondary.main}`
        : `3px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
    color: ({ quantity }) =>
      quantity > 0
        ? `${theme.palette.secondary.main}`
        : `${theme.palette.primary.main}`,
    width: "100px",
    textAlign: "center",
    fontWeight: 700,
  },
  title: {
    fontSize: 30,
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
