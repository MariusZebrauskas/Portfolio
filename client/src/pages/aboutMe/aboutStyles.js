import styled from 'styled-components';
import { FaReact, FaSass, FaNodeJs, FaLanguage } from 'react-icons/fa';
import {
  SiStyledcomponents,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiHeroku,
  SiGreensock,
} from 'react-icons/si';
import { MdOutlineSchool } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { BiLayerPlus } from 'react-icons/bi';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutMeH1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize.h1b};
  letter-spacing: ${(props) => props.theme.letterSpacing.small};
  color: ${(props) => props.theme.color.forth};
`;
export const ResponsiveWebsitesWrapper = styled.section`
  margin-top: ${(props) => props.theme.margin.small};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ResponsiveWebsites = styled.p`
  letter-spacing: 0.2rem;
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
export const Description = styled.p`
  margin-top: ${(props) => props.theme.margin.smaller};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.p};
  letter-spacing: 0.1rem;
  text-align: justify;
  text-indent: 2rem;
  line-height: 1.5rem;
  opacity: 0;
  color: ${(props) => props.theme.color.forth};
`;

export const TechnologiesWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.margin.small};
`;

export const H1TechnologiesIUse = styled(ResponsiveWebsites)``;

export const IconsWrapper = styled.section`
  margin-top: ${(props) => props.theme.margin.smaller};

  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;
export const WrapperFrontBack = styled.section`
  width: 100%;
  display: flex;
`;
// front

export const ReactIcon = styled(FaReact)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const StyledomponentsIcon = styled(SiStyledcomponents)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const FramerMotionIcon = styled(SiFramer)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const HTML5Icon = styled(SiHtml5)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const Css3Icon = styled(SiCss3)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const SassIcon = styled(FaSass)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const JSIcon = styled(SiJavascript)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
// back
export const NodeJSIcon = styled(FaNodeJs)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const ExpressIcon = styled(SiExpress)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const MongoIcon = styled(SiMongodb)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const FireBaseIcon = styled(SiFirebase)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const GitHubIcon = styled(SiGithub)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const HerokuIcon = styled(SiHeroku)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;

export const IconHeder = styled.i`
  color: ${(props) => props.theme.color.forth};
  letter-spacing: 0.15rem;
  opacity: 0;
`;

export const Front = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 100%;
    /* border-right: 0.125rem dashed #3333;
    transition:border-right 5s ease-in; */
  }
`;
export const Back = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 100%;
  }
`;
export const IconWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 100%;
  }
`;
export const SingleIconWrapper = styled.div`
  margin-top: ${(props) => props.theme.margin.smaller};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 0;
`;
export const DoubleIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const SingleIconHeader = styled.h4`
  color: ${(props) => props.theme.color.forth};
`;
export const OtherInfoWrapper = styled(TechnologiesWrapper)`
  margin-bottom: 10rem;
`;
export const OtherInfoHeader = styled(ResponsiveWebsites)``;

export const OtherWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const OtherSingleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.margin.smaller};
`;
export const OtherSingleDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const OtherP = styled.p`
  letter-spacing: 0.125rem;
  line-height: 1.7rem;
  color: ${(props) => props.theme.color.forth};
`;
export const OtherI = styled.i`
  letter-spacing: 0.125rem;
  line-height: 1.7rem;
  color: ${(props) => props.theme.color.forth};
`;

export const GymIcon = styled(CgGym)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const LanguagesIcon = styled(FaLanguage)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const MotoIcon = styled(BiLayerPlus)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
  margin-top: ${(props) => (props.last ? '1.5rem' : null)};
  @media (min-width: 375px) {
    margin-top: 0;
  }
`;
export const EducationIcon = styled(MdOutlineSchool)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
export const GsapIcon = styled(SiGreensock)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.fifth};
`;
