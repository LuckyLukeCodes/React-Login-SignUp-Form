import React from "react";

const FormButton = ({ text }) => {
  return (
    <button className="h-12 w-full rounded-lg bg-blue-500 capitalize text-[var(--text-color)]">
      {text}
    </button>
  );
};

export default FormButton;
