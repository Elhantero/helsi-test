import infoTexts from '../constants/infoTexts.js';

export default (order = [], data = {}) => {
  return [
    { value: '', label: infoTexts.chooseOptionText },
    ...order.map(key => ({
      value: key,
      label: data?.[key]?.label
    }))
  ];
};
