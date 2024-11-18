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
  function calculateWorkDuration(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} years ${months > 5 ? `and ${months} months` : ""}`;
  }

  const workDuration = calculateWorkDuration("2022-09-01");
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
        <H1>JavaScript</H1>
        <H1>developer</H1>
      </WrapperH1>
      <WrapperText>
        <P>
          with {workDuration} of professional experience as a full-stack
          developer in a company environment. I specialize in building
          responsive, dynamic, and user-centered websites that combine
          functionality with exceptional performance. My expertise spans
          crafting elegant front-end interfaces and integrating powerful
          back-end solutions, delivering seamless digital experiences. Driven by
          innovation and a love for problem-solving, I thrive in transforming
          ideas into reality through clean code and modern technologies.
        </P>
      </WrapperText>
    </Wrapper>
  );
};

export default DesktopWelcome;
