import React, { useEffect, useRef } from 'react';
import { ResponsiveWebsitesWrapper, ResponsiveWebsites, Description } from './aboutStyles';
import gsap from 'gsap';

const ResposiveWebsites = () => {
  const responsive = useRef();
  const description = useRef();
  const tl = gsap.timeline({});

  // ANIMATIONS
  useEffect(() => {
    tl.fromTo(
      responsive.current,
      { opacity: 0, y: '-2rem', scale: 0.8 },
      {
        delay: 0.4,
        duration: 0.2,
        opacity: 1,
        y: '0rem',
        scale: 1,
      }
    ).fromTo(
      description.current,
      { opacity: 0, y: '-2rem', scale: 0.8 },
      {
        duration: 0.2,
        opacity: 1,
        y: '0rem',
        scale: 1,
      }
    );
  }, []);
  // ANIMATIONS
  return (
    <ResponsiveWebsitesWrapper>
      <ResponsiveWebsites ref={responsive}>Responsive Websites</ResponsiveWebsites>
      <Description ref={description}>
        Responsive Modern Websites Are My Thing. I Would Love To Modify Existing Software. Detect
        And Correct Errors, Improve Performance, And Upgrade Interfaces, Or If You Got A Design Of A
        Brand New Website, I Would Love To Be A Front End Web Developer In Your Team.
      </Description>
    </ResponsiveWebsitesWrapper>
  );
};

export default ResposiveWebsites;
