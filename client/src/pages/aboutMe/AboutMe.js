import React, { useEffect } from 'react';
import { Wrapper, AboutMeH1 } from './aboutStyles';
import OtherInfo from './OtherInfo';
import ResposiveWebsites from './ResposiveWebsites';
import Technologies from './Technologies';

const AboutMe = ({ setOpenWelcome }) => {
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome('deep');
    return () => {};
  }, []);
  return (
    <Wrapper>
      <AboutMeH1>about me</AboutMeH1>
      <ResposiveWebsites />
      <Technologies />
      <OtherInfo />
    </Wrapper>
  );
};

export default AboutMe;
