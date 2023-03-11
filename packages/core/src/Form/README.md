Form 表单
---

集成react-native-uiw表单控件,并支持自定义组件

> 🚧 注意：测试版本谨慎使用。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### 基础示例

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Form } from '@uiw/react-native';

const FormDemo = () => {
  const form = Form.useForm();
  const initialValues = { name: '王滴滴' };
  const items = [
    {
      type: 'input',
      field: 'name',
      name: 'lable',
      placeholder: '请输入'
    }
  ];
  return (
    <SafeAreaView>
      <Form form={form} schema={items} initialValues={initialValues} />
    </SafeAreaView>
  );
}
export default FormDemo
```
<!--End-->

### form.validateFields进行表单验证提交

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { SafeAreaView,Toast } from 'react-native';
import { Form,Button } from '@uiw/react-native';

const FormDemo = () => {
  const form = Form.useForm();
  const initialValues = {name: ''};
  const items = [
    {
      type: 'input',
      field: 'name',
      name: 'lable',
      attr: {},
      placeholder: '请输入',
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
export default FormDemo
```
<!--End-->

### customComponentList自定义表单组件

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { SafeAreaView, Slider } from 'react-native';
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
      name: 'lable',
      placeholder: '请输入',
      required: true,
    },
    {
      type: 'render',
      field: 'render',
      placeholder: '请输入',
      name: '自定义',
    },
  ];
  return (
    <SafeAreaView>
      <Form
        form={form}
        schema={items}
        // customComponentList={customComponentList}
        initialValues={initialValues}
      />
    </SafeAreaView>
  );
};
export default FormDemo
```
<!--End-->


### watch监听表单变化

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { SafeAreaView } from 'react-native';
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
      name: 'lable',
      placeholder: '请输入',
      required: true,
    }
  ];
  return (
    <SafeAreaView>
      <Form form={form} schema={items} watch={watch} initialValues={initialValues} />
    </SafeAreaView>
  );
};
export default FormDemo
```
<!--End-->

### 动态添加表单list(当type为cardList时)

> ⚠️ 警告:
  1.目前仅能嵌套一层cardList
  2.我们暂时无法验证到添加的表单项里的每一个字段<!--rehype:style=background: #F08800; color: #fff;-->。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { SafeAreaView,View,Text } from 'react-native';
import { Form,Button,Flex } from '@uiw/react-native';

const FormDemo = () => {
  const form = Form.useForm();
  const initialValues = {name: ''};
  const items = [
    {
      type: 'cardList',
      field: 'cardList',
      placeholder: '请输入',
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
          placeholder: '请输入',
          name: '联系人姓名',
        },
        {
          type: 'input',
          field: 'phone',
          placeholder: '请输入',
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
export default FormDemo
```
<!--End-->

### class组件获取form

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React from 'react'
import { SafeAreaView } from 'react-native';
import { Form, Button } from '@uiw/react-native';

class FormDemo extends React.Component {
  render(){
    const { form } = this.props
    const schema = [
      {
        type: 'input',
        field: 'name',
        name: 'lable',
        attr: {},
        required: true,
        placeholder: '请输入',
        validate: (val) => (!val ? `请输入name` : ''),
      }
    ];
    return (
      <SafeAreaView>
        <Form
          form={form}
          schema={schema}
          initialValues={{ name: '王滴滴' }}
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

### Form.Item

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { SafeAreaView,TextInput } from 'react-native';
import { Form } from '@uiw/react-native';

const Input = ({ value, onChange, ...others }) => {
  return (
    <TextInput
      value={value}
      onChangeText={(value) => {
        onChange?.(value);
      }}
      {...others}
    />
  );
};

const FormDemo = () => {
  const form = Form.useForm();
  const watch = {
    name: (value) => console.log('value', value)
  }
  return (
    <SafeAreaView>
      <Form type="custom" form={form}  watch={watch} changeValidate={true}>
        <Form.Item required field="name" name="姓名" validate={(val) => (!val ? '请输入姓名' : '')}>
          <Input placeholder='请输入' />
        </Form.Item>
      </Form>
    </SafeAreaView>
  );
};
export default FormDemo
```
<!--End-->

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `schema` | 表单集合 | FormItemsProps[] | [] |
| `form` | 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建 | FormInstance<`FormData`, `FieldValue`, `FieldKey`> | - |
| `initialValues` | 表单默认值，只有初始化以及重置时生效 | Partial<`FormData`> | - |
| `mode` | 支持默认和卡片两种模式 | `default` \| `card` | | default |
| `type` | 表单布局模式 | `json` \| `custom` | `json` |
| `changeValidate` | 表单是否在onChange时进行验证 | boolean | false |
| `watch` | 监听表单字段变化 | Partial<Record<string, (value: unknown) => void>> | - |
| `customComponentList` | 自定义组件 | Partial<Record<string, JSX.Element>> | - |


### FormItemsProps

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `field` | 字段名 | string | - |
| `type` | 字段类型(`input` \| `textArea`  \| `slider` \| `rate` \| `radio` \| `search`\| `switch`\| `checkBox`\| `stepper`\| `cardList`) | string | - |
| `name` | 标签名 | string | - |
| `validate` | 验证规则 | RulesOption['validate'] | - |
| `options` | 集合 | Array<{ label: string; value: KeyType }> | - |
| `attr` | 表单控件props | any | - |
| `required` | 展示是否必填 | boolean | - |
| `hide` | 是否隐藏 | boolean | - |
| `renderHeader` | 当type为cardList生效,渲染每一项的头部内容 | (index:number,{ remove }:{ remove:()=>void })=>React.ReactNode | - |
| `renderAdd` | 当type为cardList生效,渲染添加按钮的文案 | ( { add }:{ add:()=>void } )=>React.ReactNode | - |
| `items` | 当type为cardList生效,配置表单项 | Omit<FormItemsProps, `validate` \| `required`>[] | - |

### FormInstanceProps

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `getFieldValue` | 获取对应字段名的值 | (field: FieldKey) => FieldValue | - |
| `setFieldValue` | 设置对应字段名的值 | (field: FieldKey, value: FieldValue) => void | - |
| `resetFieldValue` | 重制表单 | () => void | - |
| `validate` | 触发验证 | () => Partial<Record<string, string>> | - |
| `validateFields` | 触发表单验证获取表单数据 | () => Promise<FormData> \| any | - |
| `getInnerMethods` | 组件内部方法集合 | (inner?: boolean) => InnerMethodsReturnType<FormData> | - |


