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
      <Form form={form} formDatas={items} initialValues={initialValues} />
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
  const form = Form.useForm({
    changeValidate: true,
  });
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
      <Form form={form} formDatas={items} initialValues={initialValues} />
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
  const form = Form.useForm({
    changeValidate: true,
    customComponentList: {
      render: <Slider />,
    },
  });
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
      <Form form={form} formDatas={items} initialValues={initialValues} />
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
  const form = Form.useForm({
    changeValidate: true,
    watch: {
      name: (value: unknown) => {
        console.log('value', value);
      },
    }
  });
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
      <Form form={form} formDatas={items} initialValues={initialValues} />
    </SafeAreaView>
  );
};
```
<!--End-->

### 动态表单list

> ⚠️ 警告:目前仅能嵌套一层cardList<!--rehype:style=background: #F08800; color: #fff;-->。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

<!--DemoStart--> 
```jsx
import { SafeAreaView,Toast } from 'react-native';
import { Form } from '@uiw/react-native';

const FormDemo = () => {
  const form = Form.useForm({
    changeValidate: true,
  });
  const initialValues = {name: ''};
  const items = [
    {
      type: 'cardList',
      field: 'cardList',
      name: '动态list',
      required: true,
      items:[
        {
          type: 'input',
          field: 'cardList',
          name: '动态list',
          required: true,
        }
      ]
    }
  ];
  return (
    <SafeAreaView>
      <Form form={form} formDatas={items} initialValues={initialValues} />
    </SafeAreaView>
  );
};
```
<!--End-->

### FormProps
```ts
interface FormProps<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> {
  /**
   * 表单集合
  */
  formDatas?: FormItemsProps[];
  /**
   * useForm表单实例
  */
  form: FormInstance<FormData, FieldValue, FieldKey>;
  /**
   * 表单默认值
  */
  initialValues?: Partial<FormData>;
}
```

### FormItemsProps
```ts
interface FormItemsProps {
  field: string;
  type: string;
  name: string;
  validate?: RulesOption['validate'];
  options?: Array<{ label: string; value: KeyType | any }>;
  attr?: any;
  required?: boolean;
  hide?:boolean
}
```

### FormInstance
```ts
type FormInstance<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> = {
  getFieldValue: (field: FieldKey) => FieldValue;
  setFieldValue: (field: FieldKey, value: FieldValue) => void;
  resetFieldValue: () => void;
  validate: () => Partial<Record<string, string>>;
  validateFields: () => Promise<FormData> | any;
  getInnerMethods: (inner?: boolean) => InnerMethodsReturnType<FormData>;
};
```

