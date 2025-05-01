import React from 'react';
import CreatePatientForm from '../../forms/createPatientForm/CreatePatientForm.jsx';
import Header from '../../common/Header.jsx';
import {FormWrapper, PageWrapper} from '../../common/styled/index.js';

const PatientCreatePage = () => {
  return (
    <PageWrapper>
      <Header text="← Створення персони" />
      <FormWrapper>
        <CreatePatientForm />
      </FormWrapper>
    </PageWrapper>
  );
};

export default PatientCreatePage;
