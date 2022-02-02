import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

export const Wrapper = styled.section`
  width: 100%;
`;
export const IntroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Headers = styled.p`
  letter-spacing: 0.2rem;
  font-size: ${(props) => props.theme.fontSize.p2};
  position: relative;
  z-index: -1;
  color: ${(props) => props.theme.color.forth};
  opacity: 1;
  margin-top: ${(props) => props.theme.margin.small};
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
export const ElementsThreeD = styled(Headers)`
  margin-top: unset;
`;
export const Img = styled.img`
  width: 45%;
  margin-top: ${(props) => props.theme.margin.smaller};

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
  margin-top: ${(props) => props.theme.margin.smaller};
`;

export const HeaderWrapper = styled.div`
  margin-top: ${(props) => props.theme.margin.small};

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
// testamonial

export const WrapperTestamonial = styled.section`
  margin-top: ${(props) => props.theme.margin.smaller};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-shadow: ${(props) => props.theme.boxShadow.grey};
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    width: 37%;
    justify-content: flex-start;
  }
`;
export const TextWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  @media (min-width: 768px) {
    width: 78%;
  }
`;

export const Star = styled(AiFillStar)`
  font-size: 1.5rem;
  color: #e8d523;
  margin-left: 0.3rem;
`;

export const WrapperClient = styled.div`
  margin-top: 0.5rem;
`;

export const Name = styled(Description)`
  text-indent: 0;
  margin-top: 0;
  font-weight: 500;
`;
export const Mobile = styled(Name)``;

export const Comment = styled(Description)`
  margin-top: 0;
`;
export const StarsWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

// link to olgos websites

export const WrapperLink = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.margin.smaller};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginPassword = styled.div`
  display: flex;
`;
export const LoginPasswordText = styled(Description)`
  margin: 0;
  padding: 0;
  text-indent: 0;
  width: unset;
`;
export const NamePassword = styled(Description)`
  font-weight: 600;
  margin: 0;
  padding: 0;
  text-indent: 0;
  /* color: red; */
  width: unset;
  @media (min-width: 320px) {
    margin-left: calc(1rem + 0.5rem);
  }
`;

export const LinkToWeb = styled.a`
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSize.p};
  letter-spacing: 0.1rem;
  line-height: ${(props) => props.theme.lineHeight.one};
  opacity: 1;
  color: ${(props) => props.theme.color.forth};
  margin-top: 1rem;
  margin-bottom: 4rem;
  transition: all ease-in-out 0.2s;
  &:hover {
    color: ${(props) => props.theme.color.eigth};
  }
`;

export const LinkWrapper = styled.div`
  /* margin-top: ${(props) => props.theme.margin.smaller}; */

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
