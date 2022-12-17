import React from 'react';
import BoardDetail from './BoardDetail';
import BoardList from './BoardList';
import {useParams} from 'react-router-dom';

const ScrumBoard = () => {
  const params = useParams();

  const onGetMainComponent = () => {
    if (params.id) {
      return <BoardDetail />;
    } else {
      return <BoardList />;
    }
  };

  return <>{onGetMainComponent()}</>;
};

export default ScrumBoard;
