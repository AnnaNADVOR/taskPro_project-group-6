import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { editBoard } from '../../../../redux/auth/operation';
import MainAddButton from 'components/Buttons/MainAddButton/MainAddButton';
import BoardBackgroundPicker from 'components/BoardBackgroundPicker/BoardBeckgroundPicker';
import BoardMarkPicker from 'components/BoardMarkPicker/BoardMarkPicker';
import css from '../AddBoardForm/AddBoardForm.module.css';

const TitleSchema = Yup.object().shape({
  boardTitle: Yup.string().required('Title is required'),
});

const EditBoardForm = ({
  boardId,
  initialTitle,
  initialIconName,
  initialBackgroundName,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const [backgroundName, setBackgroundName] = useState(initialBackgroundName);
  const [iconName, setIconName] = useState(initialIconName);
  const navigate = useNavigate();

  const handleSubmit =  (values, actions) => {
   dispatch(
      editBoard({
        boardId: boardId,
        title: values.boardTitle,
        icon: iconName,
        background: backgroundName,
      })
   ).then(action => {
      if (action.type === 'boards/editBoard/fulfilled')navigate(`/home/${values.boardTitle}`)
    })
    actions.resetForm();
    handleClose();
  };

  const initialValues = {
    boardTitle: initialTitle,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TitleSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <h4 className={css.modalTitle}>Edit Board</h4>
        <label htmlFor="boardTitle"></label>
        <Field
          className={css.inputField}
          placeholder="Title"
          id="boardTitle"
          name="boardTitle"
          type="text"
          autoFocus
          required={true}
        />
        <span className={css.inputErrorMessage}>
          <ErrorMessage name="boardTitle" />
        </span>
        <p className={css.subtitle}>Icons</p>
        <BoardMarkPicker iconName={iconName} onChangeIcon={setIconName} />
        <p className={css.subtitle}>Background</p>
        <BoardBackgroundPicker
          backgroundName={backgroundName}
          onChangeImage={setBackgroundName}
        />
        <MainAddButton text="Edit" type="submit" />
      </Form>
    </Formik>
  );
};

export default EditBoardForm;
