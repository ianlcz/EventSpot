"use client";

import { signUp } from "@/app/lib/actions";
import { SignUpState } from "@/app/lib/states";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useFormState } from "react-dom";
import Input from "../Input/Input.component";
import Password from "../Input/Password.component";
import Form from "./Form.component";

const SignUpForm = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch]: [
    state: SignUpState,
    dispatch: (payload: FormData) => void,
  ] = useFormState(signUp, initialState);

  return (
    <Form
      head={{
        title: "Créez votre compte",
        content: (
          <>
            Vous avez déjà un compte ?{" "}
            <Link
              className='decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href='/login'
            >
              Connectez-vous
            </Link>
          </>
        ),
      }}
      action={dispatch}
      submitTitle='Je crée mon compte'
    >
      <div className='flex flex-col md:flex-row justify-between gap-4'>
        <Input
          name='lastname'
          label='Votre nom de famille'
          type='text'
          autoComplete='family-name'
          state={state?.errors?.lastname && state.errors.lastname}
        />

        <Input
          name='firstname'
          label='Votre prénom'
          type='text'
          autoComplete='given-name'
          state={state?.errors?.firstname && state.errors.firstname}
        />
      </div>

      <Input
        name='phoneNumber'
        label='Votre numéro de téléphone'
        type='tel'
        autoComplete='tel'
        placeholder='+33 0 00 00 00 00'
      />

      <Input
        name='bornAt'
        label='Votre date de naissance'
        type='date'
        autoComplete='bday'
      />

      <Input
        name='email'
        label='Votre adresse email'
        type='email'
        autoComplete='email'
        placeholder='john.doe@example.com'
        state={state?.errors?.email && state.errors.email}
      >
        <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4'>
          <EnvelopeIcon
            className='flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-600'
            strokeWidth={2}
          />
        </div>
      </Input>

      <Password
        name='password'
        label='Votre mot de passe'
        autoComplete='new-password'
        placeholder='Entrez votre mot de passe'
        state={state?.errors?.password && state.errors.password}
      />
      <Password
        name='confirmPassword'
        placeholder='Confirmez votre mot de passe'
        state={state?.errors?.confirmPassword && state.errors.confirmPassword}
      />
    </Form>
  );
};

export default SignUpForm;
