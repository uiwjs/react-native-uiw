import React from 'react';
import { Text } from 'react-native';
import { H1, H2, H3, H4, H5, H6, S, Del, U, P, Strong } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

export interface TypographyViewProps extends ComProps { }

export default class TypographyView extends React.Component<TypographyViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container isScroll={false}>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <H1>这是标题一</H1>
            <H2>这是标题二</H2>
            <H3>这是标题二</H3>
            <H4>这是标题二</H4>
            <H5>这是标题二</H5>
            <H6>这是标题二</H6>
            <S>这段字符串中间有条删除线{`<S>`}</S>
            <Del>这段字符串中间有条删除线{`<Del>`}</Del>
            <U>这段文字下面有条下划线{`<U>`}</U>
            <P>这是一个段落{`<P>`}</P>
            <Strong>这段文本加粗的{`<Strong>`}</Strong>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
