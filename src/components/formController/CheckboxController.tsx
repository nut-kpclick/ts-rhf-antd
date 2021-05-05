import { Checkbox } from 'antd';
import React from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';

interface CheckboxControllerProps {
  name: string;
  control: Control;
  errors: FieldErrors;
  children: React.ReactNode;
}

const CheckboxController: React.FC<CheckboxControllerProps> = ({
  name,
  control,
  errors,
  children,
}) => {
  return (
    <React.Fragment>
      <Controller
        control={control}
        name={name}
        render={({ onChange, value, ref }) => (
          <Checkbox
            onChange={(e) => onChange(e.target.checked)}
            checked={value}
            ref={ref}
          >
            {children}
          </Checkbox>
        )}
      />
      <br />
      {errors[name] && (
        <small style={{ color: 'red' }}>{errors[name].message}</small>
      )}
    </React.Fragment>
  );
};

export default CheckboxController;
