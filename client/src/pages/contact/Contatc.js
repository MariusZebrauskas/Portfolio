import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
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
  Animation,
} from './stylesContat';

const Contatc = ({ setOpenWelcome }) => {
  // message info
  let name = useRef();
  let email = useRef();
  let message = useRef();
  let info;
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome('deep');
    return () => {};
  }, []);
  // message to backend
  const submitHandler = (e) => {
    e.preventDefault();
    info = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    };
  };
  // animation on button hover enter
  let time = 0;
  const onMouseEnter = () => {
    time = 800;
    gsap.fromTo(
      '.animation',
      { x: '-100%', opacity: 0 },
      { ease: 'bounce', duration: `0.${time}`, opacity: 1, x: 0 }
    );
    setTimeout(() => {
      time = 0;
    }, time);
  };
  // animation on button hover leave
  const onMouseLeave = () => {
    setTimeout(() => {
      gsap.fromTo(
        '.animation',
        { x: '0', opacity: 1 },
        { ease: 'power3', duration: 0.2, opacity: 0, x: '-100%' }
      );
    }, time);
  };
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
      <FormSubmit onSubmit={submitHandler}>
        <NameAndEmail>
          <Input name ref={name} type='text' required placeholder='Name' />
          <Input ref={email} type='email' required placeholder='Email' />
        </NameAndEmail>
        <Input ref={message} type='text' required placeholder='Message' />
        <Button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} type='submit'>
          <PButon>Send</PButon>
          <Animation className='animation' />
        </Button>
      </FormSubmit>
    </Wrapper>
  );
};

export default Contatc;
