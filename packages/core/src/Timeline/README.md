Timeline 时间轴
---

垂直展示一系列的时间流信息。

### 基础示例 & 自定义图标

```jsx
import { Timeline } from '@uiw/react-native';

function Demo() {
 const item = [
    {
      title: '声明式声明式声明式声',
      tips: '2021-08-07 12:00:00',
      desc: 'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。',
        icon: {
        color: 'red'
      },
    },
    {
      title: '组件化',
      desc: '构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。',
      icon: {
        name: "warning",
        size: 20,
        color: 'blue'
      },
    },
    {
      title: '一次学习，随处编写',
      desc: [
        '无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入 React 来开发新功能。',
        'React 还可以使用 Node 进行服务器渲染，或使用 React Native 开发原生移动应用。',
      ],
    },
  ];
  return (
     <Card title={`基础用法 & 自定义图标`}>
    <WingBlank>
      <Timeline
       style={{ backgroundColor: '#fff' }}
       items={item}
       />
    </WingBlank>
  </Card>
  );
}
```

### 交替展现

```jsx
import { Timeline } from '@uiw/react-native';

function Demo() {
  return (
    <Card title="交替展现">
      <WingBlank>
        <Timeline
         style={{ backgroundColor: '#fff' }}
         items={item1}
         mode="alternate"
         />
      </WingBlank>
    </Card>
  );
}
```

### 展示在左边

```jsx
import { Timeline } from '@uiw/react-native';

function Demo() {
  return (
   <Card title="展示在左边">
    <WingBlank>
      <Timeline
       style={{ backgroundColor: '#fff' }}
       items={item}
       mode="left"
       />
      </WingBlank>
   </Card>
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
  /** 子项内容 */
  desc?: string | string[]; 
    /** 自定义图标 */
  icon?: IconsProps;
}

export interface TimelineProps extends ViewProps {
  /** 是否倒序 */
  isReverse?: boolean;
  /** 步骤条数据列表 */
  items: TimelineItemsProps[];
  /** 改变时间轴和内容的相对位置 */
  mode?: 'left' | 'alternate';
}
```