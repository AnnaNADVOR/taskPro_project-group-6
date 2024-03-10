import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from "./CardForm.module.css"; 
import PriorityOptions from '../../../PriorityOptions/PriorityOptions';
import Calendar from '../../../Calendar/Calendar';
import MainAddButton from '../../../Buttons/MainAddButton/MainAddButton';

import { useDispatch } from "react-redux";
// import { selectTasks } from '../../../../redux/tasks/selectors';
import { addTask, editTask } from '../../../../redux/tasks/operation';

const addCardSchema = Yup.object().shape({
    cardTitle: Yup.string()
        .required("Please enter the title")
        .max(25, "Must be no more than 25 characters long"),
    description: Yup.string(),
});



const CardForm = ({ title, action, taskTitle, taskDescription, taskPriority, taskDeadline, taskId, columnId }) => {
 console.log("columnId", columnId)

    const initialValues = {
        cardTitle: "",
        description: "", 
    }
console.log("deadline:", taskDeadline )
    const [priority, setPriority] = useState(taskPriority || "Without");
    const [deadline, setDeadline] = useState(taskDeadline ? new Date(taskDeadline) : new Date());

      if (taskId) {
        initialValues.cardTitle = taskTitle;
        initialValues.description = taskDescription; 
    }
    const priorityChange = (event) => {
        setPriority(event.target.value);
    }

    const dispatch = useDispatch();
    
    const handleSubmit = (values, actions) => {
        const newCard = {
            _id: taskId,
            column: columnId,
            title: values.cardTitle,
            description: values.description,
            priority: priority,
            deadline: deadline.toISOString(),
        }
        console.log("handleSubmit:newCard", newCard)
        if (taskId) {
            dispatch(editTask(newCard))
        } else {
          dispatch(addTask(newCard));  
        }
        actions.resetForm();         
    }

    const priorityOptions = [
        { value: 'Low', color: `var(--priority-low-color)`},
        { value: 'Medium', color: `var(--priority-medium-color)`},
        { value: 'High', color: `var(--priority-high-color)` },
        { value: 'Without', color: `var(--priority-color-without)`},
    ];

    return (
        <Formik validationSchema={addCardSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <h4 className={css.formTitle}>{title}</h4>
                <label className={css.label} htmlFor="cardTitle">
                    <Field className={css.inputForm}
                        as="input"
                        type="text"
                        name="cardTitle"
                        placeholder="Title"
                        required={true}
                        autoFocus                       
                    />
                    <span className={css.errorField}>
                        <ErrorMessage name="cardTitle" />
                    </span>                    
                </label>
                <label htmlFor="description">
                    <Field className={css.description}
                        as="textarea"
                        type="text"
                        name="description"
                        placeholder="Description"
                        required={true}                        
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