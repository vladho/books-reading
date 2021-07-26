import * as Yup from 'yup';

const schemaValidChooseRating = Yup.object().shape({
  resume: Yup.string()
    .min(2, 'Too short resume!')
    .max(5000, 'Will be brief!')
    .required('Fill the gap, please!')
    .typeError('Must be a string.'),
});

export default schemaValidChooseRating;
