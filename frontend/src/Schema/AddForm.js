import * as yup from 'yup';

export const addForm = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required().positive().integer(),
  url: yup.string().url(),
});
