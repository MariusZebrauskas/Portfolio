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
  H14,
  TextArea,
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
  let tl = gsap.timeline();
  let time = 0;
  const onMouseEnter = () => {
    time = 800;
    tl.fromTo(
      '.animation',
      { x: '-100%', opacity: 0 },
      { ease: 'bounce', duration: `0.${time}`, opacity: 1, x: 0 }
    ).fromTo(
      '.hoverButtonText',
      {
        color: '#334455',
      },
      { duration: 0, color: 'white' },
      '<'
    );
    setTimeout(() => {
      time = 0;
    }, time);
  };
  // animation on button hover leave
  const onMouseLeave = () => {
    setTimeout(() => {
      tl.fromTo(
        '.animation',
        { x: '0', opacity: 1 },
        { ease: 'power3', duration: 0.2, opacity: 0, x: '-100%' }
      ).fromTo(
        '.hoverButtonText',
        {
          color: 'white',
        },
        { duration: 0, color: '#334455' },
        '<'
      );
    }, time);
  };

  useEffect(() => {
    gsap.fromTo(
      '.animate',
      {
        opacity: 0,
        y: '2rem',
      },
      {
        delay: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <Wrapper>
      <Header className='animate'>contact</Header>
      <WrapperHeader className='animate'>
        <H1>Web Developer</H1>
        <H12>Looking For Work</H12>
      </WrapperHeader>
      <WrapperIconsMain className='animate'>
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
      <H14 className='animate'>Drop Me A Line</H14>
      <FormSubmit onSubmit={submitHandler}>
        <NameAndEmail>
          <Input
            className='animate'
            name='true'
            ref={name}
            type='text'
            required
            placeholder='Name'
          />
          <Input className='animate' ref={email} type='email' required placeholder='Email' />
        </NameAndEmail>
        <TextArea
          className='animate'
          ref={message}
          type='text'
          rows='4'
          required
          placeholder='Message'
        />
        <Button
          className='animate'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          type='submit'
        >
          <PButon className='hoverButtonText'>Send</PButon>
          <Animation className='animation' />
        </Button>
      </FormSubmit>
    </Wrapper>
  );
};

export default Contatc;
