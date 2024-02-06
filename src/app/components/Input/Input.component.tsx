import {
  FunctionComponent,
  HTMLInputTypeAttribute,
  PropsWithChildren,
} from "react";

export type InputProps = {
  name: string;
  type: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  required?: boolean;
};

const Input: FunctionComponent<PropsWithChildren<InputProps>> = ({
  name,
  label,
  type,
  placeholder,
  required,
  children,
}) => (
  <div>
    <label
      htmlFor={name}
      className={label ? "block text-sm mb-2 dark:text-white" : undefined}
    >
      {label}
    </label>
    <div className='relative flex-1'>
      <input
        type={type}
        id={name}
        name={name}
        className={`${
          type === "email" ? "ps-11 " : ""
        }py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
        required={required}
        placeholder={placeholder}
        aria-describedby={`${name}-error`}
      />
      {children}
    </div>
  </div>
);

export default Input;
