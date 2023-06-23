import * as yup from 'yup';

export const contactValidationSchema = yup.object().shape({
  phone_number: yup.string().required(),
  user_id: yup.string().nullable(),
});
