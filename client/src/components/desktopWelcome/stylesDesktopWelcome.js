import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  /* background: green; */
  max-width: 20rem;
  margin-left: -21rem;

  @media (max-width: 760px) {
    display: none;
  }
`;
export const WrapperH1 = styled.div`
  /* background: brown; */
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize.h1};

  font-weight: 800;
  line-height: 3.6rem;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.color.forth};
`;

export const WrapperText = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 20rem;
`;

export const P = styled.p`
  font-size: ${(props) => props.theme.fontSize.p2};
  line-height: 2rem;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.color.forth};
`;
