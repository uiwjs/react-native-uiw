import React, { useContext } from 'react';
import { View } from 'react-native';
import { Context } from './hooks/context';
import { KeyType, FormItemsProps } from './types';
import Label from './comps/label';
import Tip from './comps/tip';
import Container from './comps/container';
import styles from './styles';

const formchildItem = (props: Partial<FormItemsProps> & { field: string; children: React.ReactElement }) => {
  const { field, name = '', required = false, validate, children } = props;
  const {
    mode,
    innerMethods: { store = {}, updateStore, innerValidate },
    watch,
    changeValidate,
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
  return (
    <Container mode={mode}>
      <View style={styles.form_items_container}>
        <View style={[styles.form_items]}>
          <Label v={{ name: name, required: required }} />
          {_renderComponent(children)}
          <Tip v={{ validate: validate, field: field }} />
        </View>
      </View>
    </Container>
  );
};

export default formchildItem;
