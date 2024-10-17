import { LinkTabs } from '@/components/LinkTabs';
import { Video } from '@/components/Video';

const Home = () => {
  return (
    <main className='w-full h-full flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center w-max p-6 gap-4'>
        <Video />
        <LinkTabs />
      </div>
    </main>
  );
};

export default Home;
