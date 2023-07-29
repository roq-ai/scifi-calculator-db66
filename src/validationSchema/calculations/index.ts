import * as yup from 'yup';

export const calculationValidationSchema = yup.object().shape({
  calculation_data: yup.string().required(),
  user_id: yup.string().nullable(),
});
