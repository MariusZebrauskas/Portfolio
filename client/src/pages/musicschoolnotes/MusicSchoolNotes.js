import React from 'react';

const MusicSchoolNotes = () => {
  return (
    <div>
      <h1>Full Stack Aplication</h1>
      <i>
        I`m the only developer who worked on this project, every line of code was written on my own.
        Using pictures of albums I designed the website on the fly.
      </i>
      <p>
        This application is designed to sell music note sheets to piano teachers around the world. I
        integrated 3 languages into this website: Lithuanian, Russian, English. You can pick them up
        on the menu.
      </p>
      <p>
        On this website at the moment are uploaded 3 albums. You can pick the album you want to look
        upon on this menu.
      </p>
      <p>
        Also, there is a playlist (draggable with the mouse), you can listen to all music songs
        without having an account created, but if you decide to buy a music note sheet of a song you
        listened to or a full album, then you need to register and use your account to put that item
        in the cart.
      </p>
      <div>
        <p>
          Here is a login page, there are some pages where login is required, in this case, please
          use test account, or register a new one.
        </p>
        <h4>login :test-dev@gmail.com </h4>
        <h4>password : dev54321 </h4>
      </div>
      <div>
        <p>
          If you want to say thanks to Olgos Beliukevicienės for awesome music note sheets or if
          there is any reason to contact administrators of this website you can contact thru contact
          page.
        </p>
      </div>
      <div>
        <p>
          You can read about each album on the about page, also there is a cool 3d menu animation
          witch triggers when the album change. Album can be changed with mouse drag or by clicking
          on the arrow.
        </p>
      </div>
      <div>
        <p>When you are happy with your shopping list you can checkout securely with stripe.</p>
      </div>
    </div>
  );
};

export default MusicSchoolNotes;
