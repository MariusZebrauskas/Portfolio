import React from 'react';

const SmartBookVideo = () => {
  return (
    <div
      className='animate'
      style={{
        marginTop: '1.5rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <video
        width='80%'
        height='340'
        src='https://firebasestorage.googleapis.com/v0/b/smart-book-ce0de.appspot.com/o/video%2FPORFOLIO.mp4?alt=media&token=5e209f7f-a42e-4618-84cb-657adce7bd53'
        controls
      />
    </div>
  );
};

export default SmartBookVideo;
