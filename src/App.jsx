import React from "react";
import {Form, FormSpy} from "react-final-form";
import TextFieldCustom from "./components/adaptedFields/TextFieldCustom.jsx";
import SwitchFeildCustom from "./components/adaptedFields/SwitchFeildCustom.jsx";
import * as fieldNames from './constants/fieldNames.js';
import getLabelByFieldName from './helpers/getLabelByFieldName.js'
import SelectField from './components/adaptedFields/SelectField.jsx';
import schema from './constants/validation/createPersonSchema.js'
import validator from "./helpers/validator.js";
import {InputWithSwitchWrapper, Container, PreBlock} from "./styled/index.js";
import FormDependenciesManager from "./components/FormDependenciesManager.jsx";

const App = () => {
	const onSubmit = (values) => {
		console.log("Submitted values:", values);
	};
	return (
		<Form
			onSubmit={onSubmit}
			validate={(values) => validator(schema, values)}
			initialValues={{
				[fieldNames.withMiddleName]: true,
				[fieldNames.witnIPN]: true,
			}}
			render={({handleSubmit}) => {

				return (
					<form onSubmit={handleSubmit} noValidate>
						<FormDependenciesManager />

						<Container cols={3}>

							<TextFieldCustom name={fieldNames.secondName} label={getLabelByFieldName(fieldNames.secondName)} />

							<TextFieldCustom name={fieldNames.firstName} label={getLabelByFieldName(fieldNames.firstName)} />

							<InputWithSwitchWrapper>
								<TextFieldCustom name={fieldNames.middleName} label={getLabelByFieldName(fieldNames.middleName)}/>
								<SwitchFeildCustom name={fieldNames.withMiddleName}/>
							</InputWithSwitchWrapper>

							<InputWithSwitchWrapper>
								<TextFieldCustom name={fieldNames.IPN} label={getLabelByFieldName(fieldNames.IPN)}/>
								<SwitchFeildCustom name={fieldNames.witnIPN}/>
							</InputWithSwitchWrapper>

							<TextFieldCustom name={fieldNames.dateOfBirth} label={getLabelByFieldName(fieldNames.dateOfBirth)} />

							<SelectField
								name={fieldNames.gender}
								label={getLabelByFieldName(fieldNames.gender)}
								options={[
									{ value: '', label: '--Вибрати--' },
									{ value: 1, label: 'жіноча' },
									{ value: 2, label: 'чоловіча' },
								]}
							/>
						</Container>

						<Container>
							<TextFieldCustom name={fieldNames.countryOfBirth} label={getLabelByFieldName(fieldNames.countryOfBirth)} />
							<TextFieldCustom name={fieldNames.placeOfBirth} label={getLabelByFieldName(fieldNames.placeOfBirth)} />
							<SelectField
								name={fieldNames.preferedContactMethod}
								label={getLabelByFieldName(fieldNames.preferedContactMethod)}
								options={[
									{ value: '', label: '--Вибрати--' },
									{ value: 1, label: 'Електронною поштою' },
									{ value: 2, label: 'Телефоном' },
								]}
							/>
							<TextFieldCustom name={fieldNames.secretQuestion} label={getLabelByFieldName(fieldNames.secretQuestion)} />
							<TextFieldCustom name={fieldNames.phone} label={getLabelByFieldName(fieldNames.phone)} />
							<TextFieldCustom name={fieldNames.email} label={getLabelByFieldName(fieldNames.email)} />
						</Container>


						<button style={{ marginTop:'25px' }} type="submit">Зберегти</button>

						<FormSpy subscription={{ values: true }}>
							{({ values }) => <PreBlock>{JSON.stringify(values, undefined, 2)}</PreBlock>}
						</FormSpy>
					</form>
				)
			}}
		/>
	)
};

export default App;
