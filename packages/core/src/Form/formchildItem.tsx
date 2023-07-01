import React, { useContext } from 'react';
import { View } from 'react-native';
import { Context } from './hooks/context';
import { KeyType, FormItemsProps } from './types';
import Label from './comps/label';
import Tip from './comps/tip';
import Flex from '../Flex';
import Container from './comps/container';
import styles from './styles';

const formchildItem = (props: Partial<FormItemsProps> & { field: string; children: React.ReactElement }) => {
  const { field, name = '', required = false, validate, children } = props;
  const {
    mode,
    innerMethods: { store = {}, updateStore, innerValidate },
    watch,
    changeValidate,
    cardProps,
    containerStyle,
    displayType,
    labelStyle,
  } = useContext(Context);

  const change = (field: KeyType, value: unknown) => {
    updateStore?.({ store: { ...store, [field]: value } });
    watch && watch[field]?.(value);
  };

  const _renderComponent = (children: React.ReactElement) => {
    return React.isValidElement(children)
      ? React.cloneElement(children, {
          value: store[field],
          onChange: (value: unknown) => {
            change(field, value);
            if (changeValidate) innerValidate();
          },
        } as any)
      : null;
  };

  let child = (
    <View style={[styles.form_items]}>
      <View style={[styles.form_items]}>
        <Label v={{ name: name, required: required }} />
        {_renderComponent(children)}
        <Tip v={{ validate: validate, field: field }} />
      </View>
    </View>
  );

  if (displayType === 'row') {
    child = (
      <View style={[styles.form_items]}>
        <Flex justify="between" align="center">
          <Label v={{ name: name, required: required }} labelStyle={labelStyle} />
          <View style={{ flex: 1 }}>{_renderComponent(children)}</View>
        </Flex>
        <Tip v={{ validate: validate, field: field }} />
      </View>
    );
  }

  return (
    <Container mode={mode} cardProps={cardProps} containerStyle={containerStyle}>
      <View style={styles.form_items_container}>{child}</View>
    </Container>
  );
};

export default formchildItem;
