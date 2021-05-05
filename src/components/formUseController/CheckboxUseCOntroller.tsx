import { Checkbox } from 'antd';
import React, { ReactChild } from 'react';
import { Control, FieldErrors, useController } from 'react-hook-form';
interface Props {
  name: string;
  control: Control;
  errors: FieldErrors;
  children: ReactChild;
}

const CheckboxUseCOntroller: React.FC<Props> = ({
  name,
  control,
  errors,
  children,
}) => {
  const {
    field: { onChange, value, ref, ...rest },
    meta,
  } = useController({ name, control });
  return (
    <div>
      <Checkbox
        checked={value}
        ref={ref}
        onChange={(e) => onChange(e.target.checked)}
        {...rest}
      >
        {children}
      </Checkbox>
      <p>
        {meta.invalid && (
          <small style={{ color: 'red' }}>{errors[name].message}</small>
        )}
      </p>
    </div>
  );
};

export default CheckboxUseCOntroller;
