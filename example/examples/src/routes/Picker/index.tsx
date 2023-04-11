import React from 'react';
import {SafeAreaView} from 'react-native';
import {Picker, Button, Spacing} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';

const {Header, Body, Card, Footer} = Layout;

export interface PickerViewProps extends ComProps {}

export default function (props: PickerViewProps) {
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;
  const [value, setValue] = React.useState(['2', '22', '221']);
  const [value2, setValue2] = React.useState(['5']);
  const [visible, setVisible] = React.useState(false);
  const arr = [
    {
      label: '江苏省',
      value: '1',
      children: [
        {
          label: '南京市',
          value: '11',
          children: [
            {label: '宣武区', value: '111'},
            {label: '雨花台区', value: '112'},
          ],
        },
        {
          label: '苏州市',
          value: '12',
          children: [{label: '苏州区', value: '121'}],
        },
      ],
    },
    {label: '北京市', value: '2', children: [{label: '北京市', value: '22', children: [{label: '朝阳区', value: '221'}]}]},
  ];

  const arr2 = [
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
  ];

  return (
    <Container>
      <Layout>
        <Header title={title} description={description} />
        <Body style={{paddingLeft: 16, paddingRight: 16}}>
          <Card title="基本使用">
            <Picker cols={1} displayType="view" data={arr2 as any} value={value2} onChange={(val2: any) => setValue2(val2)} />
          </Card>
          <Card title="弹框picker">
            <Button onPress={() => setVisible(true)}>打开</Button>
            <Picker
              title="标题"
              displayType="modal"
              value={value}
              onChange={(val: any) => setValue(val)}
              visible={visible}
              cols={3}
              onClosed={() => setVisible(false)}
              data={arr as any}
            />
          </Card>
        </Body>
      </Layout>
    </Container>
  );
}
