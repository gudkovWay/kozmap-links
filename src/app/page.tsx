import { LinkTabs } from '@/components/LinkTabs';
import { Video } from '@/components/Video';

import { BookmarkPopup } from './providers/BookmarkPopup';

const Home = () => {
  return (
    <>
      <main className='w-full h-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center w-max p-6 gap-4 bg-neutral-800/60 backdrop-blur-xl rounded-xl'>
          <Video />
          <LinkTabs />
        </div>
      </main>
      <BookmarkPopup />
    </>
  );
};

export default Home;
