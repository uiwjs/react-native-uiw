import React, { Component } from 'react';
import { Modal as RNModal, ModalProps as RNModalProps } from 'react-native';

export interface ModalProps extends RNModalProps { }

export default class Modal extends Component<ModalProps> {
  render() {
    console.log('this.props:', this.props)
    return (
      <RNModal {...this.props} />
    );
  }
}
