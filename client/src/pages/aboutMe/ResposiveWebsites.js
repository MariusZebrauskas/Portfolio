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
        Responsive Websites
      </ResponsiveWebsites>
      <Description ref={description}>
        If you need a brand new website or a skilled developer to join your
        team, please leave a message on the
        <Link onClick={redirectToContact} to="/contatc">
          <LinkToContact>Contact</LinkToContact>
        </Link>{" "}
        page. I would love to help modify existing software, detect and correct
        errors, improve performance, or upgrade interfaces.
      </Description>
    </ResponsiveWebsitesWrapper>
  );
};

export default ResposiveWebsites;
