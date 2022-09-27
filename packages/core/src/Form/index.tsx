import Form from './form';
import create from './createForm';
import useForm from './hooks/useForm';

type RefForm = typeof Form;

export interface FormComponent extends RefForm {
  useForm: typeof useForm;
  create: typeof create;
}

const FormComp: FormComponent = Form as FormComponent;

FormComp.useForm = useForm;
FormComp.create = create;

export default FormComp;
