import Form from './form';
import useForm from './hooks/useForm';

type RefForm = typeof Form;

export interface FormComponent extends RefForm {
  useForm: typeof useForm;
}

const FormComp: FormComponent = Form as FormComponent;

FormComp.useForm = useForm;

export default FormComp;
