import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from "./AddCardForm.module.css"; 
import PriorityOptions from '../../../PriorityOptions/PriorityOptions';
import Calendar from '../../../Calendar/Calendar';
import MainAddButton from '../../../Buttons/MainAddButton/MainAddButton';

const addCardSchema = Yup.object().shape({
    title: Yup.string()
        .required("Please enter the title")
        .max(25, "Must be no more than 25 characters long"),
    description: Yup.string(),
});

const AddCardForm = () => {
    const [priority, setPriority] = useState('without');
    const [deadline, setDeadline] = useState(new Date());

    const priorityChange = (event) => {
        setPriority(event.target.value);
    }

    const handleSubmit = () => {
        console.log("submit")
    }

    const priorityOptions = [
        { value: 'low', color: `var(--priority-low-color)`},
        { value: 'medium', color: `var(--priority-medium-color)`},
        { value: 'high', color: `var(--priority-high-color)` },
        { value: 'without', color: `var(--priority-color-without)`},
    ];

    return (
        <Formik validationSchema={addCardSchema} initialValues={{ title: "", description: "" }} onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <h4 className={css.formTitle}>Add card</h4>
                <label className={css.label} htmlFor="title">
                    <Field className={css.inputForm} as="input" type="text" name="title" required="true" placeholder="Title" autoFocus />
                    <span className={css.errorField}>
                        <ErrorMessage name="title" />
                    </span>                    
                </label>
                <label htmlFor="description">
                    <Field className={css.description}
                        as="textarea"
                        type="text"
                        required="true"
                        name="description"
                        placeholder="Description" />
                </label>           
                <div className={css.priorityWrapper}>
                    <p className={css.formText}>Label color</p>
                    <PriorityOptions
                        options={priorityOptions}
                        priority={priority}
                        active={priorityChange}
                    />  
                </div>
                <div className={css.deadlineWrapper}>
                    <p className={css.formText}>Deadline</p>
                    <Calendar date={deadline} changeDate={setDeadline} />
                </div>
                <MainAddButton
                    text="Add"
                    click={handleSubmit} />
            </Form>
        </Formik>
    )
}

export default AddCardForm; 