import styled from 'styled-components';
import pic from '../../img/musicnotes2.jpg';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const MyWorkH1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize.h1b};
  letter-spacing: ${(props) => props.theme.letterSpacing.small};
  color: ${(props) => props.theme.color.forth};
  opacity: 0;
`;

export const WrapperCompleateProjects = styled.section`
  margin-top: ${(props) => props.theme.margin.small};
  margin-bottom: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const P = styled.p`
  margin-top: ${(props) => props.theme.margin.smaller};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.p};
  letter-spacing: 0.1rem;
  text-align: justify;
  text-indent: 2rem;
  line-height: ${(props) => props.theme.lineHeight.one};

  opacity: 0;
  color: ${(props) => props.theme.color.forth};
`;
export const P2 = styled(P)`
  color: #e9ebed;
  /* color: #FCFF4D; */
  font-size: calc(0.7rem + 0.1vw);
  font-weight: 500;
  text-shadow: 2px 2px 2px #000000;
  margin: 0;
  text-align: center;
  width: 100%;
  text-indent: 0;
  opacity: 1;
  @media (min-width: 425px) {
    font-size: ${(props) => props.theme.fontSize.p};
    margin-top: 0.2rem;
  }
  @media (min-width: 768px) {
    margin-top: 0.3rem;
    font-size: 1rem;
  }
`;
export const SliderWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  /* bottom: -60%; */
  transform: translateY(100%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #141513c9;
  opacity: 1;
  transition: bottom ease-in-out 0.2s, opacity ease-in-out 0.2s, color ease-in-out 0.2s;
  &:hover ${P2} {
    transition: color ease-in-out 0.2s;
    color: #fcff4d;
  }
`;
export const OlgosWebImg = styled.div`
  background: url(${pic}) no-repeat center center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 10rem;
  /* &:hover > .blur {
    filter: blur(5px);
  } */
  /*
  &:hover ${SliderWrapper} {
    bottom: 0;
    opacity: 1;
    transition: bottom ease-in-out 0.2s, opacity ease-in-out 0.4s.;
  } */
  @media (min-width: 425px) {
    height: 15rem;
  }
  @media (min-width: 768px) {
    height: 20rem;
  }
`;

export const WrapperEachJobe = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: height ease-in-out 0.2s;
  width: 100%;
  opacity: 0;
`;
export const DescriotionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
`;

export const H4 = styled.h4`
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.color.primary};
  /* color: #FAFF32; */
  padding: 0.5em 1em;
  border-radius: 0.2rem;
  font-weight: 400;
  border: 1px solid #e8ee8836;
  background: #181816;
  /* background: #9A33FF; */
  text-shadow: 1px 2px 0px #000000;
  @media (min-width: 425px) {
    font-size: 1.05rem;
  }
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Header = styled.p`
  margin-top: ${(props) => props.theme.margin.smaller2};
  letter-spacing: 0.1rem;
  font-size: ${(props) => props.theme.fontSize.p2};
  position: relative;
  z-index: -1;
  color: ${(props) => props.theme.color.forth};
  opacity: 0;

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
export const PWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: -0.3rem;
  @media (min-width: 425px) {
    margin: 0;
  }
  @media (min-width: 425px) {
    margin: 1rem;
  }
`;
