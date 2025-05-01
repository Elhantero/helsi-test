import React from 'react';
import Typography from '@mui/material/Typography';
import {Container} from '../../common/styled/index.js';
import * as fieldNames from '../../../constants/fields/fieldNames.js';
import getLabelByFieldName from '../../../helpers/getLabelByFieldName.js';
import TextField from '../../formFields/TextField.jsx';
import SelectField from '../../formFields/SelectField.jsx';
import selectOptionsCreator from '../../../helpers/selectOptionsCreator.js';
import documentOptionsOrder from '../../../constants/documents/documentOptionsOrder.js';
import documentsOptionsData from '../../../constants/documents/documentsOptionsData.js';

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

        <TextField name={fieldNames.docDateStart} label={getLabelByFieldName(fieldNames.docDateStart)} />
        <TextField name={fieldNames.docDateEnd} label={getLabelByFieldName(fieldNames.docDateEnd)} />

        <TextField name={fieldNames.docCreator} label={getLabelByFieldName(fieldNames.docCreator)} />
        <TextField name={fieldNames.UNZR} label={getLabelByFieldName(fieldNames.UNZR)} />
      </Container>
    </>
  );
};

export default PatientDocument;
