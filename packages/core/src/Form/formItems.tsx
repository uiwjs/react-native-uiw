import React, { FC, useContext } from 'react';
import { KeyType, FormItemsProps } from './types';
import { Context } from './hooks/context';
import Radio from '../Radio';
import CheckBox from '../CheckBox';
import Rating from '../Rating';
import Switch from '../Switch';
import SearchBar from '../SearchBar';
import FormDatePicker from './comps/datePicker';
import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';

const FormItems: FC<any> = ({ formDatas = [] }) => {
  const {
    innerMethods: { store = {}, updateStore, forceUpdate, validator },
  } = useContext(Context);

  const change = (field: KeyType, value: any) => updateStore?.({ store: { ...store, [field]: value } });

  const validate = () => {
    validator.showMessages();
    forceUpdate();
  };

  const _renderComponent = (v: FormItemsProps) => {
    const options = v.options || [];
    if (v.type === 'render') {
      return v.render;
    }
    if (v.type === 'input') {
      return (
        <TextInput
          value={store[v.field]}
          onChangeText={(value) => change(v.field, value)}
          onBlur={() => validate()}
          {...v.attr}
        />
      );
    }
    if (v.type === 'radio') {
      return options.map((item, idx) => (
        <Radio
          key={idx}
          checked={item.value === store[v.field]}
          onPress={() => change(v.field, item.value)}
          {...v.attr}
        >
          {item.label}
        </Radio>
      ));
    }
    if (v.type === 'checkBox') {
      return options.map((item, idx) => {
        const values = store[v.field] || [];
        return (
          <CheckBox
            key={idx}
            checked={values.includes(item.value)}
            onChange={() => {
              let data = store[v.field] || [];
              if (!data.includes(item.value)) {
                data.push(item.value);
              } else {
                const idx = data.findIndex((v: KeyType) => v === item.value);
                data.splice(idx, 1);
              }
              change(v.field, data);
            }}
            onBlur={() => validate()}
            {...v.attr}
          >
            {item.label}
          </CheckBox>
        );
      });
    }
    if (v.type === 'rate') {
      return <Rating onPress={(number) => change(v.field, number)} {...v.attr} />;
    }
    if (v.type === 'switch') {
      return <Switch checked={store[v.field]} onValueChange={() => change(v.field, !store[v.field])} {...v.attr} />;
    }
    if (v.type === 'search') {
      return (
        <SearchBar
          options={options}
          onChange={(val) => change(v.field, val)}
          onBlur={() => validate()}
          contentStyle={{ paddingHorizontal: 0 }}
          {...v.attr}
        />
      );
    }
    if (v.type === 'datePicker') {
      return <FormDatePicker value={store[v.field]} ok={(value) => change(v.field, value)} {...v.attr} />;
    }
    return null;
  };

  const Label = (v: FormItemsProps) => {
    return (
      <Text style={styles.label} {...v.attr}>
        {v.name}
      </Text>
    );
  };

  const Tip = (v: FormItemsProps) => {
    const content = validator.message(v.field, store[v.field], {
      validate: v?.validate,
    });
    return <Text style={{ color: 'red', marginBottom: content && 10, marginTop: content && 10 }}>{content}</Text>;
  };

  const _render = () => {
    return formDatas.map((v: FormItemsProps, i: number) => {
      return (
        <View key={i} style={styles.form_items_container}>
          <View style={styles.form_items}>
            {Label(v)}
            {_renderComponent(v)}
            {Tip(v)}
          </View>
        </View>
      );
    });
  };

  return <SafeAreaView style={styles.warpper}>{_render()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  warpper: {
    backgroundColor: '#fff',
  },
  form_items_container: {
    flex: 1,
  },
  form_items: {
    textAlign: 'center',
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  label: {
    width: 110,
    fontSize: 16,
    color: '#434343',
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default FormItems;
