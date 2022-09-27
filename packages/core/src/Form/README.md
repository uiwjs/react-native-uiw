Form 表单
---

集成react-native-uiw表单控件,并支持自定义组件

### 基础示例

<!--DemoStart--> 
```jsx
import {  SafeAreaView } from 'react-native';
import { Form } from '@uiw/react-native';

const FormDemo = () => {
  const form = Form.useForm();
  const initialValues = { name: '王滴滴' };
  const items = [
    {
      type: 'input',
      field: 'name',
      name: '输入框',
    }
  ];
  return (
    <SafeAreaView>
      <Form form={form} schema={items} initialValues={initialValues} />
    </SafeAreaView>
  );
}
```
<!--End-->

### form.validateFields进行表单验证提交

<!--DemoStart--> 
```jsx
import {  SafeAreaView,Toast } from 'react-native';
import { Form } from '@uiw/react-native';

const FormDemo = () => {
  const form = Form.useForm();
  const initialValues = {name: ''};
  const items = [
    {
      type: 'input',
      field: 'name',
      name: '输入框',
      attr: {},
      required: true,
      validate: (val) => (!val ? `请输入name` : ''),
    }
  ];
  return (
    <SafeAreaView>
      <Form form={form} schema={items} initialValues={initialValues} />
        <Button
          type="primary"
          onPress={() => {
            form
              .validateFields()
              .then((values) => Toast.success(JSON.stringify(values)))
              .catch((errors) => Toast.warning(JSON.stringify(errors)));
          }}>
          确定
        </Button>
    </SafeAreaView>
  );
};
```
<!--End-->

### customComponentList自定义表单组件

<!--DemoStart--> 
```jsx
import { SafeAreaView,Toast,Slider } from 'react-native';
import { Form } from '@uiw/react-native';

const FormDemo = () => {
  const form = Form.useForm();
  const customComponentList = {
      render: <Slider />,
  }
  const initialValues = {name: ''};
  const items = [
    {
      type: 'input',
      field: 'name',
      name: '输入框',
      required: true,
    },
    {
      type: 'render',
      field: 'render',
      name: '自定义',
    },
  ];
  return (
    <SafeAreaView>
      <Form form={form} schema={items} changeValidate={true} customComponentList={customComponentList} initialValues={initialValues} />
    </SafeAreaView>
  );
};
```
<!--End-->

### watch监听表单变化

<!--DemoStart--> 
```jsx
import { SafeAreaView,Toast } from 'react-native';
import { Form } from '@uiw/react-native';

const FormDemo = () => {
  const form = Form.useForm();
  const watch = {
    name: (value) => console.log('value', value)
  }
  const initialValues = {name: ''};
  const items = [
    {
      type: 'input',
      field: 'name',
      name: '输入框',
      required: true,
    }
  ];
  return (
    <SafeAreaView>
      <Form form={form} schema={items} watch={watch} initialValues={initialValues} />
    </SafeAreaView>
  );
};
```
<!--End-->

### 动态添加表单list(当type为cardList时)

> ⚠️ 警告:
  1.目前仅能嵌套一层cardList
  2.我们暂时无法验证到添加的表单项里的每一个字段<!--rehype:style=background: #F08800; color: #fff;-->。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

<!--DemoStart--> 
```jsx
import { SafeAreaView,View,Text } from 'react-native';
import { Form,Button,Flex } from '@uiw/react-native';

const FormDemo = () => {
  const form = Form.useForm();
  const initialValues = {name: ''};
  const items = [
    {
      type: 'cardList',
      field: 'cardList',
      name: '联系人集合',
      renderHeader: (i, { remove ,moveUp,moveDown,moveToTop,moveToBottom }) => (
        <View style={{marginTop: 12, display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
          <View>
            <Text>{`联系人${i + 1}`}</Text>
          </View>
          <Flex>
            <Text style={{marginRight:5}}  onPress={() => moveUp()}>上移</Text>
            <Text style={{marginRight:5}}  onPress={() => moveDown()}>下移</Text>
            <Text style={{marginRight:5}}  onPress={() => moveToTop()}>置顶</Text>
            <Text style={{marginRight:5}}  onPress={() => moveToBottom()}>置底</Text>
            <Text onPress={() => remove()}>删除</Text>
          </Flex>
        </View>
      ),
      renderAdd: ({ add }) => (
        <View style={{marginTop: 12}}>
          <Button onPress={() => add()} type="primary" size="default" bordered={false}>
            新增数据
          </Button>
        </View>
      ),
      items: [
        {
          type: 'input',
          field: 'name',
          name: '联系人姓名',
        },
        {
          type: 'input',
          field: 'phone',
          name: '联系人电话',
        },
      ],
    },
  ];
  return (
    <SafeAreaView>
      <Form form={form} schema={items} initialValues={initialValues} />
    </SafeAreaView>
  );
};
```
<!--End-->

