import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { setFilter } from '../../redux/filter/slice';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const [priority, setPriority] = useState('');

  const priorityOptions = [
    {
      value: 'Without',
      color: `var(--priority-color-without)`,
      text: 'Without priority',
    },
    { value: 'Low', color: `var(--priority-low-color)`, text: 'Low' },
    { value: 'Medium', color: `var(--priority-medium-color)`, text: 'Medium' },
    { value: 'High', color: `var(--priority-high-color)`, text: 'High' },
  ];

  const handleChange = event => {
    setPriority(event.target.value);
  };
  const handleShowAll = () => {
    setPriority('');
    dispatch(setFilter(''));
  };

  const initialValues = {
    background: '00',
    priority: '',
  };
  return (
    <div>
      <h2 className={css.filterTitle}>Filters</h2>
      <Formik initialValues={initialValues}>
        <Form onChange={handleChange} className={css.filterForm}>
          <div className={css.filterContainer}>
            <div className={css.filterWrap}>
              <p className={css.textLeabel}>Label color</p>
              <button
                type="button"
                onClick={handleShowAll}
                className={css.buttonLeabel}
              >
                Show all
              </button>
            </div>

            {
              <ul>
                {priorityOptions.map(({ value, color, text }) => (
                  <li key={value} className={css.leabelGroup}>
                    <Field
                      as="input"
                      type="radio"
                      name="priority"
                      value={value}
                      checked={priority === value}
                      style={{ backgroundColor: color }}
                      onClick={handleChange}
                      onChange={onChange}
                      className={css.label}
                    />{' '}
                    <span className={css.labeltext}> {text}</span>
                  </li>
                ))}
              </ul>
            }
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default Filter;
