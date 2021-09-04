import React, {Component} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import {ExpandableSection} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';
import map from 'lodash/map';
const {Header, Body, Card, Footer} = Layout;

export interface ExpandableSection extends ComProps {}

const contents = [
  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',
  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',
  'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F22%2Fca22d8623fe7454ea9cdb33f3137d14e.jpeg&thumbnail=650x2147483647&quality=80&type=jpg',
  'https://iknow-pic.cdn.bcebos.com/810a19d8bc3eb135828572d2ab1ea8d3fd1f441d',
];
export default class MenuDropdownView extends Component<ExpandableSection> {
  state = {
    expanded: false,
    top: false,
  };
  getChevron() {
    if (this.state.expanded) {
      return this.state.top ? (
        <Image
          style={styles.icon}
          source={require('../../image/chevronDown.png')}
        />
      ) : (
        <Image
          style={styles.icon}
          source={require('../../image/chevronUp.png')}
        />
      );
    }
    return this.state.top ? (
      <Image
        style={styles.icon}
        source={require('../../image/chevronUp.png')}
      />
    ) : (
      <Image
        style={styles.icon}
        source={require('../../image/chevronDown.png')}
      />
    );
  }
  getHeaderElement() {
    return (
      <View style={styles.row}>
        <Text>{!this.state.expanded ? '展开' : '折叠'}</Text>
        {this.getChevron()}
      </View>
    );
  }
  renderItem = (_: string, index: number) => {
    return (
      <View key={index} style={{padding: 12}}>
        <Image source={{uri: contents[index]}} style={{height: 180}} />
      </View>
    );
  };
  render() {
    const {route} = this.props;
    const {expanded, top} = this.state;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例" style={styles.card}>
              <ExpandableSection
                expanded={expanded}
                onPress={() => this.setState({expanded: !expanded})}
                sectionHeader={this.getHeaderElement()}
                top={top}>
                {map(contents, (item, index) => {
                  return this.renderItem(item, index);
                })}
              </ExpandableSection>
            </Card>
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
  icon: {
    alignSelf: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
