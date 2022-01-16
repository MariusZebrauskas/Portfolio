import DesktopWelcome from './components/desktopWelcome/DesktopWelcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import { Body, ContentWrapper, Wrapper } from './stylesApp';
import { useState } from 'react';
import AboutMe from './pages/aboutMe/AboutMe';
import Audio from './components/audio/Audio';
import Contatc from './pages/contact/Contatc';
import MyWork from './pages/myWork/MyWork';
import Home from './pages/homeTest/Home';
import Bottom from './components/bottom/Bottom';


function App() {
  // controls img scale + center
  const [openWelcome, setOpenWelcome] = useState('out');
  // controls mp3 audio
  const [audioSound, setAudioSound] = useState(null);
  // FIXME: remove shadows when in or deep fix close + click  location
  return (
    <BrowserRouter>
      <Body>
        <Audio setAudioSound={setAudioSound} audioSound={audioSound} />
        <Wrapper openWelcome={openWelcome}>
          <DesktopWelcome openWelcome={openWelcome} />
          <Main
            setAudioSound={setAudioSound}
            openWelcome={openWelcome}
            setOpenWelcome={setOpenWelcome}
          />
        </Wrapper>
        <ContentWrapper>
          <Routes>
            <Route path='/about' exsact element={<AboutMe setOpenWelcome={setOpenWelcome} />} />
            <Route path='/contatc' exsact element={<Contatc />} />
            <Route path='/mywork' exsact element={<MyWork />} />
          </Routes>
        </ContentWrapper>
        <Bottom openWelcome={openWelcome} />
      </Body>
    </BrowserRouter>
  );
}

export default App;
