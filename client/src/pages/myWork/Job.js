import React, { useRef } from "react";

import gsap from "gsap";
import {
  ImgWrapper,
  WrapperEachJobe,
  DescriotionWrapper,
  P,
  Header,
} from "./stylesMyWork";
import Slider from "./Slider";
const Job = ({ project, setAudioSound }) => {
  let timer = null;
  const slider = useRef();

  const onMouseEnter = (param1, param2) => {
    // timer stops overlaping animation wich brokeanimation
    // timer runs 1 animation at the time
    if (timer === param1) {
      return;
    }
    // slider up
    gsap.to(param2.current.children[1], {
      duration: 0.2,
      y: "0%",
      ease: "power3.out",
    });
    gsap.to(param1, { duration: 0.2, filter: "blur(5px)" });
  };
  // blure background
  const onMouseLeave = (param1, param2) => {
    // timer stops overlaping animation wich brokeanimation
    // timer runs 1 animation at the time
    if (timer === param1) {
      return;
    }
    timer = param1;
    // slider down
    gsap.to(param2.current.children[1], {
      duration: 0.6,
      y: "61%",
      ease: "bounce.out",
    });
    // blure background remove
    gsap.to(param1, { duration: 0.7, filter: "blur(0px)" });
    setTimeout(() => {
      timer = null;
    }, 601);
  };
  return (
    <WrapperEachJobe key={project.id} className="animate">
      <Header className="animate">{project.title}</Header>
      <ImgWrapper
        onMouseEnter={() => onMouseEnter(`.${project.imgClass}`, slider)}
        onMouseLeave={() => onMouseLeave(`.${project.imgClass}`, slider)}
        ref={slider}
      >
        {project.imgComponent}
        <Slider
          setAudioSound={setAudioSound}
          data1={project.sliderData.data1}
          data2={project.sliderData.data2}
          data3={project.sliderData.data3}
        />
      </ImgWrapper>
      <DescriotionWrapper>
        <P className="animate">{project.description}</P>
      </DescriotionWrapper>
    </WrapperEachJobe>
  );
};

export default Slider;
