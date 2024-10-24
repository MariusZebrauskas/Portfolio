import React from "react";
import { Wrapper, WrapperH1, H1, WrapperText, P } from "./stylesDesktopWelcome";

const animationOut = {
  hiden: {
    opacity: 1,
    x: "0rem",
  },
  animate: {
    opacity: 0,
    x: "-10rem",
    transition: { duration: 0.8, ease: "easeInOut", delay: 0 },
  },
};
const animationIn = {
  hiden: {
    opacity: 0,
    x: "-10rem",
  },
  animate: {
    opacity: 1,
    x: "0rem",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      type: "spring",
      delay: 0.5,
    },
  },
};
const DesktopWelcome = ({ openWelcome }) => {
  return (
    <Wrapper
      variants={
        openWelcome === "out"
          ? animationIn
          : openWelcome === "in"
          ? animationOut
          : null
      }
      initial="hiden"
      animate="animate"
    >
      <WrapperH1>
        <H1>Marius</H1>
        <H1>Zebrauskas</H1>
      </WrapperH1>
      <WrapperText>
        <P>
          I'm a dedicated JavaScript developer with 2 years of real-life
          experience working as a full stack developer, specializing in creating
          responsive and functional websites.
        </P>
      </WrapperText>
    </Wrapper>
  );
};

export default DesktopWelcome;
