import { useRef, useEffect } from 'react';
import { useMemoizedFn, useUpdate } from 'ahooks';

/**
 * 获取上一轮的 props 或 state
 * How to get the previous props or state?
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 * @example
 * ```js
 * function Counter() {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePrevious(count);
 *   return <h1>Now: {count}, before: {prevCount}</h1>;
 * }
 * ```
 */
export function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

type Options<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (v: T) => void;
};

export function usePropsValue<T>(options: Options<T>) {
  const { value, defaultValue, onChange } = options;

  const update = useUpdate();

  const stateRef = useRef<T>(value !== undefined ? value : defaultValue);
  if (value !== undefined) {
    stateRef.current = value;
  }

  const setState = useMemoizedFn((v: T) => {
    if (value === undefined) {
      stateRef.current = v;
      update();
    }
    onChange?.(v);
  });
  return [stateRef.current, setState] as const;
}

export function useLatest<T>(value: T) {
  const ref = useRef<T>(value);
  ref.current = value;

  return ref;
}
