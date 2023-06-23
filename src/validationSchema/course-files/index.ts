import * as yup from 'yup';

export const courseFileValidationSchema = yup.object().shape({
  file_name: yup.string().required(),
  file_type: yup.string().required(),
  category: yup.string().required(),
  organization_id: yup.string().nullable(),
});
