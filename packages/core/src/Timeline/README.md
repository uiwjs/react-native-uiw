Timeline 时间轴
---

垂直展示一系列的时间流信息。

### 基础示例 & 自定义图标

```jsx
import { Timeline } from '@uiw/react-native';

function Demo() {
 const item = [
     {
      title: '声明式声明式',
      tips: '2021-08-07 12:00:00',
      desc: 'React 使创建交互式',
      icon: <Icon name="smile" fill="red" size={18} />
    },
    {
      title: '组件化',
      tips: '2021-08-08 12:00:00',
      desc: '构建管理自身状态。',
      size: 20,
      color: 'blue',
      icon: 'qq'
    },
    {
      title: '随处编写',
      tips: '2021-08-09 12:00:00',
      desc: '服务器渲染。',
    },
    {
      title: '一次学习，随处编写',
      tips: '2021-08-10 12:00:00',
      desc: '开发新功能。',
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
         items={item}
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
  icon?: IconsName | React.ReactElement | React.ReactNode;
  /** 自定义图标颜色 */
  color?: string;
  /** 自定义图标尺寸 */
  size?: number;
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