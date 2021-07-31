SearchBar 模糊搜素组件
---

## 基础示例

```jsx
import { Result, Icon } from '@uiw/react-native';

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

| 参数                 | 说明         | 类型    | 默认值  |
| -------------------- | ------------ | ------- | ------- |
| `labelInValue`           |是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { key: string, label: ReactNode } 的格式       | Boolean | `false` |
| `options`            | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能  | { label, value }[] | [] |
| `onChange`           | 时间变化     | void    | -       |
| `onFocus` | 获得焦点时回调   | void    | () => { }       |
| `onChangeText` | 搜索框文字变化   | void    | -       |
| `disabled` | 是否禁用   | boolean    | false       |
| `placeholder` | 	搜索框默认文本   | string    | `输入搜索...`       |
| `loading` | 加载中状态   | boolean    | false      |
| `extra` | 图标   | dom    | extra : <Icon xml={down} size={18} /> |
