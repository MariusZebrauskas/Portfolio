import React, { useEffect, useRef } from "react";
import Slider from "./Slider";
import gsap from "gsap";
import {
  MyWorkH1,
  OlgosWebImg,
  Wrapper,
  WrapperCompleateProjects,
  ImgWrapper,
  EmbrkImage,
  WrapperEachJobe,
  DescriotionWrapper,
  P,
  Header,
  TodoImage,
} from "./stylesMyWork";

const projects = [
  {
    id: Math.random(),
    title: "Embrk Limited (working since 09-2022)",
    imgClass: "test",
    imgComponent: <EmbrkImage className="musicschoolnotes test" />,
    sliderData: {
      data1: "Full Stack developer",
      data2: "https://www.footballticketpad.com/, https://www.seatloader.com/",
      url: "embrk",
    },
    description: "Technologies: Typescript, SvelteKit, NodeJs, NextJs",
  },
  {
    id: Math.random(),
    title: "Full Stack Application",
    imgClass: "blurOlgos",
    imgComponent: <OlgosWebImg className="musicschoolnotes blurOlgos" />,
    sliderData: {
      data1: "Login: testmyweb@gmail.com",
      data2: "Password: helloworld",
      url: "musicschoolnotes",
    },
    description:
      "Technologies: React, Styled Components, Framer Motion, React Router, Context Api, Node JS, Express, Mongo DB, Fire Base, Stripe, Node Mailer...",
  },
  {
    id: Math.random(),
    title: "Full Stack Application Nr. 2",
    imgClass: "blurSmartBook",
    imgComponent: <TodoImage className="musicschoolnotes blurSmartBook" />,
    sliderData: {
      data1: "Login: testmyweb@gmail.com",
      data2: "Password: helloworld",
      url: "smartbook",
    },
    description:
      "Technologies: NextJS, TypesScript, Redux, Tailwind, GSAP, Mongo DB, Fire Base, Node Mailer, Bcrypt, Joi, Axios.",
  },
];

const MyWork = ({ setOpenWelcome, setAudioSound }) => {
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome("deep");
    return () => {};
  }, []);

  // const slider = useRef();
  // const slider2 = useRef();

  // animation on load
  useEffect(() => {
    gsap.fromTo(
      ".animate",
      {
        opacity: 0,
        y: "2rem",
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
  let timer = null;

  return (
    <Wrapper>
      <MyWorkH1 className="animate">my work</MyWorkH1>
      <WrapperCompleateProjects>
        {projects.map((project) => (
          <Project
            project={project}
            key={project.id}
            setAudioSound={setAudioSound}
          />
        ))}
      </WrapperCompleateProjects>
    </Wrapper>
  );
};

export default MyWork;

let timer = null;
function Project({ project, setAudioSound }) {
  const onMouseEnter = (param1, param2) => {
    let timer = null;

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

  let timer = null;

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

  const slider = useRef();

  return (
    <WrapperEachJobe
      key={project.id}
      className="animate"
      onMouseLeave={() => onMouseLeave(`.${project.imgClass}`, slider)}
    >
      <Header className="animate">{project.title}</Header>
      <ImgWrapper
        onMouseEnter={() => onMouseEnter(`.${project.imgClass}`, slider)}
        ref={slider}
      >
        {project.imgComponent}
        <Slider
          setAudioSound={setAudioSound}
          data1={project.sliderData.data1}
          data2={project.sliderData.data2}
          data3={project.sliderData.url}
        />
      </ImgWrapper>
      <DescriotionWrapper>
        <P className="animate">{project.description}</P>
      </DescriotionWrapper>
    </WrapperEachJobe>
  );
}
