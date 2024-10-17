import Link from 'next/link';

import { kozmapLinks } from './tabs';

export const LinkTabs = () => {
  return (
    <div
      className='flex flex-col w-full h-full border-black rounded-md shadow-lg shadow-neutral-900 bg-neutral-800 pb-4'
    >
      <div className='flex flex-row h-full w-full gap-2 p-2 md:p-4'>
        <Link
          href='/'
          className='w-full text-center underline-offset-4 underline transition-all delay-100 decoration-neutral-50 font-bold}'
        >
          Kozmap Links
        </Link>
        <Link
          href='https://'
          target='_blank'
          className='w-full text-center underline-offset-4 underline transition-all delay-100 decoration-neutral-500 font-medium hover:decoration-neutral-200'
        >
          Oracle Links
        </Link>
      </div>

      <div className='w-full min-h-full flex flex-col gap-2 pt-4'>
        {kozmapLinks.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className='w-full bg-neutral-900 p-2 md:p-4 rounded-md hover:shadow-lg hover:shadow-neutral-900 transition-all delay-100'
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
