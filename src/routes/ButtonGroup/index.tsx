import React, { Component } from 'react';
import Layout, { Container } from '../../Layout';
import { ButtonGroup, Button, Spacing } from '../../../components';
import { ComProps } from '../../typings';
const { Header, Body, Card, Footer } = Layout;

export interface ButtonGroupViewProps extends ComProps { }

export default class ButtonGroupView extends Component<ButtonGroupViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例">
              <ButtonGroup>
                <Button type="warning">警告</Button>
                <Button type="warning">警告</Button>
                <Button type="warning">主要</Button>
                <Button type="warning">警告</Button>
              </ButtonGroup>
            </Card>
            <Card title="尺寸">
              <ButtonGroup size="small">
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>主要</Button>
                <Button>警告</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup color="#ffc107" size="default">
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>主要</Button>
                <Button>警告</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup type="warning" size="large">
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>主要</Button>
                <Button>警告</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup color="#008EF0" size="small">
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>主要</Button>
                <Button>警告</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup color="#28a745" size="small">
                <Button>警告</Button>
                <Button>警告</Button>
                <Button>主要</Button>
                <Button>警告</Button>
              </ButtonGroup>
              <Spacing />
              <ButtonGroup color="#F95C2B" size="small">
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
              <ButtonGroup bordered={false} type="warning">
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
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}