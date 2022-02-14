import React, { useEffect, useRef } from 'react';
import Slider from './Slider';
import gsap from 'gsap';
import {
  MyWorkH1,
  OlgosWebImg,
  Wrapper,
  WrapperCompleateProjects,
  ImgWrapper,
  WrapperEachJobe,
  DescriotionWrapper,
  P,
  Header,
} from './stylesMyWork';
const MyWork = ({ setOpenWelcome, setAudioSound }) => {
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome('deep');
    return () => {};
  }, []);

  const slider = useRef();

  // animation on load
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

  // timer stops overlaping animation wich brokeanimation
  // timer runs 1 animation at the time
  let timer = false;

  const onMouseEnter = () => {
    // timer stops overlaping animation wich brokeanimation
    // timer runs 1 animation at the time
    if (timer) {
      return;
    }
    // slider up
    gsap.to(slider.current.children[1], {
      duration: 0.2,
      y: '0%',
      ease: 'power3.out',
    });
    gsap.to('.blur', { duration: 0.2, filter: 'blur(5px)' });
  };
  // blure background
  const onMouseLeave = () => {
    // timer stops overlaping animation wich brokeanimation
    // timer runs 1 animation at the time
    if (timer) {
      return;
    }
    timer = true;
    // slider down
    gsap.to(slider.current.children[1], {
      duration: 0.6,
      y: '61%',
      ease: 'bounce.out',
    });
    // blure background remove
    gsap.to('.blur', { duration: 0.7, filter: 'blur(0px)' });
    setTimeout(() => {
      timer = false;
    }, 601);
  };

  return (
    <Wrapper>
      <MyWorkH1 className='animate'>my work</MyWorkH1>
      <WrapperCompleateProjects>
        <WrapperEachJobe className='animate'>
          <ImgWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={slider}>
            <OlgosWebImg className='musicschoolnotes blur' />
            <Slider
              setAudioSound={setAudioSound}
              data1='Login: testmyweb@gmail.com'
              data2='Password: helloworld'
            />
          </ImgWrapper>
          <DescriotionWrapper>
            <Header className='animate'>Full Stack Application</Header>

            <P className='animate'>
              Technologies: React, Styled Components, Framer Motion, React Router, Context Api, Node
              JS, Express, Mongo DB, Fire Base, Stripe, Node Mailer...
            </P>
          </DescriotionWrapper>
        </WrapperEachJobe>
      </WrapperCompleateProjects>
    </Wrapper>
  );
};

export default MyWork;
