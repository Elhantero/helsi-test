import React, {memo, forwardRef} from 'react';
import {useField} from 'react-final-form';
import {InputAdornment} from "@mui/material";
import {TextField} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { IMaskInput } from 'react-imask';

const DateMaskInput = forwardRef(function DateMaskInput(props, ref) {
	const { onChange, ...other } = props;

	let mask = String;
	let placeholder = '';

	if(props.name === 'dateOfBirth') {
		mask = "00.00.0000";
		placeholder = 'дд.мм.рррр';
	}
	if(props.name === 'phone') {
		mask="+{38}(000) 000 00 00"
		placeholder="+38(xxx) xxx xx xx"
	}

	const handleChange = (maskedValue) => {
		const trimmedValue = maskedValue.trim();
		onChange({ target: { value: trimmedValue } });
	};

	return (
		<IMaskInput
			{...other}
			mask={mask}
			placeholder={placeholder}
			inputRef={ref}
			onAccept={handleChange}
		/>
	);
});

const TextFieldCustom = memo(({name, label}) => {
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

	return (
		<TextField
			{...input}
			fullWidth
			label={label}
			error={touched && Boolean(error)}
			helperText={touched && error}
			variant="standard"
			InputProps={{
				inputComponent: DateMaskInput,
				endAdornment: touched && error && (
					<InputAdornment position="end">
						<ErrorOutlineIcon color="error" />
					</InputAdornment>
				),
			}}
			sx={{
				"& .MuiInput-underline:before": {
					borderBottomColor: touched && error ? "red" : "inherit",
				},
				"& .MuiInput-underline:after": {
					borderBottomColor: touched && error ? "red" : "primary.main",
				},
				"& .MuiFormHelperText-root": {
					textAlign: "right",
					width: "100%",
					margin: 0,
					position: "absolute",
					bottom: -20,
				},
				"& .MuiFormControl-root": {
					position: "relative",
				},
			}}
		/>
	);
});

export default TextFieldCustom;
