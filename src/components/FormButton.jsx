import React from "react";

const FormButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="h-12 w-full rounded-lg bg-blue-500 capitalize text-[var(--text-color)] hover:bg-blue-400"
    >
      {text}
    </button>
  );
};

export default FormButton;
