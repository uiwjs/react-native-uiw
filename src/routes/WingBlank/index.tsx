import React from 'react';
import { Text, View } from 'react-native';
import { Spacing, WingBlank, Button } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';

const { Header, Body, Card, Footer } = Layout;

interface WingBlankViewProps extends ComProps { }

export default class WingBlankView extends React.Component<WingBlankViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="左右留白: size?: 'small' | 'default' | 'large'" bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}>
              <WingBlank size="large">
                <Button>左右留白 size="large"</Button>
              </WingBlank>
              <Spacing />
              <WingBlank>
                <Button>左右留白 size="default"</Button>
              </WingBlank>
              <Spacing />
              <WingBlank size="small">
                <Button>左右留白 size="small"</Button>
              </WingBlank>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
