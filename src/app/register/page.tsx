import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { default as RegisterForm } from "../components/Form/Form.component";
import Input from "../components/Input/Input.component";
import Password from "../components/Input/Password.component";
import { createUser } from "../lib/actions";

const Page = () => (
  <RegisterForm
    head={{
      title: "Création d'un compte",
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
    action={createUser}
    submitTitle='Je crée mon compte'
  >
    <div className='flex flex-col md:flex-row justify-between gap-4'>
      <Input
        name='lastname'
        label='Votre nom de famille'
        type='text'
        required
      />

      <Input name='firstname' label='Votre prénom' type='text' required />
    </div>

    <Input
      name='phoneNumber'
      label='Votre numéro de téléphone'
      type='tel'
      placeholder='+33 0 00 00 00 00'
    />

    <Input name='bornAt' label='Votre date de naissance' type='date' />

    <Input
      name='email'
      label='Votre adresse email'
      type='email'
      placeholder='john.doe@example.com'
      required
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
      placeholder='Entrez votre mot de passe'
      required
    />
    <Password
      name='confirmPassword'
      placeholder='Confirmez votre mot de passe'
      required
    />
  </RegisterForm>
);

export default Page;
