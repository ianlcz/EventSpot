import Link from "next/link";
import Form from "../components/users/create-form.component";

const Page = () => {
  return (
    <div className='max-w-xl md:max-w-lg mx-auto bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-transparent dark:border-gray-700'>
      <div className='p-4 sm:p-7'>
        <div className='text-center'>
          <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
            Créer un compte
          </h1>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            Vous avez déjà un compte ?{" "}
            <Link
              className='text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href='/login'
            >
              Connectez-vous
            </Link>
          </p>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default Page;
