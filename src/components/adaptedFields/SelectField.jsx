import React from 'react';
import { Field } from 'react-final-form';
import { FormControl, InputLabel, Select, MenuItem, InputAdornment, FormHelperText } from '@mui/material';

const SelectField = ({ name, label, options }) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <FormControl
          variant="standard"
          sx={{
            m: 1,
            minWidth: 120,
            margin: 0,
            position: 'relative',
            '& .MuiInput-underline:before': {
              borderBottomColor: meta.touched && meta.error ? 'red' : 'inherit',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: meta.touched && meta.error ? 'red' : 'primary.main',
            },
            '& .MuiFormHelperText-root': {
              textAlign: 'right',
              width: '100%',
              margin: 0,
              position: 'absolute',
              bottom: -20,
            },
          }}
          error={meta.touched && Boolean(meta.error)}
        >
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            {...input}
            labelId={`${name}-label`}
            id={name}
            label={label}
            fullWidth
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {meta.touched && meta.error && (
            <FormHelperText>{meta.error}</FormHelperText>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default SelectField;
