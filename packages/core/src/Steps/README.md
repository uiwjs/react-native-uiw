Steps 步骤条
---

引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 基础示例

```jsx
import { Steps } from '@uiw/react-native';

function Demo() {
  return (
    <Steps
      items={[
        { 'title': '步骤一', 'desc': '这里是额外的信息，这里是额外的信息'},
        { 'title': '步骤二', 'desc': '这里是额外的信息,这里是额'},
        { 'title': '步骤三', 'desc': '这里是'}
      ]}
      current={1}
    />
  );
}
```

### props

| 参数                 | 说明         | 类型    | 默认值  |
| -------------------- | ------------ | ------- | ------- |
| `items`           |步骤条数据列表      | Item[] | - |
| `current`            | 当前步骤索引值  | Number | 0 |
| `onChange`           | 点击时间轴     | (value: number) => void;    | - |


### Item[]

| 参数                 | 说明         | 类型    | 默认值  |
| -------------------- | ------------ | ------- | ------- |
| `title`           |步骤标题      | Item[] | - |
| `desc`            | 步骤说明文字  | String | - |
| `status`           | 步骤的状态，'success' 或 'error' | String  | - |
