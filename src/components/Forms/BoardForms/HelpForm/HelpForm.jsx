import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SendButton from 'components/Buttons/SendButton/SendButton';
import css from './HelpForm.module.css';
import { requestHelp } from '../../../../redux/user/operation';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  comment: Yup.string().min(7).max(230).required('Comment is required'),
});

const HelpForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await requestHelp(values);
      setSubmitting(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', comment: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.helpForm} autoComplete="off">
          <h4 className={css.helpFormTitle}>Need help</h4>
          <label className={css.label} htmlFor="email">
            <Field
              className={css.helpEmailInput}
              type="text"
              name="email"
              placeholder="Email"
              autoFocus
              required
            />
            <span className={css.helpErrorField}>
              <ErrorMessage name="email" />
            </span>
          </label>
          <label htmlFor="comment">
            <Field
              className={css.helpCommentInput}
              as="textarea"
              type="text"
              name="comment"
              placeholder="Comment"
              required
            />
            <span className={css.helpErrorField}>
              <ErrorMessage name="comment" />
            </span>
          </label>
          <SendButton text="Send" type="submit" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default HelpForm;
