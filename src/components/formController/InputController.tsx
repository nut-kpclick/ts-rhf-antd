import { Input } from 'antd';
import React from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';

interface Props {
  name: string;
  control: Control;
  errors: FieldErrors;
}

const InputController: React.FC<Props> = ({ control, name, errors }) => {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ onChange, onBlur, value, ref }) => (
          <Input
            onBlur={onBlur}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            ref={ref}
          />
        )}
      />
      {errors[name] && (
        <small style={{ color: 'red' }}>{errors[name].message}</small>
      )}
    </div>
  );
};

export default InputController;
