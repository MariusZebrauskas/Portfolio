import React, { useEffect } from 'react';
import img1 from '../../img/1.png';
import {
  AlbumWrapper,
  BackEndWrapper,
  ConclusionWrapper,
  Description,
  DesignWrapper,
  FrontEndWrapper,
  Headers,
  HeaderWrapper,
  Img,
  ImgFront,
  ImgMainWrapper,
  IntroWrapper,
  TwoImages,
  Wrapper,
} from './musicStyles';
import frontendimg from '../../img/8.png';
import loginImg from '../../img/3.png';
let musicfairystory =
  'https://firebasestorage.googleapis.com/v0/b/pianonotes-a108c.appspot.com/o/muzikinepasaka%2Fimg%2FMuzikine%20pasaka%20LT-EN%20-%20web-pages-1-1.jpg?alt=media&token=ade27c57-46b6-499a-b11c-bf3b8461df2e';
let valsas =
  'https://firebasestorage.googleapis.com/v0/b/pianonotes-a108c.appspot.com/o/valsai%2Fimg%2FA4%2B3mm%20virselis%20-%20ri%C5%A1imui%20spirale%20EN%20-%20x-WEB_Page_1.jpg?alt=media&token=19cd2c04-d703-428b-8fc8-d12606f01eb7';
let cirkas =
  'https://firebasestorage.googleapis.com/v0/b/pianonotes-a108c.appspot.com/o/cirkas%2Fpictures%2Fcirkas-atvaziavo-lt-eng.jpg?alt=media&token=54527cdf-b607-4da4-9b7d-896a895a8230';
const MusicSchoolNotes = ({ setOpenWelcome }) => {
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    // change state to open image deep
    setOpenWelcome('deep');
    return () => {};
  }, []);
  return (
    <Wrapper>
      <IntroWrapper>
        <Headers>Short Intro</Headers>
        <Description>
          musicschoolnotes.com Is a full-stack application and I`m the only developer who worked on
          this project. My tasks were to make a design, make front-end, and back-end applications
          with a user's authentication, account, email, payment gate systems.
        </Description>
        {/* <img src={img1} width='100%' alt='' /> */}
      </IntroWrapper>

      <DesignWrapper>
        <Headers mt='2rem'>Design</Headers>
        <Description>
          My client was a Piano teacher, she already had 3 music albums. Using pictures of albums I
          designed the website design on the fly.
        </Description>
        <ImgMainWrapper>
          <TwoImages>
            <Img src={cirkas} alt='' />
            <Img src={valsas} alt='' />
          </TwoImages>
          <Img src={musicfairystory} alt='' />
        </ImgMainWrapper>
      </DesignWrapper>
      <FrontEndWrapper>
        <Headers mt='2rem'>Front-End</Headers>
        <Description>
          On the home page, I integrated a playlist. You can listen, watch music clips for free, by
          using a sliding playlist. If you are happy with a music piece you can add music notes to
          the cart. Once you finish shopping, using stripe you can pay for your shopping items.
          After shopping is complete, you receive sheets almost instantly to your email. Because
          this application is designed to sell music note sheets to piano teachers around the world.
          I integrated 3 languages into this website: Lithuanian, Russian, English. You can pick
          them up on the menu.
        </Description>
        <ImgFront src={frontendimg} width='100%' alt='' />
        <HeaderWrapper>
          <Headers mt='2rem'>3D elements</Headers>
          <Headers>in about page</Headers>
        </HeaderWrapper>
        <Description>
          You can read the description about albums on the about page by clicking on images, also I
          want to mention I integrated 3d elements on that page. Feel free to check it out!
        </Description>
      </FrontEndWrapper>
      <BackEndWrapper>
        <Headers mt='2rem'>Back-End</Headers>
        <Description>
          Using Node JS, express API I created a user account and authentication application.
          Because of security reasons, I don't want to go too deep into this topic. Then I added a
          node-mailer and combined it with stripe, so after purchase node-mailer sends all purchased
          sheets to the client.
        </Description>
        <ImgFront src={loginImg} alt='' />
      </BackEndWrapper>
      <ConclusionWrapper>
        <Headers mt='2rem'>Conclusion</Headers>
        <div>
          <h4>Olga Beliukeviciene</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, deserunt?</p>
        </div>
        <div>
          <p>Now you are ready to check a website here is a demo account </p>
          <div>
            <p>login: </p>
            <h4>testmyweb@gmail.com</h4>
          </div>
          <div>
            <p>password: </p>
            <h4>helloworld</h4>
          </div>
        </div>
      </ConclusionWrapper>
    </Wrapper>
  );
};

export default MusicSchoolNotes;
