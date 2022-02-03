import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import axios from 'axios';
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
  H14,
  TextArea,
} from './stylesContat';
import MessageBeenSend from './MessageBeenSend';

const Contatc = ({ setOpenWelcome }) => {
  // message info
  let name = useRef();
  let email = useRef();
  let message = useRef();
  // if message been send turn on thank you pages
  const [messageSend, setMessageSend] = useState(false);
  // chek background color by input value "" or "text" or ""
  const [nameInput, setNameInput] = useState(undefined);
  const [emailInput, setEmailInput] = useState(undefined);
  const [messageInput, setMessageInput] = useState(undefined);
  const onChangeHandler = (props) => {
    // this function sets background color
    if (props === 'name') {
      if (!name.current.value) {
        return setNameInput(undefined);
      }
      return setNameInput(name.current.value);
    }
    if (props === 'email') {
      if (!email.current.value) {
        return setEmailInput(undefined);
      }
      return setEmailInput(email.current.value);
    }
    if (props === 'message') {
      if (!message.current.value) {
        return setMessageInput(undefined);
      }
      return setMessageInput(message.current.value);
    }
  };

 

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
    axios
      .post('/message', {
        name: name.current.value,
        email: email.current.value,
        message: message.current.value,
      })
      .then((response) => {
        if (response.data.success) {
          setMessageSend(true);
        } else {
          throw new Error('message bnot been send');
        }
      });
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

  // onclick animation
  const onClick = () => {
    let tl = gsap.timeline();
    tl.to('.button', {
      duration: 0.2,
      scale: 1.01,
      ease: 'back.out(1.7)',
    }).to('.button', {
      duration: 0.2,
      scale: 1,
      ease: 'back.out(1.7)',
    });
  };

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
      {!messageSend ? (
        <>
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
                nameInput={nameInput}
                onChange={() => onChangeHandler('name')}
              />
              <Input
                className='animate'
                ref={email}
                type='email'
                required
                placeholder='Email'
                emailInput={emailInput}
                onChange={() => onChangeHandler('email')}
              />
            </NameAndEmail>
            <TextArea
              className='animate'
              ref={message}
              type='text'
              rows='4'
              required
              placeholder='Message'
              messageInput={messageInput}
              onChange={() => onChangeHandler('message')}
            />
            <Button className='animate button' type='submit' onClick={onClick}>
              <PButon className='hoverButtonText'>Send</PButon>
            </Button>
          </FormSubmit>
        </>
      ) : (
        <MessageBeenSend />
      )}
    </Wrapper>
  );
};

export default Contatc;
