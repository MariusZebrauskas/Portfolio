import styled from 'styled-components';

const boxHeight = '270px';
const boxWidth = '350px';

export const Img = styled.section`
  background: url('https://firebasestorage.googleapis.com/v0/b/portfolio-c9396.appspot.com/o/img%2FIMG_1549%20(1).JPG?alt=media&token=7c94b898-713b-4bab-a050-71ede1fbfb5e')
    no-repeat center center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: ${(props) => (props.openWelcome === 'out' ? '100vh' : '45vh')};
  transition: height ease-in-out 0.7s;
  @media (max-height: 350px) {
    /* small phone horizontal */
    height: ${(props) => (props.openWelcome === 'out' ? '100vh' : '65vh')};
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #0045933b;
    position: absolute;
  }
  @media (min-width: 768px) and (min-height: 660px) {
    /* plancet or phones  with bigger screens  */
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
    /* box-shadow: -65px 60px 50px #0007; */
    box-shadow: ${(props) =>
      props.openWelcome === 'out' ? '-45px 40px 50px #0006' : '-45px 30px 150px #00000040'};
    transition: ${(props) =>
      props.openWelcome === 'out'
        ? 'transform ease-out .5s, box-shadow 0.3s ease-in-out;'
        : props.openWelcome === 'in'
        ? 'transform ease-in 1s, box-shadow 0.3s ease-in-out;'
        : props.openWelcome === 'deep'
        ? 'transform ease-in-out .3s, box-shadow 0.3s ease-in-out;'
        : 'all eas-in-out 2s'};

    &:hover {
      transform: ${(props) =>
        props.openWelcome === 'out'
          ? 'rotateX(-58deg) rotateZ(-39deg) translateY(10rem) translateX(11rem)'
          : null};
      box-shadow: ${(props) => (props.openWelcome === 'out' ? '-45px 40px 50px #0007' : null)};

      transition: transform ease-in-out 1s, box-shadow 1s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0.2s;

      cursor: ${(props) => (props.openWelcome === 'out' ? 'pointer' : null)};
    }
  }
  @media (min-width: 1440px) and (min-height: 660px) {
    transform: ${(props) =>
      props.openWelcome === 'out'
        ? 'rotateX(-60deg) rotateZ(-40deg) translateY(15rem) translateX(15rem)'
        : props.openWelcome === 'in'
        ? 'translateX(0px) scale(2)'
        : props.openWelcome === 'deep'
        ? 'translateX(0px) scale(2.03, 2) '
        : null};
    transform: ${(props) =>
      props.openWelcome === 'out'
        ? 'rotateX(-58deg) rotateZ(-39deg) translateY(10rem) translateX(14.5rem)'
        : null};
    &:hover {
      transform: ${(props) =>
        props.openWelcome === 'out'
          ? 'rotateX(-58deg) rotateZ(-36deg) translateY(10rem) translateX(14rem)'
          : null};
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
