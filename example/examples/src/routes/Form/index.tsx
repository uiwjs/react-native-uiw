import React, {useState, useRef} from 'react';
import {Form, Button, Toast, Slider, Flex, Text} from '@uiw/react-native';
import {View} from 'react-native';
import Layout, {Container} from '../../Layout';
const {Body, Footer, Card} = Layout;

interface actionProps {
  remove: () => void;
  moveUp: () => void;
  moveDown: () => void;
  moveToTop: () => void;
  moveToBottom: () => void;
}

const FormDemo = () => {
  const form = Form.useForm();
  const ref = useRef();
  const [state, setStore] = useState({});

  const schema = [
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
        {label: '四川菜', value: 6},
        {label: '湖北菜', value: 7},
        {label: '西北菜', value: 8},
        {label: '新疆菜', value: 9},
        {label: '东北菜', value: 10},
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
        {label: '新疆菜', value: 4},
        {label: '东北菜', value: 5},
        {label: '四川菜', value: 6},
        {label: '湖北菜', value: 7},
        {label: '西北菜', value: 8},
        {label: '新疆菜', value: 9},
        {label: '东北菜', value: 10},
      ],
    },
    {
      type: 'rate',
      field: 'rate',
      name: '评分',
      attr: {
        defaultRating: 4,
      },
    },
    {
      type: 'switch',
      field: 'switch',
      name: '开关',
    },
    {
      type: 'search',
      field: 'project',
      required: false,
      name: '项目',
      options: [
        {label: '测试系统管理', value: 1},
        {label: '后台管理', value: 2},
      ],
      attr: {
        showClear: true,
        labelInValue: true,
        placeholder: '请选择',
      },
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
    {
      type: 'picker',
      field: 'picker',
      name: '选择器',
      attr: {
        options: [
          {label: '1', value: '1'},
          {label: '2', value: '2'},
          {label: '3', value: '3'},
          {label: '4', value: '4'},
        ],
        showClear: true,
        placeholder: '请选择',
      },
    },
    {
      type: 'datePicker',
      field: 'datePicker',
      name: '时间选择器',
      attr: {
        placeholder: '请选择',
        mode: 'date',
        format: 'YYYY-MM-DD',
      },
    },
    {
      type: 'datePeriodInput',
      field: 'datePeriodInput',
      name: '时间区间选择器',
    },
    {
      type: 'verificationCode',
      field: 'verificationCode',
      name: '验证码倒计时',
    },
    {
      type: 'tree',
      field: 'tree',
      name: '树形控件',
      attr: {
        options: [
          {
            label: '今天',
            value: '01',
            children: [
              {
                label: '上午',
                value: '01-1',
                children: [
                  {
                    label: '9点',
                    value: '01-1-1',
                  },
                  {
                    label: '10点',
                    value: '01-1-2',
                  },
                  {
                    label: '11点',
                    value: '01-1-3',
                  },
                ],
              },
              {
                label: '下午',
                value: '02-1',
                children: [
                  {
                    label: '14点',
                    value: '02-1-1',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      type: 'treeSelect',
      field: 'treeSelect',
      name: 'treeSelect',
      attr: {
        options: [
          {
            label: '2月23日(今天)',
            value: '01',
            children: [
              {
                label: '9:00-10:00',
                value: '01-1',
                children: [{label: '00:00', value: '01-1-1'}],
              },
              {
                label: '10:00-11:00',
                value: '01-2',
              },
              {
                label: '11:00-12:00',
                value: '01-3',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'render',
      field: 'render',
      name: '自定义',
    },
    {
      type: 'cardList',
      field: 'cardList',
      name: '联系人集合',
      renderHeader: (i: number, {remove, moveUp, moveDown, moveToTop, moveToBottom}: actionProps) => (
        <View style={{marginTop: 12, display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
          <View>
            <Text color="text">{`联系人${i + 1}`}</Text>
          </View>
          <Flex>
            <Text color="text" style={{marginRight: 5}} onPress={() => moveUp()}>
              上移
            </Text>
            <Text color="text" style={{marginRight: 5}} onPress={() => moveDown()}>
              下移
            </Text>
            <Text color="text" style={{marginRight: 5}} onPress={() => moveToTop()}>
              置顶
            </Text>
            <Text color="text" style={{marginRight: 5}} onPress={() => moveToBottom()}>
              置底
            </Text>
            <Text onPress={() => remove()}>删除</Text>
          </Flex>
        </View>
      ),
      renderAdd: ({add}: {add: () => void}) => (
        <View style={{marginTop: 12}}>
          <Button onPress={() => add()} type="primary" size="default" bordered={false}>
            新增数据
          </Button>
        </View>
      ),
      items: [
        {
          type: 'input',
          field: 'cardListItem1',
          name: '联系人姓名',
        },
      ],
    },
  ];

  return (
    <Container>
      <Layout>
        <Body style={{paddingLeft: 16, paddingRight: 16}}>
          <Card title="基本使用">
            <Form
              form={form}
              schema={schema}
              initialValues={{name: '王滴滴', rate: 4, datePicker: new Date(), picker: ['2']}}
              watch={{
                name: (value: unknown) => console.log('value', value),
              }}
              customComponentList={{
                render: <Slider />,
              }}
              changeValidate={true}
            />
            <View>
              <Text color="primary_text">{JSON.stringify(state)}</Text>
            </View>
            <Button
              type="primary"
              onPress={() => {
                form
                  .validateFields()
                  .then((values: any) => setStore(values))
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
          </Card>
        </Body>
        <Footer />
      </Layout>
    </Container>
  );
};

export default FormDemo;
