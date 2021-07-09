import React from "react";

export const useForm = (initialState) => {
  const [state, setstate] = React.useState(initialState);
  const onChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = () => {
    setstate(initialState);
  };

  const onCancelEdit = (state) => {
    setstate(state);
  };

  return {
    ...state,
    form: state,
    onChange,
    onReset,
    onCancelEdit,
  };
};
