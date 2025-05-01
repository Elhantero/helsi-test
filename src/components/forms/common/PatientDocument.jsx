import React from 'react';
import Typography from '@mui/material/Typography';
import {Container, InputWithSwitchWrapper} from '../../common/styled/index.js';
import * as fieldNames from '../../../constants/fieldNames.js';
import getLabelByFieldName from '../../../helpers/getLabelByFieldName.js';
import TextField from '../../formFields/TextField.jsx';
import SelectField from '../../formFields/SelectField.jsx';
import genderOptionsOrder from '../../../constants/genderOptionsOrder.js';
import genderOptionsData from '../../../constants/genderOptionsData.js';
import selectOptionsCreator from '../../../helpers/selectOptionsCreator.js';
import documentOptionsOrder from '../../../constants/documentOptionsOrder.js';
import documentsOptionsData from '../../../constants/documentsOptionsData.js';

const PatientDocument = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: -3, mt: 8, fontWeight: 'bold' }}>Документ, що посвідчує особу</Typography>

      <Container>
        <SelectField
          name={fieldNames.documentType}
          label={getLabelByFieldName(fieldNames.documentType)}
          options={selectOptionsCreator(documentOptionsOrder, documentsOptionsData)}
        />
        <TextField name={fieldNames.docSeriaNumber} label={getLabelByFieldName(fieldNames.docSeriaNumber)} />

        <TextField name={fieldNames.UNZR} label={getLabelByFieldName(fieldNames.UNZR)} />

        {/*<TextField name={fieldNames.placeOfBirth} label={getLabelByFieldName(fieldNames.placeOfBirth)} />*/}

        {/*<TextField name={fieldNames.secondName} label={getLabelByFieldName(fieldNames.secondName)} />*/}
        {/*<TextField name={fieldNames.phone} label={getLabelByFieldName(fieldNames.phone)} />*/}
      </Container>
    </>
  );
};

export default PatientDocument;
