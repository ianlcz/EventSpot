"use client";

import { login } from "@/app/lib/actions";
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
      <Input
        name='email'
        label='Votre adresse email'
        type='email'
        autoComplete='email'
        placeholder='Saisissez votre adresse email'
        required
      />

      <Input
        name='password'
        label='Votre mot de passe'
        type='password'
        autoComplete='current-password'
        placeholder='Saisissez votre mot de passe'
        required
      />
    </Form>
  );
};

export default LoginForm;
