import { makeStyles } from "@material-ui/core";

export const useStylesFormRegister = makeStyles((theme) => ({
  global: {
    display: "flex",
    alignItems: "center",
    padding: 50,
  },
  container: {
    boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
    padding: 50,
    maxWidth: 680,
    width: 680,
    margin: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    color: theme.palette.primary.main,
    textAlign: "center",
    textDecoration: "underline",
    cursor: "pointer",
  },
  grid: {
    padding: 10,
  },
  contentModal: {
    width: "300px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
