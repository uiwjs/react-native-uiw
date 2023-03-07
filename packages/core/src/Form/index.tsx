import Form from './form';
import FormChildItem from './formchildItem';
import create from './createForm';
import useForm from './hooks/useForm';

type RefForm = typeof Form;

export interface FormComponent extends RefForm {
  useForm: typeof useForm;
  create: typeof create;
  Item: typeof FormChildItem;
}

const FormComp: FormComponent = Form as FormComponent;

FormComp.useForm = useForm;
FormComp.create = create;
FormComp.Item = FormChildItem;

export default FormComp;
