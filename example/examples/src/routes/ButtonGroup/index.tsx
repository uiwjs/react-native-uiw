import React, {Component} from 'react';
import Layout, {Container} from '../../Layout';
import {ButtonGroup, Button, Spacing} from '@uiw/react-native';
import {ComProps} from '../../routes';
const {Header, Body, Card, Footer} = Layout;

export interface ButtonGroupViewProps extends ComProps {}

export default class ButtonGroupView extends Component<ButtonGroupViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例">
              <ButtonGroup>
                <Button type="primary">警告</Button>
                <Button type="primary">警告</Button>
                <Button type="primary">主要</Button>
                <Button type="primary">警告</Button>
              </ButtonGroup>
            </Card>
            <Card title="尺寸">
              <ButtonGroup size="small">
                <Button>小尺寸按钮</Button>
                <Button>小尺寸按钮</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup color="#ffc107" size="default">
                <Button>默认尺寸按钮</Button>
                <Button>默认尺寸按钮</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup type="warning" size="large">
                <Button>大尺寸按钮</Button>
                <Button>大尺寸按钮</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup color="#008EF0" size="small">
                <Button>小尺寸蓝色按钮</Button>
                <Button>小尺寸蓝色按钮</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup color="#28a745" size="small">
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>主要</Button>
                <Button>警告</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup
                color="#F95C2B"
                textStyle={{color: '#fff'}}
                size="small">
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>主要</Button>
                <Button>警告</Button>
              </ButtonGroup>
            </Card>
            <Card title="边框 bordered?: boolean">
              <ButtonGroup bordered={false}>
                <Button>边框</Button>
                <Button>边框</Button>
                <Button>边框</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup bordered={false} color="#ffc107">
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup bordered={false} type="danger">
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
              </ButtonGroup>
            </Card>
            <Card title="按钮间距 gutter?: number">
              <ButtonGroup gutter={5} type="warning" bordered={false}>
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
              </ButtonGroup>
            </Card>
            <Card title="换行展示 inline?: boolean">
              <ButtonGroup gutter={5} inline type="success" bordered={false}>
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>警告</Button>
              </ButtonGroup>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
