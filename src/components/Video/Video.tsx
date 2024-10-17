'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

export const Video = () => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab');
  const [currentTab, setCurrentTab] = useState('');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (activeTab === 'kozmapLinks') {
      setCurrentTab('/kozmapLinks');
    } else {
      setCurrentTab('/oracleLinks');
    }
  }, [activeTab]);

  return (
    <AnimatePresence mode='popLayout'>
      <motion.video
        key={currentTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        ref={videoRef}
        preload='auto'
        autoPlay
        loop
        className='rounded-3xl size-full max-h-max md:max-w-sm max-w-[100vw]'
      >
        <track default kind='captions' srcLang='en' src='SUBTITLE_PATH' />
        {currentTab === '/kozmapLinks' ? (
          <source src='/kozm.mp4' type='video/mp4' />
        ) : (
          <source src='/oracle.mp4' type='video/mp4' />
        )}
      </motion.video>
    </AnimatePresence>
  );
};
