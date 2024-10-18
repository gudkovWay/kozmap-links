import type { FC, ReactNode } from 'react';
import type { Metadata } from 'next';

import AnimationProvider from './providers/Animation';

import './globals.css';

export const metadata: Metadata = {
  title: 'Oracle Backup',
  description: 'Designed by @yamahadev',
  openGraph: {
    title: 'Oracle Backup | ALl time with you',
    description: 'Don’t lose Oracle! Add our site to your browser’s bookmarks now to stay connected, even in case of a complete shutdown. Designed and developed by @yamahadev',
    images: 'https://i.imgur.com/NFwselW.png'
  }
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
};
export default RootLayout;