### class组件获取form

<!--DemoStart--> 
```jsx
import { SafeAreaView,View,Text } from 'react-native';
import { Form,Button,Flex } from '@uiw/react-native';

class FormDemo extends React.Component {
  render(){
    const { form } = this.props
    const schema = [
      {
        type: 'input',
        field: 'name',
        name: '输入框',
        attr: {},
        required: true,
        validate: (val) => (!val ? `请输入name` : ''),
      }
    ];
    return (
      <SafeAreaView>
        <Form
          form={form}
          schema={schema}
          initialValues={{ name: '王滴滴', rate: 4 }}
          watch={{
            name: (value: unknown) => console.log('value', value),
          }}
          customComponentList={{
            render: <Slider />,
          }}
          changeValidate={true}
        />
        <Button
          type="primary"
          onPress={() => form.validateFields().then((values) => {}).catch((errors) => {}) }>
            确定
        </Button>
      </SafeAreaView>
    );
  }
}

const FormComponent = Form.create(FormDemo)

export default FormComponent;
```
<!--End-->



### FormProps
```ts
interface FormProps<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> {
  /**
   * 表单集合
  */
  schema?: FormItemsProps[];
  /**
   * 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建
  */
  form: FormInstance<FormData, FieldValue, FieldKey>;
  /**
   * 表单默认值，只有初始化以及重置时生效
  */
  initialValues?: Partial<FormData>;
  /**
   * 支持默认和卡片两种模式
  */
  mode?:'default' | 'card';
  // 表单是否在onChange时进行验证
  changeValidate?: boolean;
  // 监听表单字段变化
  watch?: Partial<Record<string, (value: unknown) => void>>;
  // 自定义组件
  customComponentList?: Partial<Record<string, JSX.Element>>;
}
```

### FormItemsProps
```ts
interface FormItemsProps {
  // 字段名
  field: string;
  // 字段类型(默认继承了react-native-uiw中的 input | textArea | slider | rate | radio | search | switch | checkBox | stepper ｜ cardList   )
  type: string;
  // 标签名
  name: string;
  // 验证规则
  validate?: RulesOption['validate'];
  options?: Array<{ label: string; value: KeyType }>;
  // 表单控件props
  attr?: any;
  // 展示是否必填
  required?: boolean;
  // 是否隐藏
  hide?:boolean
  // 当type为cardList生效,渲染每一项的头部内容
  renderHeader?:(index:number,{ remove }:{ remove:()=>void })=>React.ReactNode;
  // 当type为cardList生效,渲染添加按钮的文案
  renderAdd?:( { add }:{ add:()=>void } )=>React.ReactNode;
  // 当type为cardList生效,配置表单项
  items?: Omit<FormItemsProps, 'validate' | 'required'>[];
}
```

### FormInstance
```ts
type FormInstance<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> = {
  /**
   * 获取对应字段名的值
  */
  getFieldValue: (field: FieldKey) => FieldValue;
   /**
   * 设置对应字段名的值
  */
  setFieldValue: (field: FieldKey, value: FieldValue) => void;
   /**
   * 重制表单
  */
  resetFieldValue: () => void;
  /**
   * 触发验证
  */
  validate: () => Partial<Record<string, string>>;
  /**
   * 触发表单验证获取表单数据
  */
  validateFields: () => Promise<FormData> | any;
  getInnerMethods: (inner?: boolean) => InnerMethodsReturnType<FormData>;
};
```



