import React, { useState, useEffect } from 'react';
import { AboutMeIcon, Li, P } from '../menustyles';

const About = ({
  data,
  animationTimer,
  adjustImg,
  activeabout,
  activatemenu,
  openImgPortfolio,
  openWelcome
}) => {
  const [click, setClick] = useState(false);
  const openMenuHandler = (e) => {
    if (click || activeabout) {
      return;
    }
    setClick(true);
    // male active
    activatemenu(true, false, false);
    adjustImg('small');
    // make img bigest 
    openImgPortfolio('deep');
  };

  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setClick(false);
      }, animationTimer);
    }
  }, [click]);
  return (
    <Li openWelcome={openWelcome} about="true" activeabout={activeabout} aboutLeft click={click} onClick={openMenuHandler}>
      <AboutMeIcon />
      <P>{data}</P>
    </Li>
  );
};

export default About;
