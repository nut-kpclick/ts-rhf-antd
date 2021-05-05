import React from 'react';
import { Button, notification } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputUseController from './InputUseController';
import CheckboxUseCOntroller from './CheckboxUseCOntroller';

type FormValues = {
  inputUseControl: string;
  checkboxUseControl: boolean;
};

const UseFormController: React.FC = () => {
  const schema = yup.object().shape({
    inputUseControl: yup.string().required(),
    checkboxUseControl: yup
      .bool()
      .required('The terms and conditions must be accepted.')
      .oneOf([true], 'Field must be checked'),
  });

  const { handleSubmit, control, errors } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      checkboxUseControl: false,
    },
  });

  const onsubmit = (dataForm: FormValues) => {
    notification.open({
      message: 'Notification Title',
      description: JSON.stringify(dataForm, null, 1),
    });
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <p>
        <InputUseController
          name='inputUseControl'
          control={control}
          errors={errors}
        />
      </p>

      <p>
        <CheckboxUseCOntroller
          name='checkboxUseControl'
          control={control}
          errors={errors}
        >
          checkbox UseControl
        </CheckboxUseCOntroller>
      </p>
      <Button block htmlType='submit' type='primary'>
        SUBMIT
      </Button>
    </form>
  );
};

export default UseFormController;
