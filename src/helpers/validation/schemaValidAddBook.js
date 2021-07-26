import * as Yup from 'yup';

const schemaValidAddBook = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too short title !')
    .max(100, 'Too long title, no more than 100 letters!')
    .required('Fill the gap, please!')
    .typeError('Must be a string.'),
  author: Yup.string()
    .min(2, 'Too short author"s name!')
    .max(50, 'Too long author"s name, no more than 50 letters!')
    .required('Fill the gap, please!')
    .typeError('Must be a string.'),
  year: Yup.number()
    .min(1445, 'Books have been publishing since 1445!')
    .max(2021, 'Not yet printed!')
    .required('Fill the gap, please!')
    .typeError('Must be only a number.'),
  totalPages: Yup.number()
    .min(10, 'Too little pages bad for you!')
    .max(4000, 'Too many pages. Be careful!')
    .required('Fill the gap, please!')
    .typeError('Must be only a number.'),
});

export default schemaValidAddBook;
