import styled from 'styled-components';

export const Body = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  @media (min-width: 768px) and (min-height: 660px) {
    width: 90%;
    margin: ${(props) =>
      props.openWelcome === 'out'
        ? props.theme.margin.top
        : props.openWelcome === 'in'
        ? props.theme.margin.top
        : props.openWelcome === 'deep'
        ? '8rem'
        : null};
  }
  transition: margin ease-in 0.3s;
`;
export const ContentWrapper = styled.section`

  margin: ${(props) => (props.openWelcome === 'deep' ? '46vh 0 0 0' : 0)};
  width: 100%;
  padding: 2rem;
  max-width: 800px;
  @media (min-width: 653px) and (max-height: 280px) {
    /* galaxy fold */
    margin: ${(props) => (props.openWelcome === 'deep' ? '64vh 0 0 0' : 0)};
  }

  @media (min-width: 844px) and (max-height: 390px) {
    /* ihone 12 */
    margin: ${(props) => (props.openWelcome === 'deep' ? '-8vh 0 0 0' : 0)};
  }
 
  @media (min-width: 851px) and (max-height: 412px) {
    /* pixel 5 + galaxy 20 ultra */
    margin: ${(props) => (props.openWelcome === 'deep' ? '-15vh 0 0 0' : 0)};
  }

  /* FIXME: IPAD */
  @media (min-width: 768px) and (max-height: 1368px) {
    /* pixel 5 + galaxy 20 ultra */
    margin: ${(props) => (props.openWelcome === 'deep' ? '0vh 0 0 0' : 0)};
  }
  @media (min-width: 2560px) {
    /* pixel 5 + galaxy 20 ultra */
    margin: ${(props) => (props.openWelcome === 'deep' ? '4vh 0 0 0' : 0)};
  }
`;
