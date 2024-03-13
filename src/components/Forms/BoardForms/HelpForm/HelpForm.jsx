import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { requestHelp } from '../../../../redux/help/operation';
import SendButton from 'components/Buttons/SendButton/SendButton';

import css from './HelpForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  comment: Yup.string().min(7).max(230).required('Comment is required'),
});

const HelpForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, comment } = values;
    try {
      await dispatch(requestHelp({ email, comment }));
      setSubmitting(false);
      handleClose();
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
          <label htmlFor="comment" className={css.label}>
            <Field
              className={css.helpCommentInput}
              as="textarea"
              type="text"
              name="comment"
              placeholder="Comment"
              required
            />
            <span className={css.helpCommentErrorField}>
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
