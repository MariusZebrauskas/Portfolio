import gsap from "gsap";
import React, { useEffect } from "react";
import Slider from "../../components/slider/Slider";
import SmartBookVideo from "../../components/video/SmartBookVideo";
import {
  Description,
  Headers,
  IntroWrapper,
  LoginPassword,
  LoginPasswordText,
  NamePassword,
  Wrapper,
  WrapperLink,
  LinkToWeb,
  Strong,
  Image,
} from "./embrkStyles";
let frontendimg =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/img%2FmyWork%2Fmusicschoolnotes%2F8.png?alt=media&token=b5cab212-354d-423b-9fdf-c6a3ff2ac052";
const Embrk = ({ setOpenWelcome }) => {
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome("deep");
    return () => {};
  }, []);

  // animation
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

  return (
    <Wrapper>
      {/* intro */}
      <IntroWrapper>
        <Headers className="animate">Introduction</Headers>

        <Description className="animate">
          Embark Limited is a multimillion-pound organization at the forefront
          of football ticket sales. My journey with Embark began with an
          ambitious project to overhaul the outdated system at
          www.footballticketpad.com, transitioning to a more advanced
          technological framework. As part of a small, agile team composed of a
          senior developer and two junior developers, including myself, we
          undertook the challenge of rewriting, modifying, and optimizing
          thousands of lines of code. The original system was built on Angular
          for the front end, Node.js for the backend, and MySQL for database
          management. In pursuit of enhanced performance and scalability, we
          transitioned to Next.js for the front end, maintained Node.js on the
          backend, and upgraded our database solutions to MongoDB using TypeORM.
          <br />
          <Slider
            data={[
              {
                id: "1",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/img%2Fticketpad%2FScreenshot%202024-10-22%20at%2021.51.45.png?alt=media&token=c1e61a33-9d70-4016-bf18-b56e334c092d",
                alt: "home page",
              },
              {
                id: "2",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/img%2Fticketpad%2FScreenshot%202024-10-22%20at%2021.52.39.png?alt=media&token=47f97293-9356-41af-b8cd-50a1fcdea4ea",
                alt: "stadium",
              },
              {
                id: "3",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/img%2Fticketpad%2FScreenshot%202024-10-22%20at%2021.55.36.png?alt=media&token=7749ac0c-fdb1-477c-af53-4c473c60f398",
                alt: "admin",
              },
              {
                id: "4",
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/img%2Fticketpad%2FScreenshot%202024-10-22%20at%2021.57.03.png?alt=media&token=e5f4c3f6-1d20-4e10-bab2-fbf31cb3e344",
                alt: "file manager",
              },
            ]}
          />
          <br />
          My initial seven months were intensely focused on the development and
          implementation of pre-designed pages, retrieving data, refining user
          experiences, and engaging in productive collaborations with our design
          team. This phase was pivotal in honing my skills in dynamic component
          usage, clean code practices, and the application of sophisticated CSS
          and HTML5 methodologies.
          <br />
          <br />
          Despite the advantages, we encountered limitations with Next.js due to
          its excessive boilerplate and recurring bugs, prompting our switch to
          SvelteKit. This change demanded a comprehensive rewrite of our
          front-end code, significantly enhancing system efficiency and
          maintainability.
          <br />
          <br />
          One year into my role, I spearheaded a critical initiative to develop
          www.seatloader.com, a platform akin to Ticketpad but with extended
          services including hotel bookings. This site, alongside Ticketpad,
          features robust administrative panels for both front-end and backend
          management. Seatloader is streamlined for ticket and hotel service
          offerings, whereas Ticketpad serves a diverse clientele involving
          brokers, affiliates, and direct customers and accommodates a broader
          array of events like football, concerts, and upcoming expansions into
          horse and car races. Our backend architecture is designed for
          versatility, allowing easy integration of new categories through a
          well-organized database structure of industries ,categories,
          subcategories, and events…
          <br />
          <br />A significant aspect of my role involved engineering advanced
          systems for ticket listings and re-listings, empowering admins,
          brokers, and customers with efficient tools for selling and reselling
          tickets. Additionally, I innovated our admin panel by developing a
          dynamic page matrix that enables the creation of customizable pages
          via a data-driven approach. introduced a drag-and-drop component that
          supports array data and custom subcomponents for each data entry,
          greatly enhancing the user experience and operational flexibility also
          had to create file manager …
          <br />
          <br />
          <Image src="https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/img%2Fticketpad%2FScreenshot%202024-10-26%20at%2021.20.49.png?alt=media&token=7bb4d54d-ab58-4628-8197-94b435053405" />
          Through these transformative two years at Embark Limited, I have
          evolved from a junior developer to a confident mid-level developer,
          equipped with a robust set of skills and a proven track record of
          delivering critical solutions in high-stakes environments.
        </Description>
      </IntroWrapper>

      <WrapperLink className="animate">
        <LinkToWeb href="https://www.footballticketpad.com" target="_blank">
          www.footballticketpad.com
        </LinkToWeb>
        <LinkToWeb href="https://www.seatloader.com" target="_blank">
          www.seatloader.com
        </LinkToWeb>
      </WrapperLink>
    </Wrapper>
  );
};

export default Embrk;
