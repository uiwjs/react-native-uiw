SearchBar 模糊搜素组件
---

### 基础示例

```jsx
import { SearchBar } from '@uiw/react-native';

function Demo() {
  return (
    <SearchBar 
      labelInValue 
      options={[
        {label:'上海',value:1},
        {label:'南京',value:2}
      ]} 
      onFocu={()=>{}}  
      onChange={val=>console.log('val',val)} 
    />
  );
}
```

### props

```ts
interface OptionsState {
  label: string;
  value: string | number;
}

interface SearchBarProps {
  /** 搜索框文字变化 */
  onChangeText?: (value: string) => void;
  /** 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 */
  options?: Array<OptionsState>;
  /** 事件变化回调 */
  onChange?: (value: string | null) => void;
  /** 获得焦点时回调 */
  onFocus?: (e: any | string) => void;
  /** 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { key: string, label: ReactNode } 的格式   */
  labelInValue?: Boolean;
  /** 是否禁用 */
  disabled?: Boolean;
  /** 值 */
  value?: String;
  /** 加载中状态 */
  loading?: Boolean;
  /** 搜索框默认文本 */
  placeholder?: String;
  /** 图标 */
  extra?: JSX.Element;
  /** 是否展示清楚图标 */
  showClear?: boolean;
}
```