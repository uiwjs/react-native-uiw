import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Layout, {Container} from '../../Layout';
import {SpeedDial, Icon, IconsName} from '@uiw/react-native';
import {ComProps} from '../../routes';

let MainHeight = Dimensions.get('window').height;

const {Header, Body, Card, Footer} = Layout;

export interface listItem {
  title: string | React.ReactElement | React.ReactNode;
  icon: IconsName | React.ReactElement | React.ReactNode;
}
export interface IndexProps extends ComProps {}
export interface IndexState {
  visible: boolean;
}

export default class Index extends Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container scrollEnabled={false}>
        <Layout>
          <Header title={title} description={description} />
          <Body scrollEnabled={false}>
            <View style={{height: MainHeight}}>
              <SpeedDial
                bottom={MainHeight / 2 + 100}
                icon={['star-on', 'star-off']}
                isDrag={true}
                children={[
                  {
                    icon: <Icon name="plus" color="#fff" size={18} />,
                    title: <Text>'Add'</Text>,
                    onPress: () => console.log('Add'),
                  },
                  {
                    icon: <Icon name="star-on" color="#fff" size={18} />,
                    title: 'Star',
                  },
                  {
                    icon: <Icon name="mail" color="#fff" size={18} />,
                    title: 'Mail-asdlfslasdkfsdklajfsadf',
                  },
                  {
                    icon: <Icon name="share" color="#fff" size={18} />,
                    title: 'Share',
                  },
                ]}
              />
            </View>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  divider: {
    marginVertical: 10,
  },
});
