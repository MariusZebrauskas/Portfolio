import DesktopWelcome from './components/desktopWelcome/DesktopWelcome';
import Main from './components/main/Main';
import { Body, ContentWrapper, Wrapper } from './stylesApp';
import { useState } from 'react';
import AboutMe from './components/aboutMe/AboutMe';

function App() {
  // controls img scale + center
  const [openWelcome, setOpenWelcome] = useState('out');
  // FIXME: remove shadows when in or deep fix close + click  location
  return (
    <Body>
      <Wrapper openWelcome={openWelcome}>
        <DesktopWelcome openWelcome={openWelcome} />
        <Main openWelcome={openWelcome} setOpenWelcome={setOpenWelcome} />
      </Wrapper>
      <ContentWrapper>
        <AboutMe />
      </ContentWrapper>
    </Body>
  );
}

export default App;
