import React, {useState, Fragment} from 'react';
import {View, Text} from 'react-native';
import {TextArea, Card, Icon} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';
const {Header, Body, Footer} = Layout;

export interface TextAreaViewProps extends ComProps {}
export default function TextAreaView({route}: TextAreaViewProps) {
  const description = route.params.description;
  const title = route.params.title;
  return (
    <Fragment>
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <TextArea />
          </Body>
          <Footer />
        </Layout>
      </Container>
    </Fragment>
  );
}
