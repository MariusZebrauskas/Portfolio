import React, { useState, useEffect } from 'react';
import { Wrapper, Right, Copyright, LogoWrapper, P } from './stylesForBottom';
import LogoMZ from './LogoMZ';

const email = 'zebrauskas.mar@gmail.com';

const Bottom = ({ openWelcome }) => {
  const preventDefaultActions = (event) => {
    return event.preventDefault();
  };

  const [questions, setQuestions] = useState(
    'Please leave a feedback about portfolio via contatc page'
  );
  const [copyRights, setCopyRights] = useState('Copyrights');

  return (
    <Wrapper openWelcome={openWelcome}>
      <LogoWrapper>
        <LogoMZ />
      </LogoWrapper>
      <Right>
        <P onMouseDown={preventDefaultActions}>{questions}</P>
      </Right>
      <Copyright>
        <P>
          {copyRights} © 2021 - {new Date().getFullYear()}
        </P>
      </Copyright>
    </Wrapper>
  );
};

export default Bottom;
