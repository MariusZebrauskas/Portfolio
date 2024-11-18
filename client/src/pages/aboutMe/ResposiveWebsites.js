import React, { useEffect, useRef } from "react";
import {
  ResponsiveWebsitesWrapper,
  ResponsiveWebsites,
  Description,
  LinkToContact,
} from "./aboutStyles";
import gsap from "gsap";
import { Link } from "react-router-dom";

const ResposiveWebsites = ({ activatemenu, setAudioSound }) => {
  const responsive = useRef();
  const description = useRef();
  const tl = gsap.timeline({});

  // ANIMATIONS
  useEffect(() => {
    tl.fromTo(
      responsive.current,
      { opacity: 0, y: "2rem" },
      {
        delay: 0.55,
        opacity: 1,
        y: 0,
      }
    ).fromTo(
      description.current,
      { opacity: 0, y: "2rem" },
      {
        opacity: 1,
        y: "0rem",
      }
    );
  }, []);
  // ANIMATIONS
  const redirectToContact = () => {
    // change color on menu to yellow
    activatemenu(false, false, true);
    // autio sound
    setAudioSound("contact");
  };
  return (
    <ResponsiveWebsitesWrapper>
      <ResponsiveWebsites ref={responsive}>
        I Love Turning Ideas Into Digital Reality
      </ResponsiveWebsites>
      <Description ref={description}>
        I’m a detail-oriented web developer with a strong focus on building
        responsive, accessible, and secure web applications. My expertise
        bridges the gap between design and technology, enabling me to create
        solutions that are both visually appealing and technically robust. I
        enjoy crafting interfaces that feel natural and intuitive, paired with
        back-end systems that work seamlessly to support user interactions.
        <br />
        <br />
        Every project I take on is an opportunity to innovate. I value clear
        goals, strong collaboration, and a commitment to excellence. By
        combining technical skills with creativity, I aim to deliver projects
        that not only meet expectations but elevate them.
        <br />
        <br />
        Let’s collaborate to bring your vision to life with a focus on
        functionality, performance, and user experience.
        {/* <Link onClick={redirectToContact} to="/contatc">
          <LinkToContact>Contact</LinkToContact>
        </Link>{" "} */}
      </Description>
    </ResponsiveWebsitesWrapper>
  );
};

export default ResposiveWebsites;
