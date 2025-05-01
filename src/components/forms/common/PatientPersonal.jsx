import React from 'react';
import Typography from '@mui/material/Typography';
import {Container, InputWithSwitchWrapper} from '../../common/styled/index.js';
import * as fieldNames from '../../../constants/fieldNames.js';
import getLabelByFieldName from '../../../helpers/getLabelByFieldName.js';
import TextField from '../../formFields/TextField.jsx';
import SwitchFeild from '../../formFields/SwitchFeild.jsx';
import SelectField from '../../formFields/SelectField.jsx';
import contactMethodOptionsOrder from '../../../constants/genderOptionsOrder.js';
import contactMethodOptionsData from '../../../constants/contactMethodOptionsData.js';
import genderOptionsOrder from '../../../constants/genderOptionsOrder.js';
import genderOptionsData from '../../../constants/genderOptionsData.js';
import selectOptionsCreator from '../../../helpers/selectOptionsCreator.js';

const PatientPersonal = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: -3, fontWeight: 'bold' }}>Дані пацієнта</Typography>

      <Container cols={3}>
        <TextField name={fieldNames.secondName} label={getLabelByFieldName(fieldNames.secondName)} />
        <TextField name={fieldNames.firstName} label={getLabelByFieldName(fieldNames.firstName)} />
        <InputWithSwitchWrapper>
          <TextField name={fieldNames.middleName} label={getLabelByFieldName(fieldNames.middleName)}/>
          <SwitchFeild name={fieldNames.withMiddleName}/>
        </InputWithSwitchWrapper>
        <InputWithSwitchWrapper>
          <TextField name={fieldNames.IPN} label={getLabelByFieldName(fieldNames.IPN)}/>
          <SwitchFeild name={fieldNames.witnIPN}/>
        </InputWithSwitchWrapper>
        <TextField name={fieldNames.dateOfBirth} label={getLabelByFieldName(fieldNames.dateOfBirth)} />
        <SelectField
          name={fieldNames.gender}
          label={getLabelByFieldName(fieldNames.gender)}
          options={selectOptionsCreator(genderOptionsOrder, genderOptionsData)}
        />
      </Container>

      <Container>
        <TextField name={fieldNames.countryOfBirth} label={getLabelByFieldName(fieldNames.countryOfBirth)} />
        <TextField name={fieldNames.placeOfBirth} label={getLabelByFieldName(fieldNames.placeOfBirth)} />
        <SelectField
          name={fieldNames.preferedContactMethod}
          label={getLabelByFieldName(fieldNames.preferedContactMethod)}
          options={selectOptionsCreator(contactMethodOptionsOrder, contactMethodOptionsData)}
        />
        <TextField name={fieldNames.secretQuestion} label={getLabelByFieldName(fieldNames.secretQuestion)} />
        <TextField name={fieldNames.phone} label={getLabelByFieldName(fieldNames.phone)} />
        <TextField name={fieldNames.email} label={getLabelByFieldName(fieldNames.email)} />
      </Container>
    </>
  );
};

export default PatientPersonal;
