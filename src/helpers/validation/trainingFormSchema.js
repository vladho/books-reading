import * as yup from 'yup';
import moment from 'moment';

const trainingFormSchema = yup.object().shape({
  startDate: yup
    .date()
    .required('Enter the start training date')
    .max(moment(Date.now()).format('DD-MM-YYYY'), 'Must be current date'),

  finishDate: yup
    .date()
    .required('Enter the end training date')
    .min(yup.ref('startDate'), 'Enter correct date')
    .test({
      message: 'End date should be more',
      test: function (value) {
        const startDate = moment(this.parent.startDate).format('DD-MM-YYYY');
        const finishDate = moment(value).format('YYYY-MM-DD');
        return !moment(startDate).isSame(moment(finishDate));
      },
    }),

  book: yup.object().required('Choose one book or more'),
});

export default trainingFormSchema;
