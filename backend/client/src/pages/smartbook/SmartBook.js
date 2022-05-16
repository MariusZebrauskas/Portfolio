import React, { useEffect } from 'react';
import Slider from '../../components/slider/Slider';
import {
  Description,
  Headers,
  IntroWrapper,
  LoginPassword,
  LoginPasswordText,
  NamePassword,
  Wrapper,
  WrapperLink,
  LinkToWeb,
} from './smarBookStyles';
let frontendimg =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/img%2FmyWork%2Fmusicschoolnotes%2F8.png?alt=media&token=b5cab212-354d-423b-9fdf-c6a3ff2ac052';
const SmartBook = ({ setOpenWelcome }) => {
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome('deep');
    return () => {};
  }, []);
  return (
    <Wrapper>
      {/* intro */}
      <IntroWrapper>
        <Headers className='animate'>Description</Headers>
        <Description className='animate'>
        Smarbook is a full-stack application. 
        This application was built with NextJS technologies. 
        Powered with GSAP animations. NextJS allowed me to use the front-end,
         and back-end on the same framework, 
         it increased my development speed and experience a lot.
          This application has an accounting system. Once you register as a new user,
           then you get a Login and Password. 
        After that you can start add, edit, delete your to-dos on any device.
        </Description>
      </IntroWrapper>
      <Slider />
      <WrapperLink className='animate'>
        <LoginPassword>
          <LoginPasswordText>login: </LoginPasswordText>
          <NamePassword> testmyweb@gmail.com</NamePassword>
        </LoginPassword>
        <LoginPassword>
          <LoginPasswordText>password: </LoginPasswordText>
          <NamePassword> helloworld</NamePassword>
        </LoginPassword>
        <LinkToWeb href='https://statuesque-entremet-93144a.netlify.app/' target='_blank'>
          www.smartbook.com
        </LinkToWeb>
      </WrapperLink>
    </Wrapper>
  );
};

export default SmartBook;
