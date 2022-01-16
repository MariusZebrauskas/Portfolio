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
  margin: 46vh 0 0 0;
  width: 100%;
  padding: 2rem;

  @media (min-width: 768px) {
    width: 710.15px;
    padding: 1rem;
    margin: 3rem 0 0 0;
  }
  @media (min-width: 1024px) {
    margin: 4rem 0 0 0;
  }
  @media (min-width: 1440px) {
    margin: 5rem 0 0 0;
  }
  @media (min-width: 2456px) {
    margin: 6rem 0 0 0;
  }
`;
