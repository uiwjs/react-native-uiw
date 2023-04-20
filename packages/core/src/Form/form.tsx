import React, { useEffect, useRef } from 'react';
import FormItems from './formItems';
import { Provider } from './hooks/context';
import { FormProps } from './types';
import { cloneDeep } from './utils';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import TextArea from '../TextArea';
import Slider from '../Slider';
import SearchBar from '../SearchBar';
import Stepper from '../Stepper';
import TreeSelect from '../TreeSelect';
import VerificationCode from '../VerificationCode';
import DatePeriodInput from '../DatePicker/date-period-input';
import Input from './comps/input';
import Rating from './comps/rate';
import Radio from './comps/radio';
import Switch from './comps/switch';
import CheckBox from './comps/checkBox';
import Picker from './comps/picker';
import DatePicker from './comps/datePicker';
import Tree from './comps/tree';

const Form = (baseProps: FormProps) => {
  const {
    schema,
    form,
    initialValues = {},
    mode = 'default',
    type = 'json',
    watch,
    customComponentList = {},
    changeValidate = false,
    children,
  } = baseProps;
  const theme = useTheme<Theme>();
  const isMount = useRef<boolean>();

  const innerMethods = form.getInnerMethods(true);

  useEffect(() => {
    if (!isMount.current) {
      innerMethods.updateStore({ initialValues: cloneDeep(initialValues), store: initialValues });
    }
  }, []);

  useEffect(() => {
    isMount.current = true;
  }, []);

  const contextProps = {
    innerMethods: innerMethods,
    mode: mode,
    watch: watch,
    customComponentList: {
      ...customComponentList,
      input: <Input />,
      textArea: <TextArea />,
      slider: <Slider />,
      rate: <Rating disabled={false} />,
      radio: <Radio />,
      search: <SearchBar />,
      switch: <Switch />,
      checkBox: <CheckBox />,
      stepper: <Stepper value={0} onChange={() => {}} />,
      treeSelect: <TreeSelect options={[]} />,
      picker: <Picker />,
      datePicker: <DatePicker />,
      datePeriodInput: <DatePeriodInput />,
      verificationCode: <VerificationCode outerStyle={{ backgroundColor: theme.colors.mask }} />,
      tree: <Tree />,
    },
    changeValidate: changeValidate,
  };

  return <Provider contextProps={contextProps}>{type === 'json' ? <FormItems schema={schema} /> : children}</Provider>;
};

export default Form;
