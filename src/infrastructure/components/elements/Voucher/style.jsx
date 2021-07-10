import { makeStyles } from "@material-ui/core";

export const useStylesVoucher = makeStyles((theme) => ({
  contentCard: {
    padding: 30,
    border: "3px solid #A34369",
    boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
    margin: "10px 0px",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  containerBtn: {
    display: "flex",
    justifyContent: "flex-end",
  },
  //   table: {
  //     minWidth: 650,
  //     margin: "30px 0px",
  //   },
  header: {
    color: "#262626",
    fontWeight: 700,
  },
  contentTitle: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0px",
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
