import styled from 'styled-components';

const boxHeight = '270px';
const boxWidth = '350px';

export const Img = styled.section`
  background: url('https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/img%2FIMG_1549%20(1).JPG?alt=media&token=7c94b898-713b-4bab-a050-71ede1fbfb5e')
    no-repeat center center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: ${(props) => (props.imghandler === 'large' ? '100vh' : '45vh')};
  transition: height ease-in-out 0.7s;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #0045933b;
    position: absolute;
  }
  @media (min-width: 768px) {
    min-height: ${boxHeight};
    max-height: ${boxHeight};
    max-width: ${boxWidth};
    min-width: ${boxWidth};

    transform: ${(props) =>
      props.openWelcome === 'out'
        ? 'rotateX(-60deg) rotateZ(-40deg) translateY(10rem) translateX(12rem)'
        : props.openWelcome === 'in'
        ? 'translateX(0px) scale(2)'
        : props.openWelcome === 'deep'
        ? 'translateX(0px) scale(2.03, 2) '
        : null};
    transform-style: preserve-3d;
    box-shadow: -65px 60px 50px #0007;
    transition: ${(props) =>
      props.openWelcome === 'out'
        ? 'transform ease-out .5s, box-shadow 0.3s ease-out 0s;'
        : props.openWelcome === 'in'
        ? 'transform ease-in 1s, box-shadow 0.3s ease-in-out 0s;'
        : props.openWelcome === 'deep'
        ? 'transform ease-in-out .3s, box-shadow 0.3s ease-in-out 0s;'
        : 'all eas-in-out 2s'};

    &:hover {
      transform: ${(props) =>
        props.openWelcome === 'out'
          ? 'rotateX(-58deg) rotateZ(-39deg) translateY(10rem) translateX(11rem)'
          : null};
      box-shadow: -45px 40px 50px #0009;

      transition: transform ease-in-out 1s, box-shadow 1s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0.2s;
      
      cursor: ${(props) => (props.openWelcome === 'out' ? 'pointer' : null)};
    }
  }
`;
export const Bottom = styled.div`
  height: 0.6rem;
  width: ${boxWidth};
  background: radial-gradient(
    circle,
    rgba(82, 93, 116, 1) 0%,
    rgba(120, 124, 152, 0.9290091036414566) 87%,
    rgba(120, 124, 152, 1) 100%
  );
  position: absolute;
  color: white;
  bottom: 0;
  transform: rotateX(90deg) translateX(4px) translateY(8px);
  opacity: ${(props) => (props.openWelcome === 'out' ? 1 : 0)};
  transition: opacity ease-in-out 1s;
`;
export const Left = styled.div`
  height: 270px;
  width: 0.6rem;
  background: radial-gradient(
    circle,
    rgba(82, 93, 116, 1) 0%,
    rgba(120, 124, 152, 0.9290091036414566) 87%,
    rgba(120, 124, 152, 1) 100%
  );
  position: absolute;
  color: white;
  z-index: 7;
  transform: rotateY(90deg) translateX(-9px) translateY(-5.7px);
  opacity: ${(props) => (props.openWelcome === 'out' ? 1 : 0)};
  transition: opacity ease-in-out 1s;
`;
