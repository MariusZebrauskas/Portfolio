import React, { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
let audio4 =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/mp3%2F4.mp3?alt=media&token=251d4aca-9061-4d4c-9768-34da0b6de240';
let audio5 =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/mp3%2F5.mp3?alt=media&token=365769d4-92d7-40db-9401-8f994847b790';
let audio2 =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/mp3%2F2.mp3?alt=media&token=9a240c93-2c2d-4493-93d9-973429dad8e7';

const Audio = ({ audioSound, setAudioSound }) => {
  useEffect(() => {
    setTimeout(() => {
      setAudioSound(null);
    }, 300);
  }, [audioSound,setAudioSound]);
  return (
    <>
      <ReactAudioPlayer
        src={
          audioSound === 'onImg'
            ? audio4
            : audioSound === 'onX'
            ? audio5
            : audioSound === 'about'
            ? audio2
            : audioSound === 'myWork'
            ? audio2
            : audioSound === 'contact'
            ? audio2
            : audioSound === 'musicschoolnotes'
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
