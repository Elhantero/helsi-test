import React, {memo} from 'react';
import {useField} from 'react-final-form';
import { useFormState } from 'react-final-form';
import {InputAdornment} from '@mui/material';
import {TextField as TextFieldMUI} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MaskInput from '../common/MaskInput.jsx';
import getFieldDisabledStatus from '../../helpers/getFieldDisabledStatus.js';
import getFieldAlternativeLabel from '../../helpers/getFieldAlternativeLabel.js';

const TextField = memo(({name, label}) => {
  const {
    input,
    meta: {touched, error},
  } = useField(name, {
    subscription: {
      value: true,
      touched: true,
      error: true,
      active: true
    },
  });
  const { values } = useFormState();
  const disabled = getFieldDisabledStatus(name, values);
  const altLabel = getFieldAlternativeLabel(name, values);

  return (
    <TextFieldMUI
      {...input}
      fullWidth
      disabled={disabled}
      label={altLabel || label}
      error={touched && Boolean(error)}
      helperText={touched && error}
      variant="standard"
      InputProps={{
        inputComponent: MaskInput,
        endAdornment: touched && error && (
          <InputAdornment position="end">
            <ErrorOutlineIcon color="error" />
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiInput-underline:before': {
          borderBottomColor: touched && error ? 'red' : 'inherit',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: touched && error ? 'red' : 'primary.main',
        },
        '& .MuiFormHelperText-root': {
          textAlign: 'right',
          width: '100%',
          margin: 0,
          position: 'absolute',
          bottom: -20,
        },
        '& .MuiFormControl-root': {
          position: 'relative',
        },
      }}
    />
  );
});

export default TextField;
