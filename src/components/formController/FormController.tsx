import React from 'react';
import { Button, notification } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CheckboxController from './CheckboxController';
import InputController from './InputController';

type FormValues = {
  inputAntd: string;
  checkboxAntd: boolean;
};

const FormController = () => {
  const schema = yup.object().shape({
    inputControler: yup.string().required(),
    checkboxAntd: yup
      .bool()
      .required('The terms and conditions must be accepted.')
      .oneOf([true], 'Field must be checked'),
  });
  const { handleSubmit, control, errors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onsubmit = (dataForm: FormValues) => {
    console.log('errors', errors);
    notification.open({
      message: 'Notification Title',
      description: JSON.stringify(dataForm),
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <p>
        <InputController
          name='inputControler'
          control={control}
          errors={errors}
        />
      </p>

      <p>
        <CheckboxController
          name='checkboxAntd'
          control={control}
          errors={errors}
        >
          checkboxAntd
        </CheckboxController>
      </p>
      <Button block htmlType='submit' type='primary'>
        SUBMIT
      </Button>
    </form>
  );
};

export default FormController;
