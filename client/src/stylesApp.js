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
  max-width: 800px;

  @media (min-width: 280px) {
    margin: 20rem 0 0 0;
  }
  @media (min-width: 320px) {
    margin: 26rem 0 0 0;
  }
  @media (min-width: 360px) {
    margin: 21rem 0 0 0;
  }
  @media (min-width: 375px) {
    margin: 26rem 0 0 0;
  }
  @media (min-width: 390px) {
    margin: 25rem 0 0 0;
  }
  @media (min-width: 412px) {
    margin: 26rem 0 0 0;
  }
  @media (min-width: 540px) {
    margin: 21rem 0 0 0;
  }
  @media (min-width: 653px) and (max-height: 280px) {
    /* Galaxy Fold */
    margin: 12.5rem 0 0 0;
  }
  @media (min-width: 667px) and (max-height: 375px) {
    /* iphoneSE */
    margin: 12rem 0 0 0;
  }
  @media (min-width: 720px) and (max-height: 540px) {
    /* Surface Duo */
    margin: 17rem 0 0 0;
  }
  @media (min-width: 740px) and (max-height: 360px) {
    /* Surface Duo */
    margin: 11rem 0 0 0;
  }
  @media (min-width: 768px) {
    margin: 3rem 0 0 0;
  }
  @media (min-width: 844px) and (max-height: 390px) {
    /* iphone12 pro */
    margin: -4rem 0 0 0;
  }
  @media (min-width: 851px) and (max-height: 393px) {
    /* pixel 5 */
    margin: -4rem 0 0 0;
  }

  @media (min-width: 896px) and (max-height: 414px) {
    /* iphone XR */
    margin: -2rem 0 0 0;
  }
  @media (min-width: 1024px) {
    margin: 1rem 0 0 0;
  }
  @media (min-width: 1440px) {
    margin: 3rem 0 0 0;
  }
  @media (min-width: 2456px) {
    margin: 5rem 0 0 0;
  }
`;
