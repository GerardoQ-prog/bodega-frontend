import React from "react";

const useDialog = (initialState) => {
  const [state, setstate] = React.useState(initialState);

  const onChangeDialog = (e) => {
    setstate(!state);
  };

  return {
    dialog: state,
    onChangeDialog,
  };
};

export default useDialog;
