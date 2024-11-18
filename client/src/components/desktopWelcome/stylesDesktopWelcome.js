import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.section)`
  /* background: green; */
  /* max-width: 20rem; */
  margin-left: -21rem;
  display: none;
  @media (min-width: 760px) {
    display: block;
  }
  @media (min-width: 1024px) {
    margin-left: -31rem;
  }
  @media (min-width: 1440px) {
    margin-left: -35rem;
  }
  @media (min-width: 2556px) {
    margin-left: -40rem;
  }
  @media (min-width: 3500px) {
    margin-left: -45rem;
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
  @media (min-width: 2556px) {
    max-width: 25rem;
  }
`;

export const P = styled.p`
  font-size: ${(props) => props.theme.fontSize.p1};
  line-height: 2rem;
  letter-spacing: 0.1rem;
  max-height: 200px;
  color: ${(props) => props.theme.color.forth};
`;
