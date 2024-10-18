export const Video = () => {
  return (
    <video
      preload='auto'
      autoPlay
      loop
      className='rounded-3xl size-full max-h-max md:max-w-lg max-w-[100vw]'
    >
      <track default kind='captions' srcLang='en' src='SUBTITLE_PATH' />
      <source src='/oracle.mp4' type='video/mp4' />
    </video>
  );
};
