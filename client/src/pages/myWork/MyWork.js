import React, { useEffect } from 'react';
import Slider from './Slider';
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

  return (
    <Wrapper>
      <MyWorkH1>my work</MyWorkH1>
      <WrapperCompleateProjects>
        <WrapperEachJobe>
          <ImgWrapper>
            <OlgosWebImg className='musicschoolnotes' />
            <Slider />
          </ImgWrapper>
          <DescriotionWrapper>
            <Header>Full Stack Aplication</Header>

            <P>
              Technologies: React, Styled Components, Framer motion, React router, Context Api, Node
              JS, Express, Mongo DB, Fire Base, Stripe, Node Mailer...
            </P>
            {/* <p>
              I created this application for music school teachers by order of Olga Beliukevičienė.
              On this website teachers can buy music note sheets , and use them to teach children
              how to play the piano.
            </p> */}
          </DescriotionWrapper>
        </WrapperEachJobe>
      </WrapperCompleateProjects>
    </Wrapper>
  );
};

export default MyWork;
