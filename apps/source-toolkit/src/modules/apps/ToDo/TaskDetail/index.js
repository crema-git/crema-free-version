import React, { useEffect } from 'react';
import TaskDetailHeader from './TaskDetailHeader';
import TaskDetailBody from './TaskDetailBody';
import { useDispatch, useSelector } from 'react-redux';
import { onGetSelectedTask } from '../../../../toolkit/actions';
import { useParams } from 'react-router-dom';
import AppsHeader from '@crema/components/AppsHeader';
import AppsContent from '@crema/components/AppsContent';
import { MailDetailSkeleton } from '@crema/components/MailDetailSkeleton';

const TaskDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(onGetSelectedTask(id));
  }, [dispatch, id]);

  const selectedTask = useSelector(({ todoApp }) => todoApp.selectedTask);

  if (!selectedTask) {
    return <MailDetailSkeleton />;
  }
  return (
    <>
      <AppsHeader>
        <TaskDetailHeader selectedTask={selectedTask} />
      </AppsHeader>
      <AppsContent isDetailView>
        <TaskDetailBody selectedTask={selectedTask} />
      </AppsContent>
    </>
  );
};

export default TaskDetail;
