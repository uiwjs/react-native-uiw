import React from 'react';
import {Form, Button, Toast} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
const {Body, Footer} = Layout;

const FormDemo = () => {
  const form = Form.useForm();
  const items = [
    {
      type: 'input',
      field: 'name',
      validate: (val: any) => (!val ? `请输入name` : ''),
    },
    {
      type: 'input',
      field: 'age',
      validate: (val: any) => (Number(val) > 30 || Number(val) < 10 ? `起输入10-30` : ''),
    },
  ];
  const initialValues = {name: '王滴滴', age: '31'};

  return (
    <Container>
      <Layout>
        <Body>
          <Form form={form} formDatas={items} initialValues={initialValues} />
          <Button
            type="primary"
            onPress={() => {
              form
                .validateFields()
                .then((values: any) => Toast.success(JSON.stringify(values)))
                .catch((errors: any) => Toast.warning(JSON.stringify(errors)));
            }}>
            确定
          </Button>
          <Button type="primary" onPress={() => form.setFieldValue('age', '456')}>
            设置
          </Button>
          <Button type="primary" onPress={() => form.resetFieldValue()}>
            重置
          </Button>
          <Button
            type="primary"
            onPress={() => {
              const errors = form.validate();
              Toast.warning(JSON.stringify(errors));
            }}>
            触发验证
          </Button>
        </Body>
        <Footer />
      </Layout>
    </Container>
  );
};

export default FormDemo;
