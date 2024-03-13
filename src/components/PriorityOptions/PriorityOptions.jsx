import { Field } from 'formik';

import css from './PriorityOptions.module.css';

const PriorityOptions = ({ options, priority, active }) => {
  return (
    <ul className={css.labelWrapper}>
      {options.map(({ value, color }) => (
        <li key={value}>
          <Field
            as="input"
            type="radio"
            name="priority"
            value={value}
            checked={priority === value}
            className={css.label}
            style={{ backgroundColor: color }}
            onClick={active}
          />
        </li>
      ))}
    </ul>
  );
};
export default PriorityOptions;
