import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Progress, Button, Spacing} from '@uiw/react-native';
import Layout from '../../Layout';

const ProgressDemo = (props: any) => {
  const {Header, Card} = Layout;
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  const [val, setValue] = useState<number>(0);

  const onPress = () => {
    let count = val + 10;
    if (count > 100) {
      count = 0;
    }
    setValue(count)
  }

  return (
    <SafeAreaView>
      <Progress progress={30} position="fixed"/>
      <Header title={title} description={description} />
      <Card title="基础实例" style={{margin:10}}>
        <Progress progressColor="red" progress={40}/>
        <Spacing />
        <Button onPress={onPress}>(+-)10</Button>
        <Spacing />
        <Progress progress={val} progressColor='purple'/>
        <Text style={{ color: 'red', fontSize: 12}}>{val}%</Text>
        <Spacing />
        <Progress progressColor="orange" progress={60}/>
        <Spacing />
        <Progress progressColor="yellow" progress={80}/>
      </Card>
    </SafeAreaView>
  );
};

export default ProgressDemo;
