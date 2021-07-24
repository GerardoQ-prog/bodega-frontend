import { makeStyles } from "@material-ui/core";

export const useStylesCard = makeStyles((theme) => ({
  contentCard: {
    padding: 30,
    border: "3px solid #A34369",
    boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
    margin: "10px 0px",
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
  containerBtn: {
    display: "flex",
    justifyContent: "flex-end",
  },
  titleModal: {
    fontSize: 30,
    fontWeight: 700,
    margin: "10px 0px",
  },
  btn: {
    background: theme.palette.primary.main,
    color: "white",
  },
}));
