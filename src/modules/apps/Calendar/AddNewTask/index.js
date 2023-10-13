import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/helpers/IntlMessages';
import AddTaskForm from './AddTaskForm';
import PropTypes from 'prop-types';
import AppDialog from '@crema/components/AppDialog';
import {useAuthUser} from '@crema/hooks/AuthHooks';
import {postDataApi} from '@crema/hooks/APIHooks';
import {useInfoViewActionsContext} from '@crema/context/AppContextProvider/InfoViewContextProvider';
import {useCalendarActionsContext} from '../../context/CalendarContextProvider';
import {getDateObject, getFormattedDate} from '@crema/helpers/DateHelper';
import {generateRandomUniqueNumber} from '@crema/helpers/Common';

const validationSchema = yup.object({
  title: yup.string().required(<IntlMessages id='validation.titleRequired' />),
});

const AddNewTask = ({isAddTaskOpen, onCloseAddTask, selectedDate}) => {
  const {user} = useAuthUser();
  const infoViewActionsContext = useInfoViewActionsContext();
  const [taskLabels, setTaskLabels] = useState([]);
  const {reCallAPI} = useCalendarActionsContext();

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
        onSubmit={(data, {setSubmitting, resetForm}) => {
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
          postDataApi('/api/calendar/compose', infoViewActionsContext, {
            task: newTask,
          })
            .then(() => {
              reCallAPI();
              infoViewActionsContext.showMessage(
                'New Task has been created successfully!',
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
        {({isSubmitting, values, setFieldValue}) => (
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
