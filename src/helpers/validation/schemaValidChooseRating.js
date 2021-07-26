import * as Yup from 'yup';

const schemaValidChooseRating = Yup.object().shape({
  rating: Yup.string()
    .min(0, 'Too short title !')
    .max(4, 'Too long title, no more than 100 letters!')
    .required('Fill the gap, please!')
    .typeError('Must be a number.'),
  resume: Yup.string()
    .min(2, 'Too short resume!')
    .max(5000, 'Will be brief!')
    .required('Fill the gap, please!')
    .typeError('Must be a string.'),
});

export default schemaValidChooseRating;
