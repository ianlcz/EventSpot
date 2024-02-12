"use client";

import { login } from "@/app/lib/actions";
import { FormInput } from "@/app/lib/definitions";
import { LoginState } from "@/app/lib/states";
import Link from "next/link";
import { useFormState } from "react-dom";
import Input from "../Input/Input.component";
import Form from "./Form.component";

const LoginForm = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch]: [
    state: LoginState,
    dispatch: (payload: FormData) => void,
  ] = useFormState(login, initialState);

  const inputs: FormInput[] = [
    {
      name: "email",
      label: "Votre adresse email",
      type: "email",
      autoComplete: "email",
      placeholder: "Saisissez votre adresse email",
    },
    {
      name: "password",
      label: "Votre mot de passe",
      type: "password",
      autoComplete: "current-password",
      placeholder: "Saisissez votre mot de passe",
    },
  ];

  return (
    <Form
      head={{
        title: "Connectez-vous",
        content: (
          <>
            Vous n&apos;avez pas de compte ?{" "}
            <Link
              className='decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href='/signup'
            >
              Créez votre compte
            </Link>
          </>
        ),
      }}
      action={dispatch}
      submitTitle='Je me connecte'
    >
      {inputs.map(({ name, label, type, autoComplete, placeholder }, idx) => (
        <Input
          key={idx}
          name={name}
          label={label}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          required={true}
        />
      ))}
    </Form>
  );
};

export default LoginForm;
