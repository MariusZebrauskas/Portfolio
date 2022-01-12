import React, { useState, useEffect } from 'react';
import { AboutMeIcon, Li, P } from '../menustyles';

const About = ({ data, animationTimer, adjustImg, activeabout, activatemenu }) => {
  const [click, setClick] = useState(false);
  const openMenuHandler = (e) => {
    if (click || activeabout) {
      return;
    }
    setClick(true);
    activatemenu(true, false, false);
    adjustImg('small');
  };

  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setClick(false);
      }, animationTimer);
    }
  }, [click]);
  return (
    <Li activeabout={activeabout} aboutLeft click={click} onClick={openMenuHandler}>
      <AboutMeIcon  />
      <P>{data}</P>
    </Li>
  );
};

export default About;
