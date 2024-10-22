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
        <Headers className="animate">Description</Headers>

        <Description className="animate">
          Smarbook is a full-stack application. This application was developed
          with NextJS technologies. NextJS allowed me to use the front-end, and
          back-end on the same framework, it increased my development speed and
          experience a lot. Also, SmartBook is powered by GSAP animations. With
          GSAP I achieved a really nice and smooth animations which increase
          user experience. This application has:
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
          <Strong>1. Accounting system.</Strong>
          You can register a user manually or use google auth login
          functionality. Also, once you create an account, you don't need to log
          in the next time you come back to the smart book, it does it for you
          <br />
          <br />
          <Strong>2. Email system.</Strong> Users can contact me via the contact
          page. And send real emails to my Gmail account.
          <br />
          <br />
          <Strong>3. Advanced Todo list.</Strong>
          Todo list is connected to MongoDB, and it has CRUD ( Create, Update,
          Delete ) functionality. Smart-book list also has a really cool
          animation I personally recommend checking them out.
          <br />
          <br />
          <Strong>4. Excel type Todo list. </Strong>
          This list is also connected to MongoDB, and it has CRUD ( Create,
          Update, Delete ) functionality as well.
        </Description>
      </IntroWrapper>

      <WrapperLink className="animate">
        <LinkToWeb href="https://smart-book.org" target="_blank">
          www.smart-book.org
        </LinkToWeb>
      </WrapperLink>
    </Wrapper>
  );
};

export default Embrk;
