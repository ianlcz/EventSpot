import { righteous } from "@/app/fonts";
import { Link as TLink } from "@/app/lib/types/link.type";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink.component";

const NavBar = () => {
  const navLinks: TLink[] = [
    { name: "Événements", href: "events" },
    { name: "À propos", href: "about" },
  ];

  return (
    <nav
      className='max-w-[60rem] w-full mx-auto mt-2 px-3 py-2 flex flex-wrap basis-full items-center justify-between md:rounded-2xl md:border md:border-gray-200 dark:bg-transparent dark:border-gray-700 md:shadow-md'
      aria-label='Global'
    >
      <Link
        className={`${righteous.className} inline-flex items-center gap-x-2 text-transparent text-xl md:text-2xl bg-clip-text bg-gradient-to-br from-blue-950 to-secondary uppercase`}
        href='/'
        aria-label='EventSpot'
      >
        <Image src='/favicon.ico' alt='EventSpot Logo' width={40} height={40} />
        EventSpot
      </Link>
      <div className='sm:order-3 flex items-center gap-x-2'>
        <button
          type='button'
          className='sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          data-hs-collapse='#navbar-alignment'
          aria-controls='navbar-alignment'
          aria-label='Toggle navigation'
        >
          <svg
            className='hs-collapse-open:hidden flex-shrink-0 w-4 h-4'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <line x1='3' x2='21' y1='6' y2='6' />
            <line x1='3' x2='21' y1='12' y2='12' />
            <line x1='3' x2='21' y1='18' y2='18' />
          </svg>
          <svg
            className='hs-collapse-open:block hidden flex-shrink-0 w-4 h-4'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M18 6 6 18' />
            <path d='m6 6 12 12' />
          </svg>
        </button>
        <Link
          className='py-2 px-3 inline-flex items-center text-sm font-medium rounded-lg bg-gradient-to-tr active:bg-gradient-to-br from-primary to-secondary text-white shadow-md'
          href='login'
        >
          Je me connecte
        </Link>
      </div>
      <div
        id='navbar-alignment'
        className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2'
      >
        <div className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5'>
          {navLinks.map((nl, idx) => (
            <NavLink link={nl} key={idx} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
