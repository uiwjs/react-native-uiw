import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextProps, Dimensions, TouchableOpacity } from 'react-native';
import Icon from '../Icon';
import { right } from './svg';
import MaskLayer from '../MaskLayer';

let MainHeight = Dimensions.get('window').height;
export interface EllipsisProps extends TextProps {
  children?: React.ReactNode;
  placeholder?: string;
  maxLen?: number;
}

export default function Ellipsis({ maxLen, children, placeholder, ...props }: EllipsisProps) {
  const [modalVisible, setModalVisible] = useState(false);
  // let content1 = Number(children.length);

  let content = children;
  if (maxLen && content && typeof content === 'string') {
    content = content.length > maxLen ? content.substr(0, maxLen) + placeholder : content;
  }

  return (
    <>
      <MaskLayer visible={modalVisible} onDismiss={() => setModalVisible(false)}>
        <View
          style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: MainHeight * 0.2,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 17 }}>{children}</Text>
        </View>
      </MaskLayer>

      <TouchableOpacity
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        onPress={() => setModalVisible(true)}
      >
        <Text {...props}>{content}</Text>
        <Icon name="right" size={14} />
      </TouchableOpacity>
    </>
  );
}

Ellipsis.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  placeholder: PropTypes.string,
  maxLen: PropTypes.number,
};
Ellipsis.defaultProps = {
  placeholder: '...',
};
