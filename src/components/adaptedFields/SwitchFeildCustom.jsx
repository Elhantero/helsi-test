import React from 'react';
import {Field} from 'react-final-form';
import {FormControlLabel, Switch} from '@mui/material';

const SwitchFeildCustom = ({name, label}) => {
  return (
    <Field name={name}>
      {({input}) => (
        <FormControlLabel
          control={
            <Switch
              checked={!!input.value}
              onChange={(event) => input.onChange(event.target.checked)}
            />
          }
          label={label}
        />
      )}
    </Field>
  );
};

export default SwitchFeildCustom;
