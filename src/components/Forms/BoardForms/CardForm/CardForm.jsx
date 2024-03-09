import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from "./CardForm.module.css"; 
import PriorityOptions from '../../../PriorityOptions/PriorityOptions';
import Calendar from '../../../Calendar/Calendar';
import MainAddButton from '../../../Buttons/MainAddButton/MainAddButton';

import { useDispatch } from "react-redux";
// import { selectTasks } from '../../../../redux/tasks/selectors';
import { addTask } from '../../../../redux/tasks/operation';

const addCardSchema = Yup.object().shape({
    title: Yup.string()
        .required("Please enter the title")
        .max(25, "Must be no more than 25 characters long"),
    description: Yup.string(),
});

const initialValues = {
    title: "",
    description: "", 
}

const CardForm = ({title, action, taskTitle, taskDescription, taskPriority, taskDeadline, taskId, columnId}) => {
    const [priority, setPriority] = useState('without');
    const [deadline, setDeadline] = useState(new Date());

    const priorityChange = (event) => {
        setPriority(event.target.value);
    }

    const dispatch = useDispatch();
    // const cards = useSelector(selectTasks); 

    const handleSubmit = (values, actions) => {
        const newCard = {
            column: columnId,
            title: values.title,
            description: values.description,
            priority: values.priority,
            deadline: deadline,
        }
        dispatch(addTask(newCard));
        actions.resetForm()         
    }

    const priorityOptions = [
        { value: 'low', color: `var(--priority-low-color)`},
        { value: 'medium', color: `var(--priority-medium-color)`},
        { value: 'high', color: `var(--priority-high-color)` },
        { value: 'without', color: `var(--priority-color-without)`},
    ];

    return (
        <Formik validationSchema={addCardSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <h4 className={css.formTitle}>{title}</h4>
                <label className={css.label} htmlFor="title">
                    <Field className={css.inputForm}
                        as="input"
                        type="text"
                        name="title"
                        placeholder="Title"
                        required={true}
                        autoFocus
                        // value={title}
                    />
                    <span className={css.errorField}>
                        <ErrorMessage name="title" />
                    </span>                    
                </label>
                <label htmlFor="description">
                    <Field className={css.description}
                        as="textarea"
                        type="text"
                        name="description"
                        placeholder="Description"
                        required={true}
                        // value={description}
                    />
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
                <MainAddButton text={action}/>
            </Form>
        </Formik>
    )
}

export default CardForm; 