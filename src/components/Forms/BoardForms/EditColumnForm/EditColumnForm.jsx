import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import MainAddButton from 'components/Buttons/MainAddButton/MainAddButton';
import { editColumn } from '../../../../redux/columns/operation';

import css from './EditColumnForm.module.css';

const EditColumnForm = ({ column, title, columnId, handleClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      editColumn({
        title: values.columnTitle,
        columnId: column._id,
      })
    );
    actions.resetForm();
    handleEditClose();
  };

  return (
    <Formik initialValues={{ columnTitle: '' }} onSubmit={handleSubmit}>
      <Form>
        <h3 className={css.editColumnModalTitle}>Edit column</h3>
        <Field
          className={css.editColumnInput}
          as="input"
          type="text"
          name="columnTitle"
          placeholder="Title"
          required={true}
          autoFocus
        />
        <MainAddButton text="Edit" />
      </Form>
    </Formik>
  );
};

export default EditColumnForm;
