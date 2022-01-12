import DesktopWelcome from './components/desktopWelcome/DesktopWelcome';
import Main from './components/main/Main';
import { Body, Wrapper } from './stylesApp';
import { useState, useEffect } from 'react';

function App() {
  // controls img scale + center
  const [openWelcome, setOpenWelcome] = useState('out');

  return (
    <Body>
      <Wrapper openWelcome={openWelcome}>
        <DesktopWelcome openWelcome={openWelcome} />
        <Main openWelcome={openWelcome} setOpenWelcome={setOpenWelcome} />
      </Wrapper>
    </Body>
  );
}

export default App;
