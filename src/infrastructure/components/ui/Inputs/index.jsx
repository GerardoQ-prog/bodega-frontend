import {
  FormControl,
  FormHelperText,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStylesInputs } from "./Inputs.style";

export const InputText = ({
  name,
  value,
  type,
  label,
  handleChange,
  error,
  helperText,
  length = 100,
  disabled,
}) => {
  const classes = useStylesInputs();

  return (
    <div className={classes.containerInput}>
      <label className={classes.label}>{label}</label>
      <TextField
        fullWidth
        className={classes.input}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        error={error}
        helperText={helperText}
        inputProps={{ maxLength: length }}
        disabled={disabled}
      />
    </div>
  );
};

export const InputName = ({
  name,
  value,
  type,
  label,
  handleChange,
  error,
  helperText,
  length = 100,
  disabled,
}) => {
  const classes = useStylesInputs();

  const Letras = (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZñÑ\s]/g, "");
  };

  return (
    <div className={classes.containerInput}>
      <label className={classes.label}>{label}</label>
      <TextField
        fullWidth
        className={classes.input}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        error={error}
        helperText={helperText}
        onInput={(e) => Letras(e)}
        inputProps={{ maxLength: length }}
        disabled={disabled}
      />
    </div>
  );
};

export const InputNumber = ({
  name,
  value,
  type,
  label,
  handleChange,
  error,
  helperText,
  length = 100,
  disabled,
}) => {
  const classes = useStylesInputs();

  const onlyNumbers = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  return (
    <div className={classes.containerInput}>
      <label className={classes.label}>{label}</label>
      <TextField
        fullWidth
        className={classes.input}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        error={error}
        helperText={helperText}
        onInput={(e) => onlyNumbers(e)}
        inputProps={{ maxLength: length }}
        disabled={disabled}
      />
    </div>
  );
};

export const InputPrice = ({
  name,
  value,
  type,
  label,
  handleChange,
  error,
  helperText,
  length = 100,
  disabled,
}) => {
  const classes = useStylesInputs();

  const onlyNumbers = (e) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
  };

  return (
    <div className={classes.containerInput}>
      <label className={classes.label}>{label}</label>
      <TextField
        fullWidth
        className={classes.input}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        error={error}
        helperText={helperText}
        onInput={(e) => onlyNumbers(e)}
        inputProps={{ maxLength: length }}
        disabled={disabled}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography className={classes.label}>s/</Typography>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export const InputSelect = ({
  name,
  value,
  type,
  label,
  handleChange,
  error,
  helperText,
  data,
  disabled,
  id,
  textInit = "Seleccionar",
}) => {
  const classes = useStylesInputs();

  return (
    <div className={classes.containerInput}>
      <label className={classes.label}>{label}</label>
      <FormControl error={error} fullWidth className={classes.inputSelect}>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={value}
          onChange={handleChange}
          name={name}
          className={classes.inputSelect}
          disabled={disabled}
        >
          <MenuItem value={0}>{textInit}</MenuItem>
          {data &&
            data.map((item, index) => {
              return (
                <MenuItem value={id ? item.id : item.name} key={index}>
                  {item.name}
                </MenuItem>
              );
            })}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
};
