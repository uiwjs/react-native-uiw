import React from 'react';
import {Spacing, WingBlank, Button} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';

const {Header, Body, Card, Footer} = Layout;

interface WingBlankViewProps extends ComProps {}

export default class WingBlankView extends React.Component<WingBlankViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card
              title="左右留白: size?: 'small' | 'default' | 'large'"
              bodyStyle={{paddingLeft: 0, paddingRight: 0}}>
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
