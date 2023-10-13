import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { onCreateCalTask } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';
import IntlMessages from '@crema/helpers/IntlMessages';
import AddTaskForm from './AddTaskForm';
import PropTypes from 'prop-types';
import AppDialog from '@crema/components/AppDialog';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import {
  generateRandomUniqueNumber,
  getDateObject,
  getFormattedDate,
} from '@crema/helpers';

const validationSchema = yup.object({
  title: yup.string().required(<IntlMessages id='validation.titleRequired' />),
});

const AddNewTask = ({ isAddTaskOpen, onCloseAddTask, selectedDate }) => {
  const dispatch = useDispatch();

  const { user } = useAuthUser();

  const [taskLabels, setTaskLabels] = useState([]);

  return (
    <AppDialog
      dividers
      maxWidth='md'
      open={isAddTaskOpen}
      onClose={() => onCloseAddTask()}
      title={<IntlMessages id='todo.addNewTask' />}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          title: '',
          assignedTo: '',
          label: [],
          priority: 3,
          startDate: selectedDate
            ? getDateObject(selectedDate)
            : getDateObject(),
          endDate: selectedDate ? getDateObject(selectedDate) : getDateObject(),
          content: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          const newTask = {
            id: generateRandomUniqueNumber(),
            isStarred: false,
            hasAttachments: false,
            isRead: true,
            folderValue: 120,
            createdBy: {
              name: user.displayName ? user.displayName : 'User',
              image: user.photoURL,
            },
            image: '/assets/images/dummy2.jpg',
            status: 1,
            comments: [],
            ...data,
            createdOn: getFormattedDate(null),
            startDate: getFormattedDate(data.startDate),
            endDate: getFormattedDate(data.endDate),
            label: taskLabels,
          };
          console.log('newTask:***********', newTask);
          dispatch(onCreateCalTask(newTask));
          onCloseAddTask();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <AddTaskForm
            isSubmitting={isSubmitting}
            values={values}
            setFieldValue={setFieldValue}
            setTaskLabels={setTaskLabels}
            taskLabels={taskLabels}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default AddNewTask;

AddNewTask.propTypes = {
  isAddTaskOpen: PropTypes.bool.isRequired,
  onCloseAddTask: PropTypes.func.isRequired,
  selectedDate: PropTypes.string,
};
