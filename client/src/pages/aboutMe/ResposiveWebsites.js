import React, { useEffect, useRef } from 'react';
import {
  ResponsiveWebsitesWrapper,
  ResponsiveWebsites,
  Description,
  LinkToContact,
} from './aboutStyles';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const ResposiveWebsites = ({ activatemenu,setAudioSound }) => {
  const responsive = useRef();
  const description = useRef();
  const tl = gsap.timeline({});

  // ANIMATIONS
  useEffect(() => {
    tl.fromTo(
      responsive.current,
      { opacity: 0, y: '2rem' },
      {
        delay: 0.55,
        opacity: 1,
        y: 0,
      }
    ).fromTo(
      description.current,
      { opacity: 0, y: '2rem' },
      {
        opacity: 1,
        y: '0rem',
      }
    );
  }, []);
  // ANIMATIONS
  const redirectToContact = () => {
    // change color on menu to yellow
    activatemenu(false, false, true);
    // autio sound
    setAudioSound('contact');
  };
  return (
    <ResponsiveWebsitesWrapper>
      <ResponsiveWebsites ref={responsive}>Responsive Websites</ResponsiveWebsites>
      <Description ref={description}>
        If You Need A Brand New Website, Or You Need A Developer In Your Team. Please Leave A Message In
        <Link onClick={redirectToContact} to='/contatc'>
          <LinkToContact>Contact</LinkToContact>
        </Link>{' '}
        Page. I Would Love To Modify Existing Software, Detect And Correct Errors, Improve
        Performance Or Upgrade Interfaces.
      </Description>
    </ResponsiveWebsitesWrapper>
  );
};

export default ResposiveWebsites;
