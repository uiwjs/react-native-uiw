import React, {Component, useState} from 'react';
import {VerificationCode} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface VerificationCodeProps extends ComProps {
  onBefore?: () => Promise<boolean>;
  onSend?: () => Promise<boolean> | boolean;
  inputBorder?: boolean;
}

const VerificationCodeDemo: React.FC<VerificationCodeProps> = ({route}) => {
  const [value, setValue] = useState('');
  const description = route.params.description;
  const title = route.params.title;

  const onChange = (val: string) => {
    console.log('onChange--> 输入改变事件	 ', val);
    setValue(val);
  };

  const onBefore = async () => {
    console.log('onBefore--> 发验证码之前的回调	');
    return true;
  };

  const onSend = async () => {
    console.log('onSend--> 发送验证码');
    return true;
  };

  const onEnd = () => {
    console.log('onEnd--> 倒计时结束后的回调');
  };

  return (
    <Container>
      <Layout>
        <Header title={title} description={description} />
        <Body style={{paddingLeft: 16, paddingRight: 16}}>
          <Card title="基础实例">
            <VerificationCode value={value} count={3} onChange={(text: string) => onChange(text)} outerStyle={{borderColor: '#ccc'}} />
          </Card>
          <Card title="无边框">
            <VerificationCode
              bordered={false}
              label="我没框框哦"
              count={3}
              inputBorder={false}
              onChange={(text: string) => onChange(text)}
              outerStyle={{backgroundColor: '#FFF'}}
              buttonStyle={{backgroundColor: '#fff'}}
            />
          </Card>
          <Card title="自定义倒计时文字和重新发送文字">
            <VerificationCode
              label="点我"
              resendLabel="好了"
              value={value}
              count={3}
              onChange={(text: string) => onChange(text)}
              outerStyle={{borderColor: '#ccc'}}
            />
          </Card>
          <Card title="自定义倒计时时长">
            <VerificationCode count={10} value={value} onChange={(text: string) => onChange(text)} outerStyle={{borderColor: '#ccc'}} />
          </Card>
          <Card title="输入改变事件">
            <VerificationCode value={value} count={3} onChange={(text: string) => onChange(text)} outerStyle={{borderColor: '#ccc'}} />
          </Card>
          <Card title="发验证码之前的回调">
            <VerificationCode value={value} count={3} onChange={(text: string) => onChange(text)} onBefore={onBefore} outerStyle={{borderColor: '#ccc'}} />
          </Card>
          <Card title="发送验证码">
            <VerificationCode value={value} count={3} onChange={(text: string) => onChange(text)} onSend={onSend} outerStyle={{borderColor: '#ccc'}} />
          </Card>
          <Card title="倒计时结束后的回调">
            <VerificationCode value={value} count={3} onChange={(text: string) => onChange(text)} onEnd={onEnd} outerStyle={{borderColor: '#ccc'}} />
          </Card>
          <Card title="自定义外层输入框样式">
            <VerificationCode
              value={value}
              count={3}
              onChange={(text: string) => onChange(text)}
              outerStyle={{backgroundColor: '#FFD21D', borderColor: '#ccc'}}
            />
          </Card>
          <Card title="自定义内层按钮样式">
            <VerificationCode
              bordered={false}
              value={value}
              count={3}
              onChange={(text: string) => onChange(text)}
              buttonStyle={{backgroundColor: '#F86E21'}}
              outerStyle={{borderColor: '#ccc'}}
            />
          </Card>
          <Card title="自定义按钮文字样式">
            <VerificationCode value={value} count={3} onChange={(text: string) => onChange(text)} outerStyle={{borderColor: '#ccc'}} />
          </Card>
          <Card title="自定义输入框提示文字">
            <VerificationCode
              bordered={false}
              value={value}
              count={3}
              onChange={(text: string) => onChange(text)}
              placeholder="请输入112233....."
              outerStyle={{borderBottomColor: '#CCC'}}
            />
          </Card>
        </Body>
        <Footer />
      </Layout>
    </Container>
  );
};

export default VerificationCodeDemo;
