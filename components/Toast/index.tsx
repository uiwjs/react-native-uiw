import React from 'react';
import ToastContainer from './ToastContainer';

function notice(
  content: string,
  type: string,
  duration = 2,
  onClose: (() => void) | undefined,
  mask = true,
) {
  // const key = Portal.add(
  //   <ToastContainer
  //     content={content}
  //     duration={duration}
  //     // onClose={onClose}
  //     type={type}
  //     // mask={mask}
  //     // onAnimationEnd={() => Portal.remove(key)}
  //   />,
  // );
  return <ToastContainer
    content={content}
    duration={duration}
    // onClose={onClose}
    type={type}
  // mask={mask}
  // onAnimationEnd={() => Portal.remove(key)}
  />;
}


export default {
  info(
    content: string,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'info', duration, onClose, mask);
  },
}