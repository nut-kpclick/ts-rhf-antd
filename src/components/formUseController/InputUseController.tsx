import { Input } from 'antd';
import React from 'react';
import { useController, Control, FieldErrors } from 'react-hook-form';

interface Props {
  name: string;
  control: Control;
  errors: FieldErrors;
}

const InputUseController: React.FC<Props> = ({ name, control, errors }) => {
  const { field, meta } = useController({ name, control });
  return (
    <React.Fragment>
      <Input {...field} />
      <p>
        {meta.invalid && (
          <small style={{ color: 'red' }}>{errors[name].message}</small>
        )}
      </p>
    </React.Fragment>
  );
};

export default InputUseController;
