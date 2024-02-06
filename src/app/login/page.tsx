import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connectez-vous",
};

const Page = () => {
  return (
    <h1 className='block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white'>
      Login page
    </h1>
  );
};

export default Page;
