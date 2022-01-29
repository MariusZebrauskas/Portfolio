import React, { useEffect } from 'react';
import {
  Freelance,
  H1,
  H12,
  Header,
  Ofice,
  Remote,
  Wrapper,
  WrapperHeader,
  P,
  WrapperIconsMain,
} from './stylesContat';

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
        <H1>Web Developer</H1>
        <H12>Looking For Work</H12>
      </WrapperHeader>
      <WrapperIconsMain>
        <div>
          <Ofice />
          <P>Office</P>
        </div>
        <div>
          <Freelance />
          <P>Freelance</P>
        </div>
        <div>
          <Remote />
          <P>Remote Working</P>
        </div>
      </WrapperIconsMain>
    </Wrapper>
  );
};

export default Contatc;
