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

  @media (min-width: 280px) {
    left: 25px;
  }
  @media (min-width: 768px) and (min-height: 660px) {
    transform: scale(50%);
    bottom: -0.5rem;
    left: -5rem;
    width: 100%;
    z-index: 5;
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
  padding-right: ${(props) => (props.contact ? null : props.theme.padding.small)};
  position: relative;
  z-index: 999;
  cursor: pointer;
  /* animation */
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
      props.aboutLeft ? '1.7rem' : props.contact ? '1.2rem' : props.myWork ? '1.5rem' : null};
    bottom: 0;
    animation: ${(props) => (props.click ? puls : null)} 0.5s 1;
    animation-timing-function: ease-in-out;
    color: #e9ebed;
    @media (max-width: 280px) {
      left: ${(props) =>
        props.aboutLeft ? '1.1rem' : props.contact ? '.6rem' : props.myWork ? '.8rem' : null};
    }
    @media (min-width: 768px) and (min-height: 660px) {
      left: ${(props) =>
        props.aboutLeft ? '1.7rem' : props.contact ? '2.7rem' : props.myWork ? '1.8rem' : null};
    }
    @media (min-width: 1024px) {
      left: ${(props) =>
        props.aboutLeft ? '1.75rem' : props.contact ? '2.7rem' : props.myWork ? '1.8rem' : null};
    }
    @media (min-width: 2560px) {
      left: ${(props) =>
        props.aboutLeft ? '1.85rem' : props.contact ? '2.7rem' : props.myWork ? '1.8rem' : null};
    }
  }
  @media (min-width: 768px) and (min-height: 660px) {
    min-width: 6.5rem;
    opacity: ${(props) => (props.openWelcome === 'in' || props.openWelcome === 'deep' ? 1 : 0)};
    transition: ${(props) =>
      (props.openWelcome === 'in' || props.openWelcome === 'deep') && props.about
        ? 'opacity ease-in-out .3s'
        : (props.openWelcome === 'in' || props.openWelcome === 'deep') && props.myWork
        ? 'opacity ease-in-out .3s .3s'
        : (props.openWelcome === 'in' || props.openWelcome === 'deep') && props.contact
        ? 'opacity ease-in-out .3s .6s'
        : null};
  }
`;
export const AboutMeIcon = styled(AiOutlineFileDone)`
  font-size: ${(props) => props.theme.fontSize.icon};
  @media (max-width: 280px) {
    min-width: 4.5rem;
    margin-left: -0.7rem;
  }
`;
export const MyWorkIcon = styled(AiOutlinePaperClip)`
  font-size: ${(props) => props.theme.fontSize.icon};
  @media (max-width: 280px) {
    min-width: 4.5rem;
    margin-left: -1.1rem;
  }
`;
export const ContatcIcon = styled(AiOutlineMail)`
  font-size: ${(props) => props.theme.fontSize.icon};
  @media (max-width: 280px) {
    min-width: 4.5rem;
    margin-left: -1.5rem;
  }
`;
export const P = styled.p`
  font-size: ${(props) => props.theme.fontSize.p};
  letter-spacing: ${(props) => props.theme.letterSpacing.p};
  margin-top: ${(props) => props.theme.padding.smallest};
  @media (max-width: 280px) {
    min-width: 4.5rem;
    margin-left: -0.7rem;
  }
`;

export const Close = styled(MdOutlineClose)`
  position: absolute;
  font-size: 2rem;
  top: ${(props) => (props.openwelcome === 'deep' ? '1rem' : '1rem')};
  right: ${(props) => (props.openwelcome === 'deep' ? '1rem' : '1rem')};
  z-index: 99999;
  opacity: ${(props) =>
    props.openwelcome === 'in' || props.openwelcome === 'deep'
      ? 1
      : props.openwelcome === 'out'
      ? 0
      : null};
  transform: ${(props) =>
    props.openwelcome === 'in' || props.openwelcome === 'deep'
      ? 'scale(50%)'
      : props.openwelcome === 'out'
      ? null
      : null};
  transition: opacity ease-in-out 0.6s, transform ease-in-out 0.6s;

  cursor: ${(props) =>
    props.imghandler === 'small' || props.openwelcome === 'in' || props.openwelcome === 'deep'
      ? 'pointer'
      : null};
  &:hover {
    transform: ${(props) =>
      props.openwelcome === 'in' || props.openwelcome === 'deep'
        ? 'scale(50%) rotate(300deg)'
        : props.openwelcome === 'out'
        ? null
        : null};
    transition: transform ease-in-out 0.3s;
  }

  @media (min-width: 280px) {
    right: 1rem;
  }
  @media (min-width: 320px) {
    right: 3rem;
  }
  @media (min-width: 320px) {
    right: 2rem;
  }
  @media (min-width: 375px) {
    right: 1rem;
  }
  @media (min-width: 412px) {
    right: 1rem;
  }

  @media (min-width: 653px) and (min-height: 280px) {
    right: 1rem;
  }
  @media (min-width: 720px) and (min-height: 540px) {
    right: 1rem;
  }
  @media (min-width: 740px) and (min-height: 360px) {
    right: 1rem;
  }
  @media (min-width: 768px) and (min-height: 660px) {
    font-size: 2rem;
  }
  @media (min-width: 820px) {
    font-size: 2rem;
    right: 1rem;
  }
`;
