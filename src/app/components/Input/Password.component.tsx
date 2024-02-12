import { FormInput } from "@/app/lib/definitions";
import { FunctionComponent, HTMLInputTypeAttribute } from "react";
import Input from "./Input.component";

export type PasswordProps =
  | FormInput
  | { name: string; type?: HTMLInputTypeAttribute };

const Password: FunctionComponent<PasswordProps> = ({
  type = "password",
  ...props
}) => (
  <Input type={type} {...props}>
    <button
      type='button'
      data-hs-toggle-password={`{
"target": "#${props.name}"
}`}
      className='absolute top-4 end-3 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
    >
      <svg
        className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-neutral-600'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path
          className='hs-password-active:hidden'
          d='M9.88 9.88a3 3 0 1 0 4.24 4.24'
        />
        <path
          className='hs-password-active:hidden'
          d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'
        />
        <path
          className='hs-password-active:hidden'
          d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'
        />
        <line
          className='hs-password-active:hidden'
          x1='2'
          x2='22'
          y1='2'
          y2='22'
        />
        <path
          className='hidden hs-password-active:block'
          d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'
        />
        <circle
          className='hidden hs-password-active:block'
          cx='12'
          cy='12'
          r='3'
        />
      </svg>
    </button>
    {props.name === "password" ? (
      <div
        id='hs-strong-password'
        data-hs-strong-password={`{
"target": "#${props.name}",
"stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
"minLength": "8"
}`}
        className='flex mt-2 -mx-1'
      ></div>
    ) : undefined}
  </Input>
);

export default Password;
