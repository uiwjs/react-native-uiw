import React from 'react';
import {Text, View} from 'react-native';
import {Calendar, Spacing} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';

const {Header, Body, Card, Footer} = Layout;

export interface CalendarViewProps extends ComProps {}

export default class CalendarView extends React.Component<CalendarViewProps> {
  render() {
    const {route, navigation} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Calendar onPress={() => navigation.goBack()} />
            <Spacing size={'large'} />
            <Calendar
              color="red"
              lunarHoliday={true}
              onPress={() => navigation.goBack()}
            />
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
