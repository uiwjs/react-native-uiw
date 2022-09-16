interface FormProps {
  formDatas?: FormItemsProps[];
}

interface FormItemsProps {
  label: string;
  type: string;
}

export type { FormProps, FormItemsProps };
