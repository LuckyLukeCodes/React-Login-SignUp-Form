import React from "react";

const FormRow = ({ name }) => {
  return (
    <div className="group relative w-full rounded-lg border-2 border-slate-300">
      <input
        type={name}
        id={name}
        aria-autocomplete="both"
        aria-haspopup="false"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        autoFocus=""
        required
        className="peer h-14 w-full rounded-lg  bg-gray-100 px-4 text-sm outline-none"
      />
      <label
        htmlFor={name}
        className="absolute left-0 top-0 flex h-full transform items-center pl-2
         text-sm capitalize transition-all group-focus-within:h-1/2
          group-focus-within:-translate-y-full group-focus-within:pl-0 group-focus-within:text-xs peer-valid:h-1/2 
          peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs"
      >
        {name}
      </label>
    </div>
  );
};

export default FormRow;
