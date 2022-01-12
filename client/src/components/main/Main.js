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
  // remove all active menu items
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
  // controls img size + position + scale
  const openImgPortfolio = (x) => {
    // if img in center and scaled
    if ((x === 'out' && openWelcome === 'in') || (x === 'out' && openWelcome === 'deep')) {
      activatemenu(false, false, false);
      return setOpenWelcome('out');
    }
    if (x === 'in' && openWelcome === 'out') {
      return setOpenWelcome('in');
    }
    if (x === 'deep' && openWelcome === 'in') {
      return setOpenWelcome('deep');
    }
  };

  // FIXME: work on remeliai shadows phone bugs, button clicks not in place

  return (
    <Img openWelcome={openWelcome} imghandler={imghandler} onClick={() => openImgPortfolio('in')}>
      <Welcome openWelcome={openWelcome} />
      <Close
        openwelcome={openWelcome}
        imghandler={imghandler}
        onClick={() => openImgPortfolio('out')}
      />
      <Menu
        activework={activework}
        activeabout={activeabout}
        activecontact={activecontact}
        activeAllMenu={activeAllMenu}
        openWelcome={openWelcome}
        activatemenu={activatemenu}
        adjustImg={adjustImg}
        openImgPortfolio={openImgPortfolio}
      />
      <Bottom />
      <Left />
    </Img>
  );
};

export default Main;
