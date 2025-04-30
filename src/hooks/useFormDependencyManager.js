import { useEffect } from 'react';
import { useForm, useFormState } from 'react-final-form';

const useFormDependencyManager = (dependencies) => {
  const form = useForm();
  const { values } = useFormState({ subscription: { values: true } });

  useEffect(() => {
    dependencies.forEach(({ watchKey, expectedValue, targetKeys, clearIfNotMatched }) => {
      const watchValue = values[watchKey];
      if (clearIfNotMatched && watchValue !== expectedValue) {
        targetKeys.forEach((key) => {
          form.change(key, undefined);
        });
      }
    });
  }, [values, dependencies, form]);

  return null;
};

export default useFormDependencyManager;
