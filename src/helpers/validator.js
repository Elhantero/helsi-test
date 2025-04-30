// Yup + Final Form adapter
export default async (schema, values) => {
  try {
    await schema.validate(values, {abortEarly: false});
    return {};
  } catch (err) {
    return err.inner.reduce((acc, curr) => {
      acc[curr.path] = curr.message;
      return acc;
    }, {});
  }
};
