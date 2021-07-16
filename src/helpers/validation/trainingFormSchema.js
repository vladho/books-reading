import * as yup from 'yup';
import moment from 'moment';

const trainingFormSchema = yup.object().shape({
  start: yup
    .date()
    .required('Enter the start training date')
    .max(moment(Date.now()).format('YYYY-MM-DD'), 'Must be current date'),

  end: yup
    .date()
    .required('Enter the end training date')
    .min(yup.ref('start'), 'Enter correct date')
    .test({
      message: 'End date should be more',
      test: function (value) {
        const start = moment(this.parent.start).format('YYYY-MM-DD');
        const end = moment(value).format('YYYY-MM-DD');
        return !moment(start).isSame(moment(end));
      },
    }),

  book: yup.object().required('Choose one book or more'),
});

export default trainingFormSchema;
