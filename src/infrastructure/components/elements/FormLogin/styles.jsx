import { makeStyles } from "@material-ui/core";

export const useStylesFormLogin = makeStyles((theme) => ({
  global: {
    display: "flex",
    alignItems: "center",
    padding: 50,
  },
  container: {
    boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
    padding: 50,
    maxWidth: 680,
    width: 600,
    margin: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },
}));
