import React, { useState, useEffect } from 'react';
import { AboutMeIcon, Li, P } from '../menustyles';
import { Link } from 'react-router-dom';

const About = ({
  data,
  animationTimer,
  adjustImg,
  activeabout,
  activatemenu,
  openImgPortfolio,
  openWelcome,
  setAudioSound,
}) => {
  const [click, setClick] = useState(false);
  const openMenuHandler = (e) => {
    if (click || activeabout) {
      return;
    }
    setClick(true);
    // maenu active
    activatemenu(true, false, false);
    adjustImg();
    // make img bigest
    openImgPortfolio('about');
    setAudioSound('about');
  };

  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setClick(false);
      }, animationTimer);
    }
  }, [click]);
  return (
    <Link to='/about'>
      <Li
        openWelcome={openWelcome}
        about='true'
        activeabout={activeabout}
        aboutLeft
        click={click}
        onClick={openMenuHandler}
      >
        <AboutMeIcon />
        <P>{data}</P>
      </Li>
    </Link>
  );
};
// Multimedia button click 23More info [+]

// 00:00
// 00:00

// Button ClickMultimedia and UIMP3WAVadd to listZapSplatFollow
// Standard License
// Multimedia button click 24More info [+]

// 00:00
// 00:00

// Button ClickMultimedia and UI
export default About;
