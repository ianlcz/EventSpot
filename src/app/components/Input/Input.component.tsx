import { XCircleIcon } from "@heroicons/react/24/solid";
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
  state?: string[];
  required?: boolean;
};

const Input: FunctionComponent<PropsWithChildren<InputProps>> = ({
  name,
  label,
  type,
  placeholder,
  state,
  required,
  children,
}) => (
  <div>
    <label
      htmlFor={name}
      className={
        label ? "block text-sm font-normal mb-2 dark:text-white" : undefined
      }
    >
      {label}
    </label>
    <div className='relative flex-1'>
      <input
        type={type}
        id={name}
        name={name}
        className={`${
          type === "email" && children ? "ps-11 " : ""
        }py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
        placeholder={placeholder}
        required={required}
        aria-describedby={`${name}-error`}
      />
      {children}
    </div>
    <div id={`${name}-error`} aria-live='polite' aria-atomic='true'>
      {state?.map((error: string, idx) => (
        <div className='flex mt-2 text-xs text-red-500' key={error}>
          <XCircleIcon className='w-4 h-4 mr-1' />
          <p>{error}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Input;
