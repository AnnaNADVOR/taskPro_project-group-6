import { Formik, Form, Field } from 'formik';
import css from './Filter.module.css';
import { useState } from 'react';

const Filter = () => {
  const [isShowAllActive, setIsShowAllActive] = useState(false);

  const handleChange = event => {
    const filter = event.target.value;
    console.log(filter);
  };

  const handleShowAll = () => {
    setIsShowAllActive(true);
  };

  const handleRadioClick = () => {
    if (isShowAllActive) {
      setIsShowAllActive(false);
    }
  };
  const initialValues = {
    background: 0,
    currentPrority: '',
  };
  return (
    <div>
      <h2 className={css.filterTitle}>Filters</h2>
      <Formik initialValues={initialValues}>
        <Form onChange={handleChange}>
          <div>
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
            <div className={css.leabelGroup}>
              <label className={css.labelItems}>
                <Field
                  className={css.inputFormik}
                  type="radio"
                  name="priority"
                  value="without"
                  // color="#5b5b5b"
                  // checked={priority === 'without'}
                  onClick={handleRadioClick}
                />
                Without priority
              </label>
              <label className={css.labelItems}>
                <Field
                  type="radio"
                  name="priority"
                  value="low"
                  // color="#8FA1D0"
                  // checked={priority === 'low'}
                  onClick={handleRadioClick}
                />
                Low
              </label>
              <label className={css.labelItems}>
                <Field
                  type="radio"
                  name="priority"
                  value="high"
                  // color="#E09CB5"
                  // checked={priority === 'medium'}
                  onClick={handleRadioClick}
                />
                Medium
              </label>
              <label className={css.labelItems}>
                <Field
                  type="radio"
                  name="priority"
                  value="high"
                  // color="#BEDBB0"
                  // checked={priority === 'high'}
                  onClick={handleRadioClick}
                />
                High
              </label>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default Filter;
