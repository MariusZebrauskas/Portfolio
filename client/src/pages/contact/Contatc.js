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
  IconWrapper,
  FormSubmit,
  NameAndEmail,
  Input,
  Button,
  PButon,
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
        <IconWrapper>
          <Ofice />
          <P>Office</P>
        </IconWrapper>
        <IconWrapper freelance>
          <Freelance />
          <P>Freelance</P>
        </IconWrapper>
        <IconWrapper>
          <Remote />
          <P>Remote Working</P>
        </IconWrapper>
      </WrapperIconsMain>
      <H1>Drop Me A Line</H1>
      <FormSubmit action='submit'>
        <NameAndEmail>
          <Input type='text' placeholder='Name' />
          <Input type='email' required placeholder='Email' />
        </NameAndEmail>
        <Input type='text' required placeholder='Message' />
        <Button>
          <PButon>Send</PButon>
        </Button>
      </FormSubmit>
    </Wrapper>
  );
};

export default Contatc;
