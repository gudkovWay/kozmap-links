import Link from 'next/link';

import { kozmapLinks } from './tabs';

export const LinkTabs = () => {
  return (
    <div
      className='flex flex-col w-full h-full border-black rounded-md shadow-lg shadow-neutral-900 bg-neutral-800 pb-4 px-2 md:px-0'
    >
      <div className='flex flex-row h-full w-full gap-2 p-2 md:p-4'>
        <Link
          href='/'
          target='_blank'
          rel='noreferrer'
          className='w-full text-center underline-offset-4 underline transition-all delay-100 decoration-neutral-50 font-bold'
        >
          Kozmap Links
        </Link>
        <Link
          href='https://oracle.monster/'
          target='_blank'
          rel='noreferrer'
          className='w-full text-center underline-offset-4 underline transition-all delay-100 decoration-neutral-500 font-medium hover:decoration-neutral-200'
        >
          Oracle Links
        </Link>
      </div>

      <div className='w-full min-h-full flex flex-col gap-2 pt-4'>
        {kozmapLinks.map((link) => (
          <Link
            href={link.href || ''}
            target='_blank'
            rel='noreferrer'
            key={link.id}
            className={`w-full p-2 md:p-4 rounded-md hover:shadow-lg hover:shadow-neutral-900 transition-all delay-100 ${link.href ? 'cursor-pointer bg-neutral-900 hover:bg-neutral-700' : 'cursor-not-allowed bg-neutral-500'}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
