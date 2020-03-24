import React from 'react';
import ToastContainer from './ToastContainer';
import RootSiblings from 'react-native-root-siblings';
import { IconsName } from '../Icon'

var id = 0;
var elements:any = [];


export interface ToastProps {
  type?: string;
  content: string;
  duration?: number;
  icon?: IconsName
}

function notice(
  content: string,
  type: 'info' | 'success' | 'warning' | 'error',
  duration = 2,
  icon?: IconsName
) {
  const addSibling = () => {
    let sibling = new RootSiblings(<ToastContainer style={{top: 100 + elements.length * 30}} icon={icon} content={content} type={type} duration={duration} />);
    id++;
    elements.push(sibling);
  };
  const destroySibling = () => {
    let lastSibling = elements.pop();
    lastSibling && lastSibling.destroy();
  };
  

  addSibling()

  setTimeout(() => {
    destroySibling()
  },duration * 1000)

}


export default {
  info(
    content: string,
    duration?: number,
    icon?: IconsName,
  ) {
    return notice(content, 'info', duration, icon);
  },
  success(
    content: string,
    duration?: number,
    icon?: IconsName,
  ) {
    return notice(content, 'success', duration, icon);
  },
  warning(
    content: string,
    duration?: number,
    icon?: IconsName,
  ) {
    return notice(content, 'warning', duration, icon);
  },
  error(
    content: string,
    duration?: number,
    icon?: IconsName,
  ) {
    return notice(content, 'error', duration, icon);
  },
}