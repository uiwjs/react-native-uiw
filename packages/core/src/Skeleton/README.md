Skeleton 骨架屏
---

在需要等待加载内容的位置提供一个占位图形组合。

### 基础示例

```jsx mdx:preview&background=#bebebe29
import { Skeleton } from '@uiw/react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Demo = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(['', '', '']);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setData(['项目1', '项目2', '项目3']);
      setLoading(false);
    }, 3000);
  };

  const skeletonStyles = [
    styles.item,
    styles.item,
    styles.item,
  ];

  return (
            <View style={styles.container}>
              {loading ? (
                <Skeleton
                  loading={loading}
                  styles={skeletonStyles}
                  duration={1200}
                  containerStyle={styles.list}
                />
              ) : (
                <View style={styles.list}>
                  {data.map((item, index) => (
                    <Text key={index} style={styles.item}>
                      {item}
                    </Text>
                  ))}
                </View>
              )}
              <TouchableOpacity style={styles.button} onPress={fetchData}>
                <Text style={styles.buttonText}>重新加载</Text>
              </TouchableOpacity>
            </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#E1E9EE',
    height: 30,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Demo;

```

### Props

| 参数 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| loading | `false` | 是否正在加载 | `boolean` | `true` |
| styles | `true` | 骨架屏的样式 | `ViewStyle[]` |  |
| duration | `false` | 动画的执行速度 | `number` | `1200` |
| easing | `false` | 动画的执行方式 | `Animated.EasingFunction` | `Easing.bezierFn(0.5, 0, 0.25, 1)` |
| containerStyle | `false` | 容器样式 | `StyleProp<ViewStyle>` |  |
| animationType | `false` | 动画类型（条纹/脉搏/无） | `AnimationType` | `shiver` |
| boneColor | `false` | 基础颜色 | `string` | `#E1E9EE` |
| highlightColor | `false` | 高亮颜色 | `string` | `#F2F8FC` |