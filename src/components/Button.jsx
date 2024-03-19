import React from "react";

const Button = ({ label, iconURL,backgroundColor, borderColor,fullWidth }) => {
  return (
    <button
    className={`flex justify-center items-center gap-2 
    px-7 py-4 border font-mono text-lg leading-none
    ${backgroundColor ? `${backgroundColor} ${borderColor}`:' bg-coral-red  text-white  border-coral-red '}
    rounded-full shadow-lg shadow-gray-500/50 ${fullWidth && 'w-full'}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
