'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { kozmapLinks, oracleLinks } from './tabs';

export const LinkTabs = () => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab');

  const currentTab = activeTab === 'kozmapLinks' || activeTab === null ? 'kozmapLinks' : 'oracleLinks';

  const tabs = { kozmapLinks, oracleLinks };

  return (
    <div
      className='flex flex-col w-full h-full border-black rounded-md shadow-lg shadow-neutral-900 bg-neutral-800 pb-4'
    >
      <div className='flex flex-row h-full w-full gap-2 p-2 md:p-4'>
        <Link
          href='/?tab=kozmapLinks'
          className={`w-full text-center underline-offset-4 underline transition-all delay-100 ${currentTab === 'kozmapLinks' ? 'decoration-neutral-50 font-bold' : 'decoration-neutral-800 font-medium hover:decoration-neutral-200'}`}
        >
          Kozmap Links
        </Link>
        <Link
          href='/?tab=oracleLinks'
          className={`w-full text-center underline-offset-4 underline transition-all delay-100 ${currentTab === 'oracleLinks' ? 'decoration-neutral-50 font-bold' : 'decoration-neutral-500 font-medium hover:decoration-neutral-200'}`}
        >
          Oracle Links
        </Link>
      </div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={currentTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='w-full min-h-full flex flex-col gap-2 pt-4'
        >
          {tabs[currentTab].map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className='w-full bg-neutral-900 p-2 md:p-4 rounded-md hover:shadow-lg hover:shadow-neutral-900 transition-all delay-100'
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
