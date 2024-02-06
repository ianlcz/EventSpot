import { FunctionComponent, PropsWithChildren } from "react";

export type HeadingSectionProps = {
  title: string;
};

const HeadingSection: FunctionComponent<
  PropsWithChildren<HeadingSectionProps>
> = ({ title, children }) => (
  <div className='mx-auto mb-8 p-4 lg:p-6 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl shadow-md'>
    <h1 className='block mb-4 text-xl text-center font-bold sm:text-3xl dark:text-white'>
      {title}
    </h1>

    {children}
  </div>
);

export default HeadingSection;
