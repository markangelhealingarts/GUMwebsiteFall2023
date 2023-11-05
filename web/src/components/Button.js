import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg m-1">
      {label}
    </button>
  );
};

export default Button;
