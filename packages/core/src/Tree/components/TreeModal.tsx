import React, { FC, useState } from 'react';
import Modal from '../../Modal';
import { TreeProps } from '../type';
import Tree from './Tree';

const TreeModal: FC<TreeProps> = (props) => {
  const [visible, setVisible] = useState(true);

  return (
    <Modal visible={visible} maskClosable={true} placement="bottom" onClosed={() => setVisible(false)}>
      <Tree {...props} />
    </Modal>
  );
};
TreeModal.displayName = 'TreeModal';

export default TreeModal;
