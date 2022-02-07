import styled from 'styled-components';
import { RiComputerLine } from 'react-icons/ri';
import { ImOffice } from 'react-icons/im';
import { SiFreelancer } from 'react-icons/si';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.h1`
  font-size: ${(props) => props.theme.fontSize.h1b};
  letter-spacing: ${(props) => props.theme.letterSpacing.small};
  color: ${(props) => props.theme.color.forth};
  opacity: 0;
`;

export const H1 = styled.p`
  letter-spacing: 0.2rem;
  font-size: ${(props) => props.theme.fontSize.p2};
  position: relative;
  z-index: -1;
  color: ${(props) => props.theme.color.forth};

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
  @media (min-width: 550px) {
    padding-right: 0.6em;
  }
`;

export const H12 = styled(H1)`
  margin-top: 0.3rem;
  @media (min-width: 550px) {
    margin-top: 0;
  }
`;
export const H14 = styled(H1)`
  margin-top: ${(props) => props.theme.margin.small};
  opacity: 0;
`;
export const Ofice = styled(ImOffice)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.forth};
`;
export const Freelance = styled(SiFreelancer)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.forth};
`;
export const Remote = styled(RiComputerLine)`
  font-size: ${(props) => props.theme.fontSize.icon};
  color: ${(props) => props.theme.color.forth};
`;

export const WrapperHeader = styled.div`
  opacity: 0;

  margin-top: ${(props) => props.theme.margin.small};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 550px) {
    flex-direction: row;
  }
`;

export const H1Connect = styled(H1)`
  padding: 0;
`;
export const WrapperIconConnect = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.icon};
  color: #334455;
  margin-top: ${(props) => props.theme.margin.smaller};
}
`;
export const GithubIcon = styled(FaGithub)``;
export const LinkedInIcon = styled(FaLinkedin)``;
export const Cv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 0.5rem;
  &:before {
    content: '';
    height: 40%;
    width: 30%;
    /* background-color: red; */
    position: absolute;
    top: -0.1rem;
    left: 0rem;
    border-left: 0.2rem solid ${(props) => props.theme.color.forth};
    border-top: 0.2rem solid ${(props) => props.theme.color.forth};
  }
  &:after {
    content: '';
    height: 40%;
    width: 30%;
    /* background-color: red; */
    position: absolute;
    right: -0rem;
    bottom: 0;
    border-right: 0.2rem solid ${(props) => props.theme.color.forth};
    border-bottom: 0.2rem solid ${(props) => props.theme.color.forth};
  }
`;

export const P = styled.p`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.p};
  letter-spacing: 0.1rem;
  text-align: justify;
  line-height: ${(props) => props.theme.lineHeight.one};
  margin-top: 0.5rem;
  opacity: 1;
  color: ${(props) => props.theme.color.forth};
`;

export const WrapperIconsMain = styled.div`
  margin-top: ${(props) => props.theme.margin.smaller};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
`;

export const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 375px) {
    display: ${(props) => (props.freelance ? 'none' : 'flex')};
  }
`;
export const IconWrapperHover = styled(IconWrapper)`
  opacity: 0;

  padding: 0.5rem 0.7rem;
  margin-top: ${(props) => (props.mt ? props.mt : null)};
  &:hover,
  &:hover p,
  &:hover div:before,
  &:hover div:after {
    cursor: pointer;
    transition: color ease-in-out 0.2s, border-color ease-in-out 0.2s, transform ease-in-out 0.2s;
    color: #7089a1;
    border-color: #7089a1;
  }
`;
// form

export const FormSubmit = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: ${(props) => props.theme.margin.smaller};
  margin-bottom: 2rem;
`;

export const NameAndEmail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  border-bottom: 1px solid #dadada;
  margin-bottom: 1rem;
  background: ${(props) =>
    props.nameInput === undefined && props.emailInput === undefined ? 'inherit' : '#e8f0fe'};
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.fontSize.small};
  &::placeholder {
    /* color: ${(props) => props.theme.color.forth}; */
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSize.p};
    letter-spacing: 0.07rem;
  }
  color: ${(props) => props.theme.color.forth};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.p2};

  @media (min-width: 768px) {
    margin-right: ${(props) => (props.name ? '5rem' : null)};
  }
`;

export const TextArea = styled.textarea`
  opacity: 0;

  min-width: 100%;
  max-width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  border-bottom: 1px solid #dadada;
  margin-bottom: 1rem;
  background: inherit;
  background: ${(props) => (props.messageInput === undefined ? 'inherit' : '#e8f0fe')};
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.fontSize.small};
  &::placeholder {
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSize.p};
    letter-spacing: 0.07rem;
  }
  color: ${(props) => props.theme.color.forth};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.p2};

  @media (min-width: 768px) {
    margin-right: ${(props) => (props.name ? '5rem' : null)};
  }
`;

export const PButon = styled.p`
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.p};
  letter-spacing: 0.1rem;
  text-align: justify;
  line-height: ${(props) => props.theme.lineHeight.one};
  position: relative;
  z-index: 5;
  opacity: 1;
  color: ${(props) => props.theme.color.forth};
  transition: color ease-in-out 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  opacity: 0;

  padding: 0.5rem 0.75rem;
  width: 100%;
  border: none;
  box-shadow: 1px 3px 6px 0px #615a5a42;
  border: 0.1875rem solid ${(props) => props.theme.color.forth};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.color.forth};
    z-index: 1;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform ease-in 0.2s, opacity ease-in-out 0.2s;
  }

  &:hover:before {
    opacity: 1;
    transform: translateX(0);
  }
  &:hover ${PButon} {
    color: ${(props) => props.theme.color.primary};
  }
`;

// message been sent

export const MessageBeenSendWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.theme.margin.small};
  margin-bottom: 18rem;
`;

export const TextBeenSend = styled.h4`
  opacity: 0;
  color: ${(props) => props.theme.color.forth};
  font-size: ${(props) => props.theme.fontSize.p3};
`;

export const MailFly = styled(MdOutlineMailOutline)`
  font-size: calc(1.8rem + 0.5vw);
  color: ${(props) => props.theme.color.forth};

  position: absolute;
  opacity: 0;
  transform: translate(0rem, 7rem) scale(0) rotate(45deg);
`;

export const WrapperCv = styled.div`
  position: fixed;
  background-color: #000000fa;
  width: 100%;
  height: 100vh;
  top: 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: -1000;
`;
export const ImgCv = styled.img`
  width: 100%;
  max-width: 50rem;
  position: relative;
  z-index: 500;
  opacity: 0;

  @media (min-width: 653px) and (max-height: 375px) {
    /* galaxy fold, SE */
    width: 45%;
  }
  @media (min-width: 720px) and (max-height: 540px) {
    /* surface duo */
    width: 70%;
  }
  @media (min-width: 740px) and (max-height: 414px) {
    /* ihone XR,12 Pro, galaxy s8, */
    width: 40%;
  }

  @media (min-width: 1024px) and (max-height: 820px) {
    /* Nest hub + max */
    width: 50%;
  }
`;

export const WrapperX = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 90000;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.primary};
`;

export const X = styled(IoMdClose)`
  font-size: ${(props) => props.theme.fontSize.icon};
  transition: transform ease-in-out 1s, color ease-in-out 0.2s;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.third};
    transform: rotate(360deg);
  }
`;
