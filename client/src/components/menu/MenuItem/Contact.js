import React, { useState, useEffect } from 'react';

import { Li, P, ContatcIcon } from '../menustyles';

const Contact = ({ data, animationTimer, activecontact, adjustImg, activatemenu }) => {
  const [click, setClick] = useState(false);
  const openMenuHandler = () => {
    if (click) {
      return;
    }
    activatemenu(false, false, true)
    setClick(true);
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
    <Li activecontact={activecontact} contact click={click} onClick={openMenuHandler}>
      <ContatcIcon />
      <P>{data}</P>
    </Li>
  );
};

export default Contact;
