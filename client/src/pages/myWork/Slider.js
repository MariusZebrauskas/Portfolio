import React from 'react';
import { H4, SliderWrapper, P2, PWrapper } from './stylesMyWork';
import { Link } from 'react-router-dom';

const Slider = ({ data1, data2, setAudioSound }) => {
  return (
    <SliderWrapper>
      <PWrapper>
        <P2>{data1}</P2>
        <P2>{data2}</P2>
      </PWrapper>
      <Link onClick={() => setAudioSound('musicschoolnotes')} to='musicschoolnotes'>
        <H4>more info</H4>
      </Link>
    </SliderWrapper>
  );
};

export default Slider;
