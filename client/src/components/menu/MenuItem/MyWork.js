import React, { useState, useEffect } from 'react';

import { Li, P, MyWorkIcon } from '../menustyles';

const MyWork = ({ data, animationTimer, activatemenu, activework, adjustImg }) => {
  const [click, setClick] = useState(false);
  const openMenuHandler = () => {
    if (click) {
      return;
    }
    setClick(true);
    adjustImg('small');
    activatemenu(false, true, false);
  };
  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setClick(false);
      }, animationTimer);
    }
  }, [click]);
  return (
    <Li activework={activework} myWork click={click} onClick={openMenuHandler}>
      <MyWorkIcon />
      <P>{data}</P>
    </Li>
  );
};

export default MyWork;
