import React, { useState, useEffect, useRef } from 'react';
import Menu from '../menu/Menu';
import { Close } from '../menu/menustyles';
import Welcome from '../welcome/Welcome';
import { Bottom, Img, Left } from './styles';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Main = ({
  setOpenWelcome,
  openWelcome,
  setAudioSound,
  togglerabout,
  togglerwork,
  togglercontatc,
  activeabout,
  activework,
  activecontact,
  activatemenu
}) => {
  const imgRef = useRef();
  const [activeAllMenu, setActiveAllMenu] = useState(false);



  // remove all active menu items
  // const activatemenu = (about, work, contact) => {
  //   togglerabout(about);
  //   togglerwork(work);
  //   togglercontatc(contact);
  // };

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
  const [mediaQueryHeight, setMediaQueryHeight] = useState(window.innerHeight);
  useEffect(() => {
    const trackWidth = () => {
      setMediaQuery(window.innerWidth);
      setMediaQueryHeight(window.innerHeight);
    };
    window.addEventListener('resize', trackWidth);
    return () => {
      window.removeEventListener('resize', trackWidth);
    };
  }, [mediaQuery, mediaQueryHeight]);
  // controls img size + position + scale
  const openImgPortfolio = (x) => {
    if ((x === 'out' && openWelcome === 'in') || (x === 'out' && openWelcome === 'deep')) {
      // close button
      setAudioSound('onX');

      adjustImg('out');
      activatemenu(false, false, false);
      return setOpenWelcome('out');
    }
    if (x === 'in' && openWelcome === 'out' && mediaQuery >= 768 && mediaQueryHeight >= 660) {
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
      x === 'about' ||
      x === 'myWork' ||
      (x === 'contact' && openWelcome === 'out')
    ) {
      // click on about,myWork or Contact
      return setOpenWelcome('deep');
    }
  };

  useEffect(() => {
    console.log('openWelcomemain componenet says : ', openWelcome);
  });

  return (
    <Img ref={imgRef} openWelcome={openWelcome} onClick={() => openImgPortfolio('in')}>
      <Welcome openWelcome={openWelcome} />
      <Link to='/'>
        <Close openwelcome={openWelcome} onClick={() => openImgPortfolio('out')} />
      </Link>
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
