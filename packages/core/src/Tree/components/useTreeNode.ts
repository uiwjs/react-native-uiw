import { useLatest } from '../../utils/hooks';
import { TreeNodeProps } from '../type';

export function useTreeNode({
  expanded = false,
  eventKey,
  label,
  checked = false,
  disabled,
  onCheck,
  data,
  onClick,
  show,
}: TreeNodeProps) {
  const onCheckRef = useLatest(onCheck);
  const onClickRef = useLatest(onClick);
  const progress = expanded ? 1 : 0;
  const heightProgress = !!show ? 1 : 0;

  // tree item 高度变化
  const height = 55;
  const style = () => {
    const value = 0 * (1 - heightProgress) + 1 * heightProgress;
    return {
      height: height * value,
    };
  };

  const handlerCheck = () => {
    onCheckRef.current?.({ expanded, value: data.value, eventKey, label, checked, disabled });
  };

  return { progress, heightProgress, style, handlerCheck: handlerCheck, onClick: onClickRef.current };
}
