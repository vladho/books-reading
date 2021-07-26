import * as yup from 'yup';
// import moment from 'moment';

const trainingFormSchema = yup.object().shape({
  start: yup.date().required('Enter the first day of training'),
  // .max(moment(Date.now()).format('YYYY-MM-DD'), 'Must be current date'),

  end: yup
    .date()
    .required('Enter the last day of training')
    .min(yup.ref('start'), 'Finish date can not be sooner than start date'),
  // .test({
  //   message: 'End date should be more',
  //   test: function (value) {
  //     const start = moment(this.parent.start).format('YYYY-MM-DD');
  //     const end = moment(value).format('YYYY-MM-DD');
  //     return !moment(start).isSame(moment(end));
  //   },
  // }),

  book: yup.object().required('Choose at least one book'),
});

export default trainingFormSchema;
