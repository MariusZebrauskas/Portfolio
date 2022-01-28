import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
`;
export const IntroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Headers = styled.h1`
  letter-spacing: 0.2rem;
  font-size: ${(props) => props.theme.fontSize.p2};
  position: relative;
  z-index: -1;
  color: ${(props) => props.theme.color.forth};
  opacity: 1;
  margin-top: ${(props) => (props.mt ? props.mt : null)};
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.4rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fdf854;
    z-index: -2;
  }
  @media (max-width: 280px) {
    font-size: ${(props) => props.theme.fontSize.small};
  }
`;

export const Img = styled.img`
  width: 45%;
  margin-top: 1rem;

  /* width: calc(7rem + 1vw); */
`;
export const ImgMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const TwoImages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Description = styled.p`
  margin-top: ${(props) => props.theme.margin.smaller};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.p};
  letter-spacing: 0.1rem;
  text-align: justify;
  text-indent: 2rem;
  line-height: ${(props) => props.theme.lineHeight.one};
  opacity: 1;
  color: ${(props) => props.theme.color.forth};
  width: 100%;
`;

export const DesignWrapper = styled(IntroWrapper)``;
export const BackEndWrapper = styled(IntroWrapper)``;
export const ConclusionWrapper = styled(IntroWrapper)``;

export const FrontEndWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImgFront = styled.img`
  width: 100%;
  margin-top: 1rem;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
