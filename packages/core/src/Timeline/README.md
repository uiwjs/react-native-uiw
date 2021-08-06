Timeline 时间轴
---

垂直展示一系列的时间流信息。

### 基础示例

```jsx
import { Timeline } from '@uiw/react-native';

function Demo() {
  return (
    <Timeline
      style={{ backgroundColor: '#fff' }}
      isReverse
      items={[
        { 
          'title': '声明式声明式声明式声明式声明式声明式声明式声明式声明式', 
          'tips': '2021-08-07 12:00:00',
          'desc': 'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。'
        },
        {
          'title': '组件化',
          'color': 'yellow',
          'desc': '构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。'
        },
        {
          'title': '一次学习，随处编写', 
          'color': 'red',
          'desc': [
            '无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入 React 来开发新功能。',
            'React 还可以使用 Node 进行服务器渲染，或使用 React Native 开发原生移动应用。'
          ]
        }
      ]}
    />
  );
}
```

### Props

```ts
export interface TimelineItemsProps {
  /** 标题 */
  title: string;
  /** 子标题 */
  tips?: string;
  /** 标示颜色 */
  color?: string;
  /** 子项内容 */
  desc?: string | string[]; 
}

export interface TimelineProps extends ViewProps {
  /** 是否倒序 */
  isReverse?: boolean;
  /** 步骤条数据列表 */
  items: TimelineItemsProps[];
}
```