import React, { useState, useEffect } from 'react';
import Menu from '../menu/Menu';
import { Close } from '../menu/menustyles';
import Welcome from '../welcome/Welcome';
import { Bottom, Img, Left } from './styles';
const Main = ({ setOpenWelcome, openWelcome, setAudioSound }) => {
  const [activeabout, togglerabout] = useState(false);
  const [activework, togglerwork] = useState(false);
  const [activecontact, togglercontatc] = useState(false);

  const [activeAllMenu, setActiveAllMenu] = useState(false);

  // remove all active menu items
  const activatemenu = (about, work, contact) => {
    togglerabout(about);
    togglerwork(work);
    togglercontatc(contact);
  };

  const adjustImg = () => {
    if (activeabout) {
      togglerabout(false);
    }
    if (activework) {
      togglerwork(false);
    }
    if (activecontact) {
      togglercontatc(false);
    }
  };
  // chek users window size
  const [mediaQuery, setMediaQuery] = useState(window.innerWidth);
  useEffect(() => {
    const trackWidth = () => {
      setMediaQuery(window.innerWidth);
    };
    window.addEventListener('resize', trackWidth);
    return () => {
      window.removeEventListener('resize', trackWidth);
    };
  }, [mediaQuery]);
  // controls img size + position + scale
  const openImgPortfolio = (x) => {
    if ((x === 'out' && openWelcome === 'in') || (x === 'out' && openWelcome === 'deep')) {
      // close button
      setAudioSound('onX');

      adjustImg('out');
      activatemenu(false, false, false);
      return setOpenWelcome('out');
    }
    if (x === 'in' && openWelcome === 'out' && mediaQuery >= 768) {
      // click on img on plancet +++
      setAudioSound('onImg');
      return setOpenWelcome('in');
    }
    if (x === 'deep' && openWelcome === 'in') {
      return setOpenWelcome('deep');
    }
    // menu navigation
    if (
      x === 'about' ||
      x === 'myWork' ||
      (x === 'contact' && openWelcome === 'in') ||
      openWelcome === 'out'
    ) {
      // click on about,myWork or Contact
      return setOpenWelcome('deep');
    }
  };

  // FIXME: work on remeliai shadows phone bugs,  Add music sounds
  useEffect(() => {
    console.log('openWelcomemain componenet says : ', openWelcome);
  });
  return (
    <Img openWelcome={openWelcome} onClick={() => openImgPortfolio('in')}>
      <Welcome openWelcome={openWelcome} />
      <Close openwelcome={openWelcome} onClick={() => openImgPortfolio('out')} />
      <Menu
        activework={activework}
        activeabout={activeabout}
        activecontact={activecontact}
        activeAllMenu={activeAllMenu}
        openWelcome={openWelcome}
        activatemenu={activatemenu}
        adjustImg={adjustImg}
        openImgPortfolio={openImgPortfolio}
        setAudioSound={setAudioSound}
      />
      <Bottom openWelcome={openWelcome} />
      <Left openWelcome={openWelcome} />
    </Img>
  );
};

export default Main;
