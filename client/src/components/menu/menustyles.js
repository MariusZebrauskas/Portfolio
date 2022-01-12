import styled, { keyframes } from 'styled-components';
import { AiOutlineFileDone, AiOutlinePaperClip, AiOutlineMail } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';
export const Wrapper = styled.nav`
  position: absolute;
  bottom: ${(props) => props.theme.padding.small};
  left: ${(props) => props.theme.padding.small};
  display: flex;
  align-items: center;
  width: 90%;
  @media (min-width: 768px) {
    opacity: ${(props) => (props.activeallmenu === true? 1 : 0)};
  }
`;

const puls = keyframes`
 0% {opacity: .8; border-width:.5rem;}
 100% { transform: scale(5) rotate(50deg);  opacity: 0; border-width:0.05rem;}
`;

export const Li = styled.li`
  list-style-type: none;
  color: ${(props) =>
    props.activeabout
      ? '#faff32'
      : props.activecontact
      ? '#faff32'
      : props.activework
      ? '#faff32'
      : props.theme.color.primary};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: ${(props) => (props.noPadding ? null : props.theme.padding.small)};
  position: relative;
  cursor: pointer;
  z-index: 2;

  &:before {
    content: '';
    width: 1rem;
    height: 1rem;
    border-style: solid;
    border-color: #4000000;
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    top: 0.5rem;
    right: 0;
    left: ${(props) =>
      props.aboutLeft ? '1.7rem' : props.contact ? '1.2rem' : props.myWork ? '1.4rem' : null};
    bottom: 0;
    animation: ${(props) => (props.click ? puls : null)} 0.5s 1;
    animation-timing-function: ease-in-out;
    color: #e9ebed;
  }
`;
export const AboutMeIcon = styled(AiOutlineFileDone)`
  font-size: ${(props) => props.theme.fontSize.icon};
`;
export const MyWorkIcon = styled(AiOutlinePaperClip)`
  font-size: ${(props) => props.theme.fontSize.icon};
`;
export const ContatcIcon = styled(AiOutlineMail)`
  font-size: ${(props) => props.theme.fontSize.icon};
`;
export const P = styled.p`
  font-size: ${(props) => props.theme.fontSize.p};
  letter-spacing: ${(props) => props.theme.letterSpacing.p};
  margin-top: ${(props) => props.theme.padding.smallest};
`;

export const Close = styled(MdOutlineClose)`
  position: absolute;
  font-size: 2rem;
  top: 2rem;
  right: 2rem;
  z-index: 3;
  opacity: ${(props) => (props.imghandler === 'small' ? 1 : 0)};
  transition: opacity ease-in-out 0.6s, transform ease-in-out 0.6s;
  cursor: ${(props) => (props.imghandler === 'small' ? 'pointer' : null)};
  &:hover {
    transform: rotate(300deg);
  }
`;
