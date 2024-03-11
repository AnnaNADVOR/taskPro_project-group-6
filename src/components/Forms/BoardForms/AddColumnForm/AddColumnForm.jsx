import { useSelector } from 'react-redux';
import MainAddButton from 'components/Buttons/MainAddButton/MainAddButton';
import css from './AddColumnForm.module.css';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addColumn } from '../../../../redux/columns/operation';
import { selectBoard } from '../../../../redux/boards/selectors';

const addColumnSchema = Yup.object().shape({
  columnTitle: Yup.string().required('Please enter the title'),
});

const AddColumnForm = () => {
  const board = useSelector(selectBoard);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addColumn({
        title: values.columnTitle,
        board: board._id,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={addColumnSchema}
      initialValues={{ columnTitle: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <h3 className={css.addColumnModalTitle}>Add column</h3>
        <Field
          className={css.addColumnInput}
          as="input"
          type="text"
          name="columnTitle"
          placeholder="Title"
          required={true}
          autoFocus
        />
        <MainAddButton text="Add" />
      </Form>
    </Formik>
  );
};

export default AddColumnForm;
