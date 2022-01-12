import styled from 'styled-components';

export const H1 = styled.h1`
  color: white;
  font-weight: 400;
  color: ${(props) => props.theme.color.primary};
  letter-spacing: ${(props) => props.theme.letterSpacing.big};
`;

export const WrapperWelcome = styled.article`
  position: absolute;
  z-index: 2;
  width: 100%;
  @media (min-width: 768px) {
    transform: scale(50%);
    top: -3.9rem;
    left: -4rem;
  }
`;
export const WrapperH1 = styled.div`
  padding-left: ${(props) => props.theme.padding.small};
  padding-top: ${(props) => props.theme.padding.small};
  padding-bottom: ${(props) => props.theme.padding.smaller};
  display: flex;
  @media (min-width: 768px) {
    padding-left: 0;
    transition: opacity ease-in-out .3s 0.3s;
    opacity: ${(props) =>
      props.openWelcome === 'out' ? 0 : props.openWelcome === 'in' ? 1 : null};
  }
`;
export const NameWrapper = styled.div`
  background-color: #334455;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 1rem;
  width: 13rem;
  padding: 0.2rem 0.4rem;
`;
export const P = styled.p`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: ${(props) => props.theme.letterSpacing.big};
  width: 80%;
  padding-left: ${(props) => props.theme.padding.small};
  padding-right: ${(props) => props.theme.padding.small};
  padding-bottom: ${(props) => (props.paddingBottom ? props.theme.padding.smaller : null)};
  line-height: ${(props) => props.theme.lineHeight.big};

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.p};
    font-weight: ${(props) => props.theme.fontWeight.p};
    letter-spacing: ${(props) => props.theme.letterSpacing.p};
    padding: 0rem 2rem 0 0;
  }
`;
export const P2 = styled(P)`
  letter-spacing: ${(props) => props.theme.letterSpacing.mid};
  line-height: ${(props) => props.theme.lineHeight.mid};
  /* color: ${(props) => props.theme.color.primary}; */
`;

export const SecondPar = styled.div`
  @media (min-width: 768px) {
    transition: opacity ease-in-out .3s 0.6s;
    opacity: ${(props) =>
      props.openWelcome === 'out' ? 0 : props.openWelcome === 'in' ? 1 : null};
    /* opacity: 0; */
    /* transform: scale(50%); */
  }
`;
export const ThirdPar = styled.div`
  @media (min-width: 768px) {
    opacity: 0;

  }
`;
