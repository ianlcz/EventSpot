import { FunctionComponent, PropsWithChildren } from "react";
import HeadingSection from "../HeadingSection.component";

export type FormProps = {
  head: { title: string; content?: JSX.Element };
  action: (formData: FormData) => Promise<void>;
  submitTitle: string;
};

const Form: FunctionComponent<PropsWithChildren<FormProps>> = ({
  head: { title, content },
  action,
  submitTitle,
  children,
}) => (
  <div className='max-w-xl md:max-w-lg mx-auto'>
    <HeadingSection title={title}>
      <div className='text-sm text-white font-light text-center'>{content}</div>
    </HeadingSection>

    <form
      action={action}
      className='grid gap-y-4 p-4 sm:p-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-transparent dark:border-gray-700'
    >
      {children}

      <button
        type='submit'
        className='w-3/5 mx-auto mt-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full bg-gradient-to-tr from-primary to-secondary text-white hover:bg-gradient-to-br disabled:opacity-50 disabled:pointer-events-none'
      >
        {submitTitle}
      </button>
    </form>
  </div>
);

export default Form;
