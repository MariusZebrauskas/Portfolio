import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.margin.smaller};
  overflow: hidden;
  padding: 0 1.5rem;
  @media (min-width: 600px){

      padding: 0 3rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  min-width: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
