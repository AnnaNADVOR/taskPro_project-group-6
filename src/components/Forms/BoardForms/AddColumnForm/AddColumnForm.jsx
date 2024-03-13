import { useSelector } from 'react-redux';
import MainAddButton from 'components/Buttons/MainAddButton/MainAddButton';
import css from './AddColumnForm.module.css';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addColumn, editColumn } from '../../../../redux/boards/operation';
import { selectBoard } from '../../../../redux/boards/selectors';

const addColumnSchema = Yup.object().shape({
  columnTitle: Yup.string().required('Please enter the title'),
});

const AddColumnForm = ({ title, action, columnId, columnTitle }) => {
  const board = useSelector(selectBoard); 
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (columnId) {
      dispatch(editColumn({
        columnId: columnId,
        newColumnData: {
        // column: columnId,
          board: board._id,
          // boardId: board._id,
          title: values.columnTitle,
        }
      }
      ))
      actions.resetForm();
    } else {
      dispatch(addColumn({
      title: values.columnTitle,
      board: board._id,
      }));  
     actions.resetForm();   
    }
    
   
  }
  const initialValues = {
    columnTitle: ""
  }

   if (columnId) {
        initialValues.columnTitle = columnTitle;       
    }

  return (
    <Formik validationSchema={addColumnSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}>
      <Form>
        <h3 className={css.addColumnModalTitle}>{title}</h3>
        <Field className={css.addColumnInput}
          as="input"
          type="text"
          name="columnTitle"
          placeholder="Title"
          required={true}
          autoFocus
        />
        <MainAddButton text={action} />
      </Form>     
    </Formik>
  );
};

export default AddColumnForm;
