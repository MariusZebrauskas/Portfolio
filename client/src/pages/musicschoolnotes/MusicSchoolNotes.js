import React from 'react';

const MusicSchoolNotes = () => {
  return (
    <div>
      <div>
        <h1>Short Intro</h1>
        <p>
          www.musicschoolnotes.com Is a full-stack application and I`m the only developer who worked
          on this project. My tasks were to make a design, make front-end, and back-end applications
          with a user's authentication, account, email, payment gate systems.
        </p>
      </div>
      <div>
        <h1>Design</h1>
        <p>
          My client was a Piano teacher, she already had 3 music albums. Using pictures of albums I
          designed the website design on the fly.
        </p>
      </div>
      <div>
        <h1>Front-End</h1>
        <p>
          On this website, you can listen to music clips for free, by using a sliding playlist. If
          you are happy with a music piece you can add music notes to the cart. Once you finish
          shopping, with stripe help you can pay for your shopping items. After shopping is
          complete, you receive sheets almost instantly to your email. Because this application is
          designed to sell music note sheets to piano teachers around the world. I integrated 3
          languages into this website: Lithuanian, Russian, English. You can pick them up on the
          menu.
        </p>
        <h1>3D elements in about page</h1>
        <p>
          On this website at the moment are uploaded 3 albums. You can read the description about
          them on the about page, also want to mention I integrated 3d elements on that page. Feel
          free to check it out!
        </p>
      </div>
      <div>
        <h1>Back-End</h1>
        <p>
          Using Node JS, express API I created a user account and authentication application. Then I
          added a node mailer for emails. And combined node mailer with stripe, so after purchase
          node-mailer send all purchased sheets to the client.{' '}
        </p>
        <p>Now you are ready to check a website here is a registered account for you </p>
        <p>login: testmyweb@gmail.com</p>
        <p>password: helloworld</p>
        <p>www.musicschoolnotes.com</p>
      </div>
    </div>
  );
};

export default MusicSchoolNotes;
