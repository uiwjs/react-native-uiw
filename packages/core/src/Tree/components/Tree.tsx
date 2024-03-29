import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { FlattenNode, TreeProps } from '../type';
import { getTreeNodeProps } from '../util';
import TreeNode from './TreeNode';
import { useTree } from './useTree';

const Tree: FC<TreeProps> = (props) => {
  const {
    flattenNodes,
    handleNodeExpand,
    handlerCheck,
    containerStyle,
    expandedKeys,
    checkedKeys,
    keyEntities,
    icon,
    checkable,
    disabled,
    showIcon,
  } = useTree(props);

  const treeRender = (item: FlattenNode) => {
    const treeNodeProps = getTreeNodeProps(item.value, {
      expandedKeys,
      checkedKeys: checkedKeys,
    });
    const level = keyEntities?.[item.value].level;
    const itemIcon = keyEntities?.[item.value].data.icon || icon;
    return (
      <TreeNode
        icon={itemIcon}
        checkable={checkable}
        disabled={disabled}
        {...treeNodeProps}
        {...item}
        showIcon={showIcon}
        onClick={handleNodeExpand}
        onCheck={handlerCheck}
        level={!!level || level == 0 ? level : 1}
      />
    );
  };
  return <ScrollView style={containerStyle}>{flattenNodes.map((item: any) => treeRender(item))}</ScrollView>;
};
Tree.displayName = 'Tree';

export default React.memo(Tree);
