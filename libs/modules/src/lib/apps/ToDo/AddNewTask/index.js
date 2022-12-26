import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import IntlMessages from '@crema/helpers/IntlMessages';
import AddTaskForm from './AddTaskForm';
import PropTypes from 'prop-types';
import AppDialog from '@crema/components/AppDialog';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import { postDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';

const validationSchema = yup.object({
  title: yup.string().required(<IntlMessages id="validation.titleRequired" />),
});

const AddNewTask = ({
  isAddTaskOpen,
  onCloseAddTask,
  selectedDate,
  reCallAPI,
}) => {
  const { user } = useAuthUser();
  const infoViewActionsContext = useInfoViewActionsContext();
  const [taskLabels, setTaskLabels] = useState([]);

  return (
    <AppDialog
      dividers
      maxWidth="md"
      open={isAddTaskOpen}
      onClose={() => onCloseAddTask()}
      title={<IntlMessages id="todo.addNewTask" />}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          title: '',
          assignedTo: '',
          label: [],
          priority: 3,
          date: selectedDate
            ? moment(selectedDate).format('MM/DD/YYYY')
            : moment().format('MM/DD/YYYY'),
          content: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          const newTask = {
            id: Math.floor(Math.random() * 1000000),
            isStarred: false,
            isAttachment: false,
            isRead: true,
            folderValue: 120,
            createdBy: {
              name: user.displayName ? user.displayName : 'User',
              image: user.photoURL,
            },
            startDate: moment(data.date).format('lll'),
            image: '/assets/images/dummy2.jpg',
            createdOn: moment().format('ll'),
            status: 1,
            comments: [],
            ...data,
            label: taskLabels,
          };
          console.log('newTask:***********', newTask);
          postDataApi('/api/todoApp/compose', infoViewActionsContext, {
            task: newTask,
          })
            .then(() => {
              reCallAPI();
              infoViewActionsContext.showMessage(
                'New Task has been created successfully!'
              );
            })
            .catch((error) => {
              infoViewActionsContext.fetchError(error.message);
            });

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
            reCallAPI={reCallAPI}
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
  reCallAPI: PropTypes.func,
  selectedDate: PropTypes.string,
};
