import React from 'react';
import {Text, View} from 'react-native';
import {Divider, Theme} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
import {useTheme} from '@shopify/restyle';

const {Header, Body, Card, Footer} = Layout;

export interface DividerViewProps extends ComProps {}

export default function DividerView(props: DividerViewProps) {
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;
  const theme = useTheme<Theme>();
  return (
    <Container>
      <Layout style={{backgroundColor: theme.colors.background}}>
        <Header title={title} description={description} />
        <Body style={{paddingLeft: 16, paddingRight: 16}}>
          <Card title="横向分割线" style={{backgroundColor: theme.colors.background}}>
            <Divider label="OR" />
            <Text />
            <Divider label="暂无数据" />
            <Text />
            <Divider label="调整间隔" gutter={30} />
            <Text />
          </Card>

          <Card title="分割线标题位置" style={{backgroundColor: theme.colors.background}}>
            <Text />
            <Divider label="left" orientation="left" labelStyle={{fontWeight: 'bold'}} />
            <Text />
            <Divider label="center" labelStyle={{fontWeight: 'bold'}} />
            <Text />
            <Divider label="right" orientation="right" labelStyle={{fontWeight: 'bold'}} />
          </Card>

          <Card title="纵向分割线" style={{backgroundColor: theme.colors.background}}>
            <View style={{height: 200}}>
              <Divider type="vertical" label="OR" />
            </View>
          </Card>
        </Body>
        <Footer />
      </Layout>
    </Container>
  );
}
