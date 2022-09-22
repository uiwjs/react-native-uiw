import React from 'react';
import {Form, Button, Toast} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
const {Body, Footer} = Layout;

const FormDemo = () => {
  const form = Form.useForm({
    changeValidate: true,
  });
  const items = [
    {
      type: 'input',
      field: 'name',
      name: '输入框',
      attr: {},
      required: true,
      validate: (val: any) => (!val ? `请输入name` : ''),
    },
    {
      type: 'radio',
      field: 'sex',
      name: '单选框',
      options: [
        {label: '四川菜', value: 1},
        {label: '湖北菜', value: 2},
        {label: '西北菜', value: 3},
        {label: '新疆菜', value: 4},
        {label: '东北菜', value: 5},
      ],
    },
    {
      type: 'checkBox',
      field: 'fruit',
      name: '多选框',
      options: [
        {label: '香蕉', value: 1},
        {label: '西瓜', value: 2},
        {label: '猕猴桃', value: 3},
      ],
    },
    {
      type: 'rate',
      field: 'rate',
      name: '评分',
    },
    {
      type: 'switch',
      field: 'switch',
      name: '开关',
    },
    {
      type: 'search',
      field: 'search',
      name: '搜索',
      options: [
        {label: '上海', value: 1},
        {label: '南京', value: 2},
      ],
      attr: {
        labelInValue: true,
        showClear: true,
      },
    },
    {
      type: 'datePicker',
      field: 'datePicker',
      name: '时间',
      attr: {},
    },
    {
      type: 'stepper',
      field: 'stepper',
      name: '步进器',
      attr: {
        size: 'small',
      },
    },
    {
      type: 'textArea',
      field: 'textArea',
      name: '多行输入框',
      attr: {
        showWords: true,
        maxLength: 100,
      },
    },
    {
      type: 'slider',
      field: 'slider',
      name: '滑块输入条',
      attr: {
        step: 0.2,
      },
    },
  ];
  const initialValues = {name: '王滴滴'};

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
