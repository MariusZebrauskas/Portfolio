import React, { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';

let audio2 =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/mp3%2F2.mp3?alt=media&token=9a240c93-2c2d-4493-93d9-973429dad8e7';
let audio1 =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/mp3%2F1.mp3?alt=media&token=e81900a1-82e0-4d4a-86ae-194eaf97537c';
const Audio = ({ audioSound, setAudioSound }) => {
  useEffect(() => {
    setTimeout(() => {
      setAudioSound(null);
    }, 300);
  }, [audioSound]);
  return (
    <>
      <ReactAudioPlayer
        src={
          audioSound === 'onImg'
            ? audio1
            : audioSound === 'onX'
            ? audio1
            : audioSound === 'about'
            ? audio2
            : audioSound === 'myWork'
            ? audio2
            : audioSound === 'contact'
            ? audio2
            : null
        }
        volume={0.5}
        autoPlay={true}
      />
    </>
  );
};

export default Audio;
