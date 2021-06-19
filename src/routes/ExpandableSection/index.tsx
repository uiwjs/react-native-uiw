import React, { Component } from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import Layout, { Container } from '../../Layout';
import { ExpandableSection } from '../../../components';
import { ComProps } from '../../typings';
const { Header, Body, Card, Footer } = Layout;

export interface ExpandableSection extends ComProps { }

export default class MenuDropdownView extends Component<ExpandableSection> {
  state = {
    expanded: false,
    top: false
  }
  getChevron() {
    if (this.state.expanded) {
      return this.state.top ? <Image style={styles.icon} source={require('../../image/chevronDown.png')} /> :  <Image style={styles.icon} source={require('../../image/chevronUp.png')} /> 
    }
    return this.state.top ? <Image style={styles.icon} source={require('../../image/chevronUp.png')} /> :  <Image style={styles.icon} source={require('../../image/chevronDown.png')} /> 
  }
  getHeaderElement() {
    return (
      <View style={styles.row}>
        <Text>
          {!this.state.expanded ? '展开' : '折叠'}
        </Text>
        {this.getChevron()}
      </View>
    );
  }
  render() {
    const { route } = this.props;
    const { expanded, top } = this.state
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
                onPress={() => this.setState({ expanded: !expanded })}
                sectionHeader={this.getHeaderElement()}
                top={top}
              >
                <Card title="我是展开的内容" style={styles.card} />
                <Card title="我是展开的内容" style={styles.card} />
                <Card title="我是展开的内容" style={styles.card} />
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
    alignSelf: 'center'
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  }
});
