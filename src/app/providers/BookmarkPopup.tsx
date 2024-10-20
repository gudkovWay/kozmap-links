'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bookmark, X } from 'lucide-react';

export const BookmarkPopup = () => {
  const [isShown, setIsShown] = useState(true);
  const [isDisabledPointerEvents, setIsDisabledPointerEvenets] = useState(false);

  useEffect(() => {
    document.body.classList.add('noScroll');
  }, []);

  const closePopup = () => {
    setIsShown(false);
    setIsDisabledPointerEvenets(true);
    document.body.classList.remove('noScroll');
  };

  return (
    <AnimatePresence>
      {isShown && (
        <motion.div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/30 ${isDisabledPointerEvents && 'pointer-events-none'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='bg-gradient-to-br from-purple-200 to-orange-400 rounded-lg shadow-lg p-6 max-w-md w-full'
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
          >
            <button
              type='button'
              className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors'
              onClick={closePopup}
              aria-label='Close popup'
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Bookmark className='w-16 h-16 mx-auto mb-4 text-orange-500' />
              <h2 className='text-2xl font-bold text-center mb-4 text-orange-600'>
                Never Lose Us! <br /> Bookmark Now for Instant Access!
              </h2>
              <p className='text-center text-neutral-800 mb-6'>
                Don’t lose Kozmap!
                <br />
                Add our site to your browser’s bookmarks now to stay connected, even in case of a complete shutdown.
              </p>
              <div className='flex justify-center space-x-4'>
                <motion.button
                  className='px-4 py-2 bg-orange-700 text-white rounded-full font-medium hover:bg-orange-800 transition-colors'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closePopup}
                >
                  BOOKMARK KOZMAP RIGHT NOW!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
