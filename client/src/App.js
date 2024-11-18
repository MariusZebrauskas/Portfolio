import DesktopWelcome from "./components/desktopWelcome/DesktopWelcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import { Body, ContentWrapper, Wrapper } from "./stylesApp";
import { useState } from "react";
import AboutMe from "./pages/aboutMe/AboutMe";
import Audio from "./components/audio/Audio";
import Contatc from "./pages/contact/Contatc";
import MyWork from "./pages/myWork/MyWork";
import Bottom from "./components/bottom/Bottom";
import MusicSchoolNotes from "./pages/musicschoolnotes/MusicSchoolNotes";
import SmartBook from "./pages/smartbook/SmartBook";
import Embrk from "./pages/embrk/embrk";

function App() {
  // controls img scale + center
  const [openWelcome, setOpenWelcome] = useState("out");
  // controls mp3 audio
  const [audioSound, setAudioSound] = useState(null);

  // drilling down menu controler
  const [activeabout, togglerabout] = useState(false);
  const [activework, togglerwork] = useState(false);
  const [activecontact, togglercontatc] = useState(false);

  // remove all active menu items
  const activatemenu = (about, work, contact) => {
    togglerabout(about);
    togglerwork(work);
    togglercontatc(contact);
  };
  console.log({ activeabout, activework, activecontact, openWelcome });
  return (
    <BrowserRouter>
      {/* lan survey icon  needed  test*/}
      <Body>
        <Audio setAudioSound={setAudioSound} audioSound={audioSound} />
        <Wrapper openWelcome={openWelcome}>
          <DesktopWelcome openWelcome={openWelcome} />
          <Main
            setAudioSound={setAudioSound}
            openWelcome={openWelcome}
            setOpenWelcome={setOpenWelcome}
            togglerabout={togglerabout}
            togglerwork={togglerwork}
            togglercontatc={togglercontatc}
            activatemenu={activatemenu}
            activeabout={activeabout}
            activework={activework}
            activecontact={activecontact}
          />
        </Wrapper>
        <ContentWrapper openWelcome={openWelcome}>
          <Routes>
            <Route
              path="/about"
              exsact
              element={
                <AboutMe
                  setAudioSound={setAudioSound}
                  activatemenu={activatemenu}
                  setOpenWelcome={setOpenWelcome}
                />
              }
            />
            <Route
              path="/contatc"
              exsact
              element={<Contatc setOpenWelcome={setOpenWelcome} />}
            />
            <Route
              path="/mywork"
              exsact
              element={
                <MyWork
                  setAudioSound={setAudioSound}
                  setOpenWelcome={setOpenWelcome}
                />
              }
            />
            <Route
              path="/mywork/musicschoolnotes"
              exsact
              element={<MusicSchoolNotes setOpenWelcome={setOpenWelcome} />}
            />
            <Route
              path="/mywork/smartbook"
              exsact
              element={<SmartBook setOpenWelcome={setOpenWelcome} />}
            />
            <Route
              path="/mywork/embrk"
              exsact
              element={<Embrk setOpenWelcome={setOpenWelcome} />}
            />
          </Routes>
        </ContentWrapper>
        <Bottom openWelcome={openWelcome} />
      </Body>
    </BrowserRouter>
  );
}

export default App;

// FIXME: clean console log
// FIXME: Ant send Button uzdeti laiko garsa
