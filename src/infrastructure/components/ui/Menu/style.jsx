import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStylesMenu = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    background: theme.palette.primary.main,
    height: "100%",
    color: "white",
  },
  containerName: {
    textAlign: "center",
  },
  btnLogout: {
    border: "1px solid white",
    fontSize: 14,
    fontWeight: 700,
    color: "white",
    marginBottom: 30,
    textTransform: "initial",
  },
}));
