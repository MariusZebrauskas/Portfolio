import React, { useEffect } from 'react';
import { MailFly, MessageBeenSendWrapper, TextBeenSend } from './stylesContat';
import gsap from 'gsap';

const MessageBeenSend = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    gsap.fromTo(
      '.animateMessage',
      {
        opacity: 0,
        scale: 0,
      },
      {
        delay: 0.5,
        opacity: 1,
        scale: 1,
        ease: 'back.out(1.7)',
      }
    );
    tl.fromTo(
      '.animateMail',
      {
        rotate: 50,
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.5,
        delay: 2,
        opacity: 1,
        scale: 1,
        rotate: 0,
        ease: 'back.out(1.7)',
      }
    )
      .to('.animateMail', {
        delay: 1,
        duration: 3,
        x: 500,
        y: -500,
        opacity: 0,
        rotate: 360,
        ease: 'back.out(1.7)',
      })
      .to('.animateMail', {
        display: 'none',
      });
  }, []);
  return (
    <MessageBeenSendWrapper>
      <TextBeenSend className='animateMessage'>Thank you, your message has been send!</TextBeenSend>
      <MailFly className='animateMail' />
    </MessageBeenSendWrapper>
  );
};

export default MessageBeenSend;
