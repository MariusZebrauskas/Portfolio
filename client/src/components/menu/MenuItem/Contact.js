import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Li, P, ContatcIcon } from '../menustyles';

const Contact = ({
  data,
  animationTimer,
  activecontact,
  adjustImg,
  activatemenu,
  openWelcome,
  openImgPortfolio,
  setAudioSound,
}) => {
  const [click, setClick] = useState(false);
  const openMenuHandler = () => {
    if (click) {
      return;
    }
    activatemenu(false, false, true);
    setClick(true);
    adjustImg();
    openImgPortfolio('contact');
    setAudioSound('contact');
  };
  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setClick(false);
      }, animationTimer);
    }
  }, [click]);
  return (
    <Link to="contatc">
      <Li
        activecontact={activecontact}
        openWelcome={openWelcome}
        contact
        click={click}
        onClick={openMenuHandler}
      >
        <ContatcIcon />
        <P>{data}</P>
      </Li>
    </Link>
  );
};

export default Contact;
