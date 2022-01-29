import styled from 'styled-components';
import { ImOffice } from 'react-icons/im';

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
`;

export const H1 = styled.p`
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

export const H12 = styled(H1)`
  margin-top: 0.3rem;
`;

export const Ofice = styled(ImOffice)`
  color: red;
`;
export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
