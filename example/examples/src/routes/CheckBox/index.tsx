import React from 'react';
import { List, CheckBox } from '@uiw/react-native';
import { ComProps } from '../../routes';
import Layout, { Container } from '../../Layout';
const { Header, Body, Footer } = Layout;

export interface BadgeViewProps extends ComProps { }

export default class BadgeView extends React.Component<BadgeViewProps> {
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <List size="large" flat={false}>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox
                  checked={true}
                  style={{ paddingVertical: 10 }}
                  onChange={checked => {
                    console.log(checked);
                  }}>
                  默认点击选中
                </CheckBox>
              </List.Item>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox
                  style={{ paddingVertical: 10 }}
                  onChange={checked => {
                    console.log(checked);
                  }}>
                  默认未选中
                </CheckBox>
              </List.Item>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox
                  disabled
                  style={{ paddingVertical: 10 }}
                  onChange={checked => {
                    console.log(checked);
                  }}>
                  默认禁用未选中
                </CheckBox>
              </List.Item>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox
                  checked={true}
                  disabled
                  style={{ paddingVertical: 10 }}
                  onChange={checked => {
                    console.log(checked);
                  }}>
                  默认禁用选中
                </CheckBox>
              </List.Item>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox
                  style={{paddingVertical: 10}}
                  color={'red'}
                  onChange={checked => {
                    console.log(checked);
                  }}>
                  改变选择框颜色 {'color={}'}
                </CheckBox>
              </List.Item>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox
                  checked={true}
                  style={{paddingVertical: 10}}
                  color={'red'}
                  onChange={checked => {
                    console.log(checked);
                  }}>
                  改变选择框颜色 {'color={}'}
                </CheckBox>
              </List.Item>
              <List.Item style={{paddingVertical: 0}}>
                <CheckBox
                  style={{paddingVertical: 10}}
                  color={'red'}
                  textStyle={{fontSize: 18, color: 'red'}}
                  onChange={checked => {
                    console.log(checked);
                  }}>
                  改变文字颜色和大小
                </CheckBox>
              </List.Item>
              <List.Item style={{paddingVertical: 0}}>
                <CheckBox
                  style={{paddingVertical: 10}}
                  size={20}
                  onChange={checked => {
                    console.log(checked);
                  }}>
                  改变选择框大小 {'size={20}'}
                </CheckBox>
              </List.Item>
            </List>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
