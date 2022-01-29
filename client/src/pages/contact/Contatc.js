import React, { useEffect } from 'react';
import { H1, H12, Header, Ofice, Wrapper, WrapperHeader } from './stylesContat';

const Contatc = ({ setOpenWelcome }) => {
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome('deep');
    return () => {};
  }, []);
  return (
    <Wrapper>
      <Header>contact</Header>
      <WrapperHeader>
        <H1>Developer Looking</H1>
        <H12>For Work</H12>
      </WrapperHeader>
      <div>
        <div>
          <Ofice />
          Office
        </div>
        <div>Online</div>
        <div>Freelance</div>
      </div>
    </Wrapper>
  );
};

export default Contatc;
