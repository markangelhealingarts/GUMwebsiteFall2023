import React from 'react';

const Button = ({ label, onClick, additionalClasses }) => {
  return (
    <button onClick={onClick} className={"bg-blue-400 hover:bg-blue-500 text-white font-bold p-2 rounded-lg m-1 " + additionalClasses}>
      {label}
    </button>
  );
};

export default Button;
