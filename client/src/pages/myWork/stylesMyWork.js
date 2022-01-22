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
`;

export const WrapperCompleateProjects = styled.section`
  margin-top: ${(props) => props.theme.margin.small};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SliderWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: -100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14151363;
  opacity: 0;
  transition: bottom ease-in-out 0.2s, opacity ease-in-out 0.2s;
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
  background: red;

  &:hover ${SliderWrapper} {
    bottom: 0;
    opacity: 1;
    transition: bottom ease-in-out 0.2s, opacity ease-in-out 0.4s;
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
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.color.primary};
  /* -webkit-text-stroke: 1px white; */
  /* background-color: green; */
  padding: 0.5rem 0.7rem;
  border-radius: 0.2rem;
  font-weight: 400;
  border: 1px solid #c4c5b336;
  background: #3d3f40ad;
  text-shadow: 1px 2px 0px #000000;
`;

export const P = styled.p`
  margin-top: ${(props) => props.theme.margin.smaller};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.p};
  letter-spacing: 0.1rem;
  text-align: justify;
  text-indent: 2rem;
  line-height: 1.5rem;
  opacity: 1;
  color: ${(props) => props.theme.color.forth};
`;

export const Header = styled.h4`
  margin-top: ${(props) => props.theme.margin.smaller2};
  letter-spacing: 0.1rem;
  font-size: ${(props) => props.theme.fontSize.p2};
  position: relative;
  z-index: -1;
  color: ${(props) => props.theme.color.forth};
  opacity: 1;

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
`;
