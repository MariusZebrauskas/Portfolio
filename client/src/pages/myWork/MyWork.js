import React, { useEffect, useRef } from "react";
import Slider from "./Slider";
import gsap from "gsap";
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
  TodoImage,
} from "./stylesMyWork";
const MyWork = ({ setOpenWelcome, setAudioSound }) => {
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome("deep");
    return () => {};
  }, []);

  const slider = useRef();
  const slider2 = useRef();

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
    <Wrapper>
      <MyWorkH1 className="animate">my work</MyWorkH1>
      <WrapperCompleateProjects>
        {/* jobe1 */}
        <WrapperEachJobe className="animate">
          <Header className="animate">Full Stack Application </Header>
          <ImgWrapper
            onMouseEnter={() => onMouseEnter(".blurOlgos", slider)}
            onMouseLeave={() => onMouseLeave(".blurOlgos", slider)}
            ref={slider}
          >
            <OlgosWebImg className="musicschoolnotes blurOlgos" />
            <Slider
              setAudioSound={setAudioSound}
              data1="Login: testmyweb@gmail.com"
              data2="Password: helloworld"
              data3="musicschoolnotes"
            />
          </ImgWrapper>
          <DescriotionWrapper>
            <P className="animate">
              Technologies: React, Styled Components, Framer Motion, React
              Router, Context Api, Node JS, Express, Mongo DB, Fire Base,
              Stripe, Node Mailer...
            </P>
          </DescriotionWrapper>
        </WrapperEachJobe>
        {/* jobe2 */}

        <WrapperEachJobe className="animate">
          <Header className="animate">Full Stack Application Nr. 2</Header>
          <ImgWrapper
            onMouseEnter={() => onMouseEnter(".blurSmartBook", slider2)}
            onMouseLeave={() => onMouseLeave(".blurSmartBook", slider2)}
            ref={slider2}
          >
            <TodoImage className="musicschoolnotes blurSmartBook" />
            <Slider
              setAudioSound={setAudioSound}
              data1="Login: testmyweb@gmail.com"
              data2="Password: helloworld"
              data3="smartbook"
            />
          </ImgWrapper>
          <DescriotionWrapper>
            <P className="animate">
              Technologies: NextJS, TypesScript, Redux, Tailwind, GSAP, Mongo
              DB, Fire Base, Node Mailer, Bcrypt, Joi, Axios.
            </P>
          </DescriotionWrapper>
        </WrapperEachJobe>
      </WrapperCompleateProjects>
    </Wrapper>
  );
};

export default MyWork;
