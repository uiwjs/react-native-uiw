import React, { FC, useContext } from 'react';
import { KeyType, FormItemsProps } from './types';
import { isObjectEmpty } from './utils/is';
import { Context } from './hooks/context';
import Radio from '../Radio';
import CheckBox from '../CheckBox';
import Rating from '../Rating';
import Switch from '../Switch';
import SearchBar from '../SearchBar';
import FormDatePicker from './comps/datePicker';
import Stepper from '../Stepper';
import TextArea from '../TextArea';
import Slider from '../Slider';
import Button from '../Button';
import Card from '../Card';
import Label from './comps/label';
import Tip from './comps/tip';
import { View, SafeAreaView, TextInput } from 'react-native';
import styles from './styles';
import { values } from 'lodash';

const FormList = ({
  formListValue = {
    field: '',
    type: '',
    name: '',
  },
}: {
  formListValue: FormItemsProps;
}) => {
  const {
    innerMethods: { store = {}, updateStore, customComponentList },
  } = useContext(Context);

  const change = (field: KeyType, value: unknown, index: number) => {
    const list = store[formListValue.field] || [];
    const obj = {
      ...store[formListValue.field][index],
      [field]: value,
    };
    list.splice(index, 1, obj);
    updateStore?.({ store: { ...store, [formListValue.field]: list } });
  };

  const _renderComponent = (v: FormItemsProps, index: number) => {
    const options = v.options || [];
    const values = { ...store[formListValue.field][index] };
    if (v.type === 'input') {
      return (
        <TextInput
          value={values[v.field]}
          onChangeText={(value) => {
            change(v.field, value, index);
          }}
          {...v.attr}
        />
      );
    }
    if (v.type === 'textArea') {
      return (
        <TextArea
          onChange={(value: string) => {
            change(v.field, value, index);
          }}
          value={store[v.field]}
          {...v.attr}
        />
      );
    }
    if (v.type === 'radio') {
      return options.map((item, idx) => (
        <Radio
          key={idx}
          checked={item.value === values[v.field]}
          onPress={() => {
            change(v.field, item.value, index);
          }}
          {...v.attr}
        >
          {item.label}
        </Radio>
      ));
    }
    if (v.type === 'checkBox') {
      return options.map((item, idx) => {
        const value = values[v.field] || [];
        return (
          <CheckBox
            key={idx}
            checked={value.includes(item.value)}
            onChange={() => {
              let data = value || [];
              if (!data.includes(item.value)) {
                data.push(item.value);
              } else {
                const idx = data.findIndex((v: KeyType) => v === item.value);
                data.splice(idx, 1);
              }
              change(v.field, data, index);
            }}
            {...v.attr}
          >
            {item.label}
          </CheckBox>
        );
      });
    }
    if (v.type === 'rate') {
      return (
        <Rating
          onPress={(number) => {
            change(v.field, number, index);
          }}
          {...v.attr}
        />
      );
    }
    if (v.type === 'switch') {
      return (
        <Switch
          checked={values[v.field]}
          onValueChange={() => {
            change(v.field, !values[v.field], index);
          }}
          {...v.attr}
        />
      );
    }
    if (v.type === 'search') {
      return (
        <SearchBar
          options={options}
          onChange={(value) => {
            change(v.field, value, index);
          }}
          contentStyle={{ paddingHorizontal: 0 }}
          {...v.attr}
        />
      );
    }
    if (v.type === 'datePicker') {
      return <FormDatePicker value={values[v.field]} ok={(value) => change(v.field, value, index)} {...v.attr} />;
    }
    if (v.type === 'stepper') {
      return (
        <Stepper
          value={values[v.field]}
          onChange={(value) => {
            change(v.field, value, index);
          }}
          {...v.attr}
        />
      );
    }
    if (v.type === 'slider') {
      return (
        <Slider
          value={values[v.field]}
          onChange={(value) => {
            change(v.field, value, index);
          }}
          {...v.attr}
        />
      );
    }
    // 自定义组件
    if (!isObjectEmpty(customComponentList) && Object.keys(customComponentList).includes(v.type)) {
      return React.isValidElement(customComponentList[v.type])
        ? React.cloneElement(customComponentList[v.type], {
            ...v.attr,
            value: values[v.field],
            onChange: (value: unknown) => {
              change(v.field, value, index);
            },
          })
        : null;
    }
    return null;
  };

  const _render = (index: number) => {
    return (formListValue.items || []).map((v: FormItemsProps, i: number) => {
      if (v.hide) {
        return null;
      }
      if (v.type === 'cardList') {
        return <FormList formListValue={v}></FormList>;
      }
      return (
        <View key={i} style={styles.form_items_container}>
          <View style={styles.form_items}>
            <Label v={v} />
            {_renderComponent(v, index)}
            <Tip v={v} />
          </View>
        </View>
      );
    });
  };

  const handleOperate = (type = '', index?: number) => {
    let list = store[formListValue.field] || [];
    if (type === 'add') list.push({});
    if (type === 'delete') list.splice(index, 1);
    updateStore?.({ store: { ...store, [formListValue.field]: list } });
  };

  return (
    <SafeAreaView style={styles.warpper}>
      {(store[formListValue.field] || []).map((item: Record<string, unknown>, index: number) => (
        <Card key={index}>
          {_render(index)}
          <Card.Actions
            driver={false}
            actions={[
              {
                text: '删除',
                actionsTextStyle: { color: '#333' },
                onPress: () => handleOperate('delete', index),
              },
            ]}
          />
        </Card>
      ))}
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
        <Button onPress={() => handleOperate('add')} type="primary" size="default">
          新增数据
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default FormList;
