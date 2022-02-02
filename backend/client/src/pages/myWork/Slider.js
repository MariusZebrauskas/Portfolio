import React from 'react';
import { H4, SliderWrapper, P2, PWrapper } from './stylesMyWork';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
const Slider = ({ data1, data2, setAudioSound }) => {
  const onClick = () => {
    setAudioSound('musicschoolnotes');
    let tl = gsap.timeline();
    tl.to('.button', {
      duration: 0.2,
      scale: 1.01,
      ease: 'back.out(1.7)',
    }).to('.button', {
      duration: 0.2,
      scale: 1,
      ease: 'back.out(1.7)',
    });
  };
  return (
    <SliderWrapper>
      <PWrapper>
        <P2>{data1}</P2>
        <P2>{data2}</P2>
      </PWrapper>
      <Link onClick={onClick} to='musicschoolnotes'>
        <H4>more info</H4>
      </Link>
    </SliderWrapper>
  );
};

export default Slider;
