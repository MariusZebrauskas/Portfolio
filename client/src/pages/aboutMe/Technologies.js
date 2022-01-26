import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Back,
  Css3Icon,
  ExpressIcon,
  FireBaseIcon,
  FramerMotionIcon,
  Front,
  GitHubIcon,
  H1TechnologiesIUse,
  HerokuIcon,
  HTML5Icon,
  IconHeder,
  IconsWrapper,
  IconWrapper,
  JSIcon,
  MongoIcon,
  NodeJSIcon,
  ReactIcon,
  SassIcon,
  SingleIconHeader,
  SingleIconWrapper,
  DoubleIconWrapper,
  StyledomponentsIcon,
  TechnologiesWrapper,
  GsapIcon,
} from './aboutStyles';

const Technologies = () => {
  const tl = gsap.timeline();
  const techologiesIuse = useRef();
  // animations
  useEffect(() => {
    // animations
    tl.fromTo(
      techologiesIuse.current,
      { opacity: 0, y: '-2rem', scale: 0.8 },
      {
        duration: 0.2,
        opacity: 1,
        y: '0',
        scale: 1,
        delay: 0.8,
        ease: 'expo.out',
      }
    )
      .fromTo(
        '.frondEnd',
        { opacity: 0, y: '-2rem', scale: 0.8 },
        {
          duration: 0.1,
          opacity: 1,
          y: '0',
          scale: 1,
          ease: 'expo.out',
          stagger: 0.05,
        }
      )
      .fromTo(
        '.iconsFade',
        { opacity: 0, y: '-2rem', scale: 0.1 },
        {
          duration: 0.1,
          opacity: 1,
          y: '0',
          scale: 1,
          ease: 'expo.out',
          stagger: 0.05,
        }
      )
      .fromTo(
        '.iconsFade2',
        { opacity: 0, y: '-2rem', scale: 0.1 },
        {
          duration: 0.1,
          opacity: 1,
          y: '0rem',
          scale: 1,
          ease: 'expo.out',
          stagger: 0.1,
        },
        '<'
      )
      .fromTo(
        '.borderRight',
        { borderRight: null },
        {
          opacity: 1,
          duration: 0.1,
          ease: 'expo.out',
          borderRight: '0.125rem dashed #3333',
        }
      );
  }, []);
  // animations

  return (
    <TechnologiesWrapper>
      <H1TechnologiesIUse ref={techologiesIuse}>Technologies I Use</H1TechnologiesIUse>
      <IconsWrapper>
        <Front className='borderRight'>
          <IconHeder className='frondEnd'>Front End</IconHeder>
          <IconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper className='iconsFade'>
                <ReactIcon />
                <SingleIconHeader>React js</SingleIconHeader>
              </SingleIconWrapper>
              <SingleIconWrapper className='iconsFade'>
                <StyledomponentsIcon />
                <SingleIconHeader>Styled Components</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>

            <DoubleIconWrapper>
              <SingleIconWrapper className='iconsFade'>
                <FramerMotionIcon />
                <SingleIconHeader>Framer Motion</SingleIconHeader>
              </SingleIconWrapper>

              <SingleIconWrapper className='iconsFade'>
                <GsapIcon />
                <SingleIconHeader>Green Sock</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper className='iconsFade'>
                <ReactIcon />
                <SingleIconHeader>React Router Dom</SingleIconHeader>
              </SingleIconWrapper>

              <SingleIconWrapper className='iconsFade'>
                <ReactIcon />
                <SingleIconHeader>Context Api</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper className='iconsFade'>
                <Css3Icon />
                <SingleIconHeader>CSS 3</SingleIconHeader>
              </SingleIconWrapper>
              <SingleIconWrapper className='iconsFade'>
                <SassIcon />
                <SingleIconHeader>SASS</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper className='iconsFade'>
                <JSIcon />
                <SingleIconHeader>Java Script</SingleIconHeader>
              </SingleIconWrapper>
              <SingleIconWrapper className='iconsFade'>
                <HTML5Icon />
                <SingleIconHeader>HTML 5</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
          </IconWrapper>
        </Front>

        <Back>
          <IconHeder className='frondEnd'>Back End</IconHeder>
          <IconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper className='iconsFade2'>
                <NodeJSIcon />
                <SingleIconHeader>Node js</SingleIconHeader>
              </SingleIconWrapper>
              <SingleIconWrapper className='iconsFade2'>
                <ExpressIcon />
                <SingleIconHeader>Express</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper className='iconsFade2'>
                <MongoIcon />
                <SingleIconHeader>Mongo Db</SingleIconHeader>
              </SingleIconWrapper>
              <SingleIconWrapper className='iconsFade2'>
                <FireBaseIcon />
                <SingleIconHeader>Fire Base</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper className='iconsFade2'>
                <GitHubIcon />
                <SingleIconHeader>Git Hub</SingleIconHeader>
              </SingleIconWrapper>

              <SingleIconWrapper className='iconsFade2'>
                <HerokuIcon />
                <SingleIconHeader>Heroku</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
          </IconWrapper>
        </Back>
      </IconsWrapper>
    </TechnologiesWrapper>
  );
};

export default Technologies;
