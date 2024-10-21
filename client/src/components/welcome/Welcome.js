import React from "react";
import {
  H1,
  WrapperH1,
  WrapperWelcome,
  P,
  NameWrapper,
  SecondPar,
  ThirdPar,
  P2,
} from "./styled";

const Welcome = ({ openWelcome }) => {
  // openWelcome image center screen + scale + fade in animation
  return (
    <WrapperWelcome openWelcome={openWelcome}>
      <WrapperH1 openWelcome={openWelcome}>
        <NameWrapper>
          <H1>Marius</H1>
          <H1>Zebrauskas</H1>
        </NameWrapper>
      </WrapperH1>
      <SecondPar openWelcome={openWelcome}>
        <P>Typescript, Javascript, Svelte, NodeJS, React, Next</P>
        <P paddingBottom>WEB DEWELOPER</P>
      </SecondPar>

      <ThirdPar openWelcome={openWelcome}>
        <P2>
          I use best-in-class tools, state-of-the-art technologies and modern
          approaches to build modern websites.
        </P2>
      </ThirdPar>
    </WrapperWelcome>
  );
};

export default Welcome;
