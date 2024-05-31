import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button type="submit" form="form1" value="Submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
