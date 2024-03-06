import { useState } from 'react';
import MainAddButton from 'components/Buttons/MainAddButton/MainAddButton';
import css from './AddColumnForm.module.css';

const AddColumnForm = () => {
  const [title, setTitle] = useState('');

  const handleChange = ({ target: { value } }) => {
    setTitle(value);
  };
  return (
    <div>
      <h3 className={css.addColumnModalTitle}>Add column</h3>
      <form className={css.addColumnForm}>
        <input
          className={css.addColumnInput}
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

export default AddColumnForm;
