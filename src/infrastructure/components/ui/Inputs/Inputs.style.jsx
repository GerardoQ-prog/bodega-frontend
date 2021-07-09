import { makeStyles } from "@material-ui/core";

export const useStylesInputs = makeStyles((theme) => ({
  containerInput: {
    margin: "10px 0px",
  },
  input: {
    "& .MuiInputBase-input": {
      height: "26px",
      border: `1px solid ${theme.palette.primary.main}`,
      padding: "8px 10px",
      borderRadius: 5,
    },
    "& .MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiInput-underline:after": {
      display: "none",
    },
    "& .MuiInput-underline.Mui-error:after": {
      display: "none !important",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: theme.palette.primary.main,
      fontWeight: 700,
      fontSize: 14,
    },
  },
  inputSelect: {
    // "& .MuiInputBase-input": {
    //   height: "26px",
    //   border: "1px solid #E6E6E6",
    //   padding: "8px 10px",
    // },
    "& .MuiSelect-select.MuiSelect-select": {
      /* padding: 5px 24px; */
      height: "26px",
      border: `1px solid ${theme.palette.primary.main}`,
      padding: "8px 10px",
      borderRadius: 5,
    },
    "& .MuiInput-underline:before": {
      display: "none !important",
    },
    "& .MuiInput-underline:after": {
      display: "none !important",
    },
    "& .MuiInput-underline.Mui-error:after": {
      display: "none !important",
    },
  },
  label: {
    fontSize: 16,
    color: "#000000",
    fontWeight: 700,
    display: "block",
    marginBottom: 5,
  },
}));
