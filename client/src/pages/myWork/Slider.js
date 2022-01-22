import React from 'react';
import { H4, SliderWrapper } from './stylesMyWork';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <SliderWrapper>
      <Link to='musicschoolnotes'>
        <H4>more info</H4>
      </Link>
    </SliderWrapper>
  );
};

export default Slider;
