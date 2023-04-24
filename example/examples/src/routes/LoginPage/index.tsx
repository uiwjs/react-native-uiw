import React, {Component} from 'react';
import Layout, {Container} from '../../Layout';
import {LoginPage} from '@uiw/react-native';
import {ComProps} from '../../routes';
const {Header, Body, Card, Footer} = Layout;

export interface LoginPageProps extends ComProps {}

export default class LoginPageView extends Component<LoginPageProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <LoginPage showPassword={true} />
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
