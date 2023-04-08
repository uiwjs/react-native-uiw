import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { MenuDropdown, Toast, Text } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';
import { ComProps } from '../../routes';

const { Header, Body, Card, Footer } = Layout;

export interface MenuDropdownProps extends ComProps { }

export default class MenuDropdownView extends Component<MenuDropdownProps> {
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body style={{ padding: 15 }}>
            <Card title="基础实例">
              <MenuDropdown title="菜单">
                <MenuDropdown.Item>
                  <Text color="text">首页</Text>
                </MenuDropdown.Item>
                <MenuDropdown.Item>
                  <Text color="text">个人中心</Text>
                </MenuDropdown.Item>
                <MenuDropdown.Item>
                  <Text color="text">列表</Text>
                </MenuDropdown.Item>
                <MenuDropdown.Item>
                  <TouchableOpacity
                    onPress={() => Toast.info('你点击了选择一', 2, 'info')}>
                    <Text color="text">选择一</Text>
                  </TouchableOpacity>
                </MenuDropdown.Item>
              </MenuDropdown>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

