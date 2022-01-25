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
const MyWork = ({ setOpenWelcome }) => {
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome('deep');
    return () => {};
  }, []);

  const slider = useRef();

  // animation
  useEffect(() => {}, []);

  // h1.addEventListener("mouseenter", () => hover.play());
  // h1.addEventListener("mouseleave", () => hover.reverse());

  // animation

  const onMouseEnter = () => {
    // slider up
    gsap.to(slider.current.children[1], {
      duration: 0.2,
      y: '0%',
      ease: 'power3.out',
    });
    gsap.to('.blur', { duration: .2, filter: 'blur(5px)', });
  };
  // blure background
  const onMouseLeave = () => {
    // slider down
    gsap.to(slider.current.children[1], {
      duration: 0.8,
      y: '61%',
      ease: 'bounce.out',
    });
    // blure background remove
    gsap.to('.blur', { duration: .7, filter: 'blur(0px)', });
  };

  return (
    <Wrapper>
      <MyWorkH1>my work</MyWorkH1>
      <WrapperCompleateProjects>
        <WrapperEachJobe>
          <ImgWrapper
            ref={slider}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
          >
            <OlgosWebImg className='musicschoolnotes blur' />
            <Slider data1='Login: testmyweb@gmail.com' data2='Password: helloworld' />
          </ImgWrapper>
          <DescriotionWrapper>
            <Header>Full Stack Aplication</Header>

            <P>
              Technologies: React, Styled Components, Framer motion, React router, Context Api, Node
              JS, Express, Mongo DB, Fire Base, Stripe, Node Mailer...
            </P>
          </DescriotionWrapper>
        </WrapperEachJobe>
      </WrapperCompleateProjects>
    </Wrapper>
  );
};

export default MyWork;
