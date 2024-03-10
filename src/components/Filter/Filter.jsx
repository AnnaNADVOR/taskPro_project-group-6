import { Formik, Form, Field } from 'formik';
import css from './Filter.module.css';
import { useState } from 'react';

const Filter = () => {
  const [priority, setPriority] = useState('Without');

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
  const [isShowAllActive, setIsShowAllActive] = useState(false);
  const handleChange = event => {
    setPriority(event.target.value);
  };
  const handleShowAll = () => {
    setIsShowAllActive(true);
  };

  const initialValues = {
    priority: '',
  };
  return (
    <div>
      <h2 className={css.filterTitle}>Filters</h2>
      <Formik initialValues={initialValues}>
        <Form onChange={handleChange}>
          <div className={css.filterContainer}>
            <div className={css.filterWrap}>
              <p className={css.textLeabel}>Label color</p>
              <button
                type="button"
                onClick={handleShowAll}
                disabled={isShowAllActive}
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
