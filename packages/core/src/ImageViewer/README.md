ImageViewer 图片查看
---

![](https://user-images.githubusercontent.com/66067296/148637929-a8ef7878-c7b6-4af6-af9e-f610cf96ab45.gif)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

可自定义拖曳抽屉高度。

### 基础示例

```jsx
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Layout, { Container } from '../../Layout';
import { ImageViewer } from '@uiw/react-native';
import { ComProps } from '../../routes';

const { Header, Body, Card, Footer } = Layout;

export interface IndexProps extends ComProps { }

export default class Index extends Component<IndexProps> {
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body style={{ backgroundColor: '#fff' }}>
            <Card title="基础使用">
              <ImageViewer />
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
```

### 自定义图片

```jsx
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Layout, { Container } from '../../Layout';
import { ImageViewer } from '@uiw/react-native';
import { ComProps } from '../../routes';

const { Header, Body, Card, Footer } = Layout;

export interface IndexProps extends ComProps { }

export default class Index extends Component<IndexProps> {
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body style={{ backgroundColor: '#fff' }}>
            <Card title="自定义单张图片">
              <ImageViewer
                height={100}
                width={100}
                src="https://img11.51tietu.net/pic/2016-071418/20160714181543xyu10ukncwf221991.jpg"
              />
            </Card>
            <Card title="自定义多张图片">
              <ImageViewer
                height={100}
                width={100}
                defaultIndex={2}
                src={[
                  { url: 'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg' },
                  { url: 'https://iknow-pic.cdn.bcebos.com/810a19d8bc3eb135828572d2ab1ea8d3fd1f441d' },
                  { url: 'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg' }
                ]}
              />
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
```

### props

```ts
export interface ImageViewerProps extends ViewProps {
  /** 图片宽度 */
  width?: number,
  /** 图片高度 */
  height?: number,
  /** 图像源（远程URL或本地文件资源 */
  src?: string | number;
}
```