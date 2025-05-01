import React, {forwardRef} from 'react';
import {IMaskInput} from 'react-imask';
import getMaskByFieldName from '../../helpers/getMaskByFieldName.js';
import getPlaceholderByFieldName from '../../helpers/getPlaceholderByFieldName.js';

const MaskInput= forwardRef(function DateMaskInput(props, ref) {
  const { onChange, ...other } = props;

  const handleChange = (maskedValue) => {
    const trimmedValue = maskedValue.trim();
    onChange({ target: { value: trimmedValue } });
  };

  return (
    <IMaskInput
      {...other}
      mask={getMaskByFieldName(props.name)}
      placeholder={getPlaceholderByFieldName(props.name)}
      inputRef={ref}
      onAccept={handleChange}
    />
  );
});

export default MaskInput;
