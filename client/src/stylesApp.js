import styled from 'styled-components';

export const Body = styled.section`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin: 0 ${(props) => props.theme.margin.mainWrapper};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  @media (min-width: 768px) {
    width: 90%;
    margin: ${(props) =>
      props.openWelcome === 'out'
        ? props.theme.margin.top
        : props.openWelcome === 'in'
        ? props.theme.margin.top
        : props.openWelcome === 'deep'
        ? '8rem'
        : null};
  }
  transition: margin ease-in .3s;
`;
