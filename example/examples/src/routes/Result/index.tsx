import React from 'react';
import {Text} from 'react-native';
import {Icon, Spacing, Del, Result} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body, Footer} = Layout;

export interface ResultViewProps extends ComProps {}

export default class ResultView extends React.Component<ResultViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Result
              img={<Icon name="pay-circle-o" size={60} fill="#008EF0" />}
              title="支付成功"
              message={
                <Text>
                  998.00元 <Del>1098元</Del>
                </Text>
              }
            />
            <Spacing />
            <Result
              img={<Icon name="time" size={60} fill="#1EABCD" />}
              title="等待处理"
              message="已提交申请，等待银行处理"
            />
            <Spacing />
            <Result
              img={<Icon name="circle-check" size={60} fill="#008EF0" />}
              title="验证成功"
              message="所提交内容已成功完成验证"
            />
            <Spacing />
            <Result
              img={<Icon name="circle-close" size={60} fill="#dc3545" />}
              title="支付失败"
              message="所选银行卡余额不足"
            />
            <Spacing />
            <Result
              img={<Icon name="warning" size={60} fill="#ffc107" />}
              title="无法完成操作"
              message="由于你的账号未认证，请先确认认证后，再进行操作。"
            />
            <Footer />
          </Body>
        </Layout>
      </Container>
    );
  }
}
