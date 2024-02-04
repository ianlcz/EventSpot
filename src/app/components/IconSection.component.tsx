export type IconSectionProps = {
  title: string;
  detail: string;
  icon?: string | JSX.Element;
};

const IconSection = ({ title, detail, icon }: IconSectionProps) => (
  <div className='text-center'>
    {icon ? (
      <div className='flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700'>
        {icon}
      </div>
    ) : undefined}
    <div className={icon ? "mt-3" : ""}>
      <h3 className='text-md sm:text-xl font-semibold text-gray-800 dark:text-white'>
        {title}
      </h3>
      <p className='mt-1 text-sm md:text-lg text-gray-600 dark:text-gray-400'>
        {detail}
      </p>
    </div>
  </div>
);

export default IconSection;
