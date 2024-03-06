import { useState } from 'react';
import MainAddButton from 'components/Buttons/MainAddButton/MainAddButton';
import css from './EditColumnForm.module.css';

const EditColumnForm = () => {
  const [title, setTitle] = useState('');

  const handleChange = ({ target: { value } }) => {
    setTitle(value);
  };
  return (
    <div>
      <h3 className={css.editColumnModalTitle}>Edit column</h3>
      <form className={css.editColumnForm}>
        <input
          className={css.editColumnInput}
          name="title"
          value={title}
          type="text"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <MainAddButton text="Add" />
      </form>
    </div>
  );
};

export default EditColumnForm;
