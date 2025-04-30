import useFormDependencyManager from '../hooks/useFormDependencyManager.js';
import {dependentFields} from '../constants/dependentFields.js';

const FormDependenciesManager = () => {
  useFormDependencyManager(dependentFields);
  return null;
};

export default FormDependenciesManager;
