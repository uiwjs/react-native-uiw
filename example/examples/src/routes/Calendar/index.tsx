import React from 'react';
import {Text, View} from 'react-native';
import {Calendar, Spacing} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';

const {Header, Body, Card, Footer} = Layout;

export interface CalendarViewProps extends ComProps {}

export default class CalendarView extends React.Component<CalendarViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const barProps = {
      barRightText: '返回啦',
      title: '日历啦',
      onPressBarLeft: () => {},
      barLeftText: '今天啦',
    };
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Calendar bar={barProps} />
            <Spacing size={'large'} />
            <Calendar color="red" bar={{}} />
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
