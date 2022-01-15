import DesktopWelcome from './components/desktopWelcome/DesktopWelcome';
import Main from './components/main/Main';
import { Body, ContentWrapper, Wrapper } from './stylesApp';
import { useState } from 'react';
import AboutMe from './components/aboutMe/AboutMe';
import Audio from './components/audio/Audio';

function App() {
  // controls img scale + center
  const [openWelcome, setOpenWelcome] = useState('out');
  // controls mp3 audio
  const [audioSound, setAudioSound] = useState(null);
  // FIXME: remove shadows when in or deep fix close + click  location
  return (
    <Body>
      <Audio setAudioSound={setAudioSound} audioSound={audioSound} />
      <Wrapper openWelcome={openWelcome}>
        <DesktopWelcome openWelcome={openWelcome} />
        <Main setAudioSound={setAudioSound} openWelcome={openWelcome} setOpenWelcome={setOpenWelcome} />
      </Wrapper>
      {/* <ContentWrapper>
        <AboutMe />
      </ContentWrapper> */}
    </Body>
  );
}

export default App;
