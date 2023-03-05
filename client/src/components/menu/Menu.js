import React from 'react';
import About from './MenuItem/About';
import Contact from './MenuItem/Contact';
import MyWork from './MenuItem/MyWork';
import { Wrapper } from './menustyles';

const Menu = ({
  adjustImg,
  activatemenu,
  activeabout,
  activework,
  activecontact,
  activeallmenu,
  openImgPortfolio,
  openWelcome,
  setAudioSound,
}) => {
  let animationTimer = 600;

  return (
    <Wrapper activeallmenu={activeallmenu}>
      <About
        activeabout={activeabout}
        activatemenu={activatemenu}
        adjustImg={adjustImg}
        animationTimer={animationTimer}
        openImgPortfolio={openImgPortfolio}
        openWelcome={openWelcome}
        setAudioSound={setAudioSound}
        data='About me'
      />
      <MyWork
        activatemenu={activatemenu}
        activework={activework}
        animationTimer={animationTimer}
        adjustImg={adjustImg}
        openWelcome={openWelcome}
        openImgPortfolio={openImgPortfolio}
        data='My Work'
        setAudioSound={setAudioSound}

      />
      <Contact
        activecontact={activecontact}
        adjustImg={adjustImg}
        animationTimer={animationTimer}
        activatemenu={activatemenu}
        openWelcome={openWelcome}
        openImgPortfolio={openImgPortfolio}
        data='Contact'
        setAudioSound={setAudioSound}

      />
    </Wrapper>
  );
};

export default Menu;
