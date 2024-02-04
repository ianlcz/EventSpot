import { FunctionComponent, PropsWithChildren } from "react";

export type HeadingSectionProps = {
  title: string;
};

const HeadingSection: FunctionComponent<
  PropsWithChildren<HeadingSectionProps>
> = ({ children, title }) => (
  <div className='p-4 lg:p-6 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl shadow-md'>
    <h1 className='block text-xl text-center font-bold sm:text-3xl dark:text-white'>
      {title}
    </h1>
    <p className='mt-4 text-justify text-sm md:text-lg'>{children}</p>
  </div>
);

export default HeadingSection;
