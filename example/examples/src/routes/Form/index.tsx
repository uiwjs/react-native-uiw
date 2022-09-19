import React from 'react';
import {Form, Button} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
const {Body, Footer} = Layout;

const FormDemo = () => {
  const items = [
    {
      type: 'input',
      field: 'name',
      validate: (val: any) => (!val ? `请输入name` : ''),
    },
    {
      type: 'input',
      field: 'age',
    },
  ];

  const initialValues = {name: '王滴滴'};

  const [form] = Form.useForm();

  return (
    <Container>
      <Layout>
        <Body>
          <Form form={form} formDatas={items} initialValues={initialValues} />
          <Button
            type="primary"
            onPress={() => {
              const values = form.getStore();
              console.log('values', values);
            }}>
            默认按钮
          </Button>
        </Body>
        <Footer />
      </Layout>
    </Container>
  );
};

export default FormDemo;
