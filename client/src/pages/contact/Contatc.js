import React, { useEffect } from 'react';

const Contatc = ({setOpenWelcome}) => {
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome('deep');
    return () => {};
  }, []);
  return (
    <div>
      <h1>contact</h1>
    </div>
  );
};

export default Contatc;
