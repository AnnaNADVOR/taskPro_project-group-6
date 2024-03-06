import React from 'react';
import { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import MainAddButton from 'components/Buttons/MainAddButton/MainAddButton';
import BoardBackgroundPicker from 'components/BoardBackgroundPicker/BoardBeckgroundPicker';
import BoardMarkPicker from 'components/BoardMarkPicker/BoardMarkPicker';
import css from '../AddBoardForm/AddBoardForm.module.css';

const TitleSchema = Yup.object().shape({
  boardTitle: Yup.string().required('Title is required'),
});

const AddBoardForm = () => {
  const [backgroundName, setBackgroundName] = useState('00');
  const [iconName, setIconName] = useState('mark-circuls-18');

  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={{ boardTitle: '' }}
      validationSchema={TitleSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <h4 className={css.modalTitle}>New Board</h4>
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

        <MainAddButton text="Create" click={handleSubmit} />
      </Form>
    </Formik>
  );
};

export default AddBoardForm;
