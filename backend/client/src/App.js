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
import MusicSchoolNotes from './pages/musicschoolnotes/MusicSchoolNotes';

function App() {
  // controls img scale + center
  const [openWelcome, setOpenWelcome] = useState('out');
  // controls mp3 audio
  const [audioSound, setAudioSound] = useState(null);

  return (
    <BrowserRouter>
      {/* lan survey icon  needed */}
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
        <ContentWrapper openWelcome={openWelcome}>
          <Routes>
            <Route path='/about' exsact element={<AboutMe setOpenWelcome={setOpenWelcome} />} />
            <Route
              path='/contatc'
              exsact
              element={<Contatc setAudioSound={setAudioSound} setOpenWelcome={setOpenWelcome} />}
            />
            <Route
              path='/mywork'
              exsact
              element={<MyWork setAudioSound={setAudioSound} setOpenWelcome={setOpenWelcome} />}
            />
            <Route
              path='/mywork/musicschoolnotes'
              exsact
              element={<MusicSchoolNotes setOpenWelcome={setOpenWelcome} />}
            />
          </Routes>
        </ContentWrapper>
        <Bottom openWelcome={openWelcome} />
      </Body>
    </BrowserRouter>
  );
}

export default App;

// FIXME: github link + linked in +  gyvenimo aprasymas
// FIXME: contatc page linked inlin, github, resume;
