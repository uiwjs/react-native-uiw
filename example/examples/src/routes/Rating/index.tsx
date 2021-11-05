import React, {Component} from 'react';
import {View} from 'react-native';
import Layout, {Container} from '../../Layout';
import {Rating, Icon} from '@uiw/react-native';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface IndexProps extends ComProps {}
export interface IndexState {
  visible: boolean;
}
const desc = ['', '1星', '2星', '3星', '4星', '5星'];
const descs = ['terrible', 'bad', 'normal', 'good', 'wonderful', 'perfect'];
export default class Index extends Component<IndexProps, IndexState> {
  static state: IndexState;
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  onCancel = () => {
    this.setState({visible: false});
  };
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基本使用">
              <Rating />
            </Card>
            <Card title="指定 Icon">
              <Rating
                defaultRating={3}
                icon={{
                  unactived: <Icon name="smile-o" fill="red" />,
                  actived: <Icon name="smile" fill="red" />,
                }}
                onPress={console.log}
              />
            </Card>
            <Card title="默认选中及总数">
              <Rating
                defaultRating={2}
                resultRating={10}
                icon={{
                  unactived: <Icon name="star-off" />,
                  actived: <Icon name="star-on" />,
                }}
                onPress={console.log}
              />
            </Card>
            <Card title="评分组件加上文案展示">
              <Rating tooltips={desc} defaultRating={1} />
            </Card>
            <Card title="评分文案样式修改">
              <Rating
                tooltips={descs}
                defaultRating={3}
                color="blue"
                tooltipsStyle={{fontSize: 25, color: 'blue'}}
              />
            </Card>
            <Card title="只读">
              <Rating defaultRating={3} color="green" disabled />
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
