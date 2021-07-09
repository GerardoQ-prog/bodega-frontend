import { createMuiTheme } from "@material-ui/core/styles";
import { esES } from "@material-ui/core/locale";

const themeGlobal = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#A34369",
      },
      secondary: {
        main: "#567F53",
      },
      background: {
        paper: "#ffffff",
        default: "#ffffff",
        select: "#02AAB0",
      },
    },
    mixins: {
      toolbar: {
        minHeight: 60,
      },
    },
    shape: {
      borderRadius: 15,
    },
    typography: {
      fontFamily: "'Lato', 'Helvetica', 'Arial', sans-serif",
    },
  },
  esES
);

export default themeGlobal;
