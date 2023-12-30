import { useState } from "react";

interface FormFieldProps {
  htmlFor: string;
  label: string;
  type?: string;
  value: any;
  error?: string;
  onChange?: (...args: any) => any;
}

export function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  error,
  onChange = () => {},
}: FormFieldProps) {
  const [disabled, setDisabled] = useState(true);

  const handleOnClick = () => {
    setDisabled(false);
  };

  return (
    <>
      <div>
        {disabled ? (
          <label
            htmlFor={htmlFor}
            className=" absolute text-black opacity-40 mt-4 ml-3 cursor-text"
          >
            {label}
          </label>
        ) : (
          ""
        )}
        <input
          onChange={onChange}
          onFocus={handleOnClick}
          type={type}
          id={htmlFor}
          name={htmlFor}
          className="w-full p-2 rounded-2xl my-2 bg-third text-black"
          value={value}
        />
        <div className="text-xs text-center text-red-500">{error}</div>
      </div>
    </>
  );
}
