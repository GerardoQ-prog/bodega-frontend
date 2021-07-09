import React from 'react';

export const useErrorForm = initialState => {
  const [state, setstate] = React.useState(initialState);

  const onChangeError = newState => {
    setstate(newState);
  };

  const onResetError = () => {
    setstate(initialState);
  };

  return {
    ...state,
    errorForm: state,
    onChangeError,
    onResetError,
  };
};
