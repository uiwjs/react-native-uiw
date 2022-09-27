import React from 'react';
import useForm from './hooks/useForm';
import { FormProps } from './types';

function create(Com: React.FC<FormProps>) {
  return (props: FormProps) => {
    const form = useForm();
    const baseProps = {
      ...props,
      form: form,
    };
    return <Com {...baseProps} />;
  };
}

export default create;
