"use client";

import { login } from "@/app/lib/actions";
import Link from "next/link";
import Input from "../Input/Input.component";
import Form from "./Form.component";

const LoginForm = () => {
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
      action={login}
      submitTitle='Je me connecte'
    >
      <Input
        name='email'
        label='Votre adresse email'
        type='email'
        placeholder='Entrez votre adresse email'
        required
      />

      <Input
        name='password'
        label='Votre mot de passe'
        type='password'
        placeholder='Saisissez votre mot de passe'
        required
      />
    </Form>
  );
};

export default LoginForm;
