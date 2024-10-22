import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  OtherInfoHeader,
  OtherInfoWrapper,
  EducationIcon,
  GymIcon,
  LanguagesIcon,
  MotoIcon,
  OtherWrapper,
  OtherSingleWrapper,
  OtherSingleDescription,
  OtherP,
  OtherI,
} from "./aboutStyles";
const OtherInfo = () => {
  // animations
  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      ".info",
      { opacity: 0, scale: 0.8, y: "2rem" },
      {
        duration: 0.2,
        opacity: 1,
        y: "0",
        scale: 1,
        delay: 2.1,
        ease: "expo.out",
      }
    ).from(".iconFade", {
      duration: 0.2,
      opacity: 0,
      y: "2rem",
      scale: 0.8,
      ease: "expo.out",
    });
  }, []);
  // animations
  return (
    <OtherInfoWrapper>
      <OtherInfoHeader className="info">Other Info</OtherInfoHeader>
      <OtherWrapper>
        <section>
          <OtherSingleWrapper className="iconFade">
            <EducationIcon />
            <OtherSingleDescription>
              <OtherI>Education</OtherI>
              <OtherP>College Degree "Land Survey"</OtherP>
            </OtherSingleDescription>
          </OtherSingleWrapper>
          <OtherSingleWrapper className="iconFade">
            <GymIcon />
            <OtherSingleDescription>
              <OtherI>Hobbies</OtherI>
              <OtherP>Gym, Fishing, Roller Skates</OtherP>
            </OtherSingleDescription>
          </OtherSingleWrapper>
        </section>
        <section>
          <OtherSingleWrapper className="iconFade">
            <LanguagesIcon />
            <OtherSingleDescription>
              <OtherI>Languages</OtherI>
              <OtherP>English, Lithuanian</OtherP>
            </OtherSingleDescription>
          </OtherSingleWrapper>
          <OtherSingleWrapper className="iconFade">
            <MotoIcon last="true" />
            <OtherSingleDescription>
              <OtherI>Motto</OtherI>
              <OtherP>Learn Something New Every Day</OtherP>
            </OtherSingleDescription>
          </OtherSingleWrapper>
        </section>
      </OtherWrapper>
    </OtherInfoWrapper>
  );
};

export default OtherInfo;
