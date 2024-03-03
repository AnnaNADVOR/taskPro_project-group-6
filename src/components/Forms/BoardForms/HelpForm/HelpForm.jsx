import { Formik } from 'formik';
import * as Yup from 'yup';
import SendButton from 'components/Buttons/SendButton/SendButton';
import css from './HelpForm.module.css';

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    comment: Yup.string().min(7).max(230).required('Comment is required'),
  });
  const initialValues = {
    email: '',
    comment: '',
  };

const HelpForm = () => {   
    
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <form className={css.helpForm}>
        <label htmlFor="helpComment" className={css.helpLabel}>
          Need help
        </label>
        <input
          type="text"
          className={css.helpEmailInput}
          name="needHelp"
          placeholder="Email address"
        />
        <textarea
          id="helpComment"
          className={css.helpCommentInput}
          name="comment"
          placeholder="Comment"
        ></textarea>
        <SendButton text="Send"></SendButton>
      </form>
    </Formik>
  );
};

export default HelpForm;
