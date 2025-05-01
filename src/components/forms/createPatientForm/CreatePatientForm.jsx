import React, {useState} from 'react';
import {Form, FormSpy} from 'react-final-form';
import Button from '@mui/material/Button';
import * as fieldNames from '../../../constants/fieldNames.js';
import schema from '../../../constants/validation/createPersonSchema.js';
import validator from '../../../helpers/validator.js';
import {PreBlock} from '../../common/styled/index.js';
import FormDependenciesManager from '../FormDependenciesManager.jsx';
import PatientPersonalData from '../common/PatientPersonalData.jsx';

const initialValues = {
  [fieldNames.withMiddleName]: true,
  [fieldNames.witnIPN]: true,
};

const CreatePatientForm = () => {
  const [showJSON, setShowJSON] = useState(false);
  const onSubmit = () => setShowJSON(true);

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => validator(schema, values)}
      initialValues={initialValues}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit} noValidate>
          <FormDependenciesManager/>
          <PatientPersonalData/>
          <Button type="submit" variant="contained" sx={{ mt: 5 }}>Зберегти</Button>
          {showJSON && (
            <FormSpy subscription={{values: true}}>
              {({values}) => <PreBlock>{JSON.stringify(values, undefined, 2)}</PreBlock>}
            </FormSpy>
          )}
        </form>
      )
      }
    />
  );
};

export default CreatePatientForm;
