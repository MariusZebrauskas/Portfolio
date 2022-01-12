import React, { useState, useEffect } from 'react';
import Menu from '../menu/Menu';
import { Close } from '../menu/menustyles';
import Welcome from '../welcome/Welcome';
import { Bottom, Img, Left } from './styles';

const Main = ({ setOpenWelcome, openWelcome }) => {
  const [activeabout, togglerabout] = useState(false);
  const [activework, togglerwork] = useState(false);
  const [activecontact, togglercontatc] = useState(false);

  const [activeAllMenu, setActiveAllMenu] = useState(false);

  const [imghandler, setImgHandler] = useState('large');
  const activatemenu = (about, work, contact) => {
    togglerabout(about);
    togglerwork(work);
    togglercontatc(contact);
  };

  const adjustImg = (params) => {
    setImgHandler(params);
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

  const openImgPortfolio = () => {
    // if img in center and scaled
    setOpenWelcome(false);
  };

// FIXME: work on close menu  

  return (
    <Img
      openWelcome={openWelcome}
      imghandler={imghandler}
      onClick={openImgPortfolio}
    >
      <Welcome openWelcome={openWelcome}/>
      <Close imghandler={imghandler} onClick={() => adjustImg('large')} />
      <Menu
        activework={activework}
        activeabout={activeabout}
        activecontact={activecontact}
        activeAllMenu={activeAllMenu}
        activatemenu={activatemenu}
        adjustImg={adjustImg}
      />
      <Bottom />
      <Left />
    </Img>
  );
};

export default Main;
