import { createUser } from "@/app/lib/actions";

const Form = () => {
  return (
    <form action={createUser} className='mt-3 grid gap-y-4'>
      <div className='flex flex-row justify-between md:gap-x-4'>
        <div>
          <label
            htmlFor='lastname'
            className='block text-sm mb-2 dark:text-white'
          >
            Votre nom de famille
          </label>
          <div className='relative'>
            <input
              type='text'
              id='lastname'
              name='lastname'
              className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
              required
              aria-describedby='lastname-error'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='firstname'
            className='block text-sm mb-2 dark:text-white'
          >
            Votre prénom
          </label>
          <div className='relative'>
            <input
              type='text'
              id='firstname'
              name='firstname'
              className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
              required
              aria-describedby='firstname-error'
            />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor='phoneNumber'
          className='block text-sm mb-2 dark:text-white'
        >
          Votre numéro de téléphone
        </label>
        <div className='relative'>
          <input
            type='tel'
            id='tel'
            name='phoneNumber'
            className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            aria-describedby='phoneNumber-error'
          />
        </div>
      </div>

      <div>
        <label htmlFor='bornAt' className='block text-sm mb-2 dark:text-white'>
          Votre date de naissance
        </label>
        <div className='relative'>
          <input
            type='date'
            id='bornAt'
            name='bornAt'
            className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            aria-describedby='bornAt-error'
          />
        </div>
      </div>

      <div>
        <label htmlFor='email' className='block text-sm mb-2 dark:text-white'>
          Votre adresse email
        </label>
        <div className='relative'>
          <input
            type='email'
            id='email'
            name='email'
            className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            required
            aria-describedby='email-error'
          />
        </div>
      </div>

      <div>
        <label
          htmlFor='password'
          className='block text-sm mb-2 dark:text-white'
        >
          Votre mot de passe
        </label>
        <div className='flex-1'>
          <input
            type='password'
            id='hs-strong-password-with-minLength'
            name='password'
            required
            className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            placeholder='Entrez votre mot de passe'
          />
          <div
            id='hs-strong-password-minLength'
            data-hs-strong-password='{
        "target": "#hs-strong-password-with-minLength",
        "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1"
      }'
            className='flex mt-2 -mx-1'
          ></div>
        </div>
      </div>

      <div>
        <label
          htmlFor='confirmPassword'
          className='block text-sm mb-2 dark:text-white'
        >
          Confirmation de votre mot de passe
        </label>
        <div className='flex-1'>
          {" "}
          <input
            type='password'
            id='hs-strong-c-password-with-minLength'
            name='confirmPassword'
            required
            className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            placeholder='Confirmez votre mot de passe'
          />
          <div
            id='hs-strong-password-minLength'
            data-hs-strong-password='{
        "target": "#hs-strong-c-password-with-minLength",
        "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1"
      }'
            className='flex mt-2 -mx-1'
          ></div>
        </div>
      </div>

      <button
        type='submit'
        className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      >
        Je m&apos;inscris
      </button>
    </form>
  );
};

export default Form;
