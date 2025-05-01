import * as documentIds from './documentIds.js';

export default {
  [documentIds.defaultPassport]: {
    label: 'Паспорт (книжечка)'
  },
  [documentIds.idCartPassport]: {
    label: 'Паспорт (ID-картка)'
  },
  [documentIds.refugeeDoc]: {
    label: 'Посвідка біженця'
  },
  [documentIds.residenceDoc]: {
    label: 'Посвідка про проживання'
  },
  [documentIds.protectPersonDoc]: {
    label: 'Посвідчення особи, яка потребує додаткового захисту'
  },
  [documentIds.permanentResidenceUADoc]: {
    label: 'Посвідка на постійне проживання в Україні'
  },
  [documentIds.temporaryUADoc]: {
    label: 'Тимчасове посвідчення громадянина України'
  },
};
