import React from 'react';
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
} from './aboutStyles';

const Technologies = () => {
  return (
    <TechnologiesWrapper>
      <H1TechnologiesIUse>Technologies I Use</H1TechnologiesIUse>
      <IconsWrapper>
        <Front>
          <IconHeder>Front End</IconHeder>
          <IconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper>
                <ReactIcon />
                <SingleIconHeader>React js</SingleIconHeader>
              </SingleIconWrapper>
              <SingleIconWrapper>
                <StyledomponentsIcon />
                <SingleIconHeader>Styled Components</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>

            <DoubleIconWrapper>
              <SingleIconWrapper>
                <FramerMotionIcon />
                <SingleIconHeader>Framer Motion</SingleIconHeader>
              </SingleIconWrapper>
              <SingleIconWrapper>
                <ReactIcon />
                <SingleIconHeader>Context Api</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper>
                <ReactIcon />
                <SingleIconHeader>React Router Dom</SingleIconHeader>
              </SingleIconWrapper>
              <SingleIconWrapper>
                <HTML5Icon />
                <SingleIconHeader>HTML 5</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper>
                <Css3Icon />
                <SingleIconHeader>CSS 3</SingleIconHeader>
              </SingleIconWrapper>
              <SingleIconWrapper>
                <SassIcon />
                <SingleIconHeader>SASS</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
            <SingleIconWrapper>
              <JSIcon />
              <SingleIconHeader>Java Script</SingleIconHeader>
            </SingleIconWrapper>
          </IconWrapper>
        </Front>

        <Back>
          <IconHeder>Back End</IconHeder>
          <IconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper>
                <NodeJSIcon />
                <SingleIconHeader>Node js</SingleIconHeader>
              </SingleIconWrapper>
              <SingleIconWrapper>
                <ExpressIcon />
                <SingleIconHeader>Express</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper>
                <MongoIcon />
                <SingleIconHeader>Mongo Db</SingleIconHeader>
              </SingleIconWrapper>
              <SingleIconWrapper>
                <FireBaseIcon />
                <SingleIconHeader>Fire Base</SingleIconHeader>
              </SingleIconWrapper>
            </DoubleIconWrapper>
            <DoubleIconWrapper>
              <SingleIconWrapper>
                <GitHubIcon />
                <SingleIconHeader>Git Hub</SingleIconHeader>
              </SingleIconWrapper>

              <SingleIconWrapper>
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
