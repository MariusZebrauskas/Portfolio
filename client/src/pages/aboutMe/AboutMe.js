import React, { useEffect, useRef } from 'react';
import { Wrapper, AboutMeH1 } from './aboutStyles';
import OtherInfo from './OtherInfo';
import ResposiveWebsites from './ResposiveWebsites';
import Technologies from './Technologies';
import gsap from 'gsap';

const AboutMe = ({ setOpenWelcome }) => {
  const h1 = useRef();
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome('deep');

    // animation whole page loaded
    gsap.from(h1.current, {
      opacity: 0,
      y: '2rem',
      // scale: 0.8,
      delay: 0.5,
      ease: 'expo.out',
    });
  }, []);

  return (
    <Wrapper>
      <AboutMeH1 ref={h1}>about me</AboutMeH1>
      <ResposiveWebsites />
      <Technologies />
      <OtherInfo />
    </Wrapper>
  );
};

export default AboutMe;
