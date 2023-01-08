import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import AppsContainer from '@crema/components/AppsContainer';
import BoardDetailView from './BoardDetailView';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetBoardDetail,
  onNullifyBoardDetail,
} from '../../../../toolkit/actions';

const BoardDetail = () => {
  const navigate = useNavigate();
  const boardDetail = useSelector(
    ({ scrumboardApp }) => scrumboardApp.boardDetail,
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.split('/');
    const id = path[path.length - 1];
    dispatch(onGetBoardDetail(id));
    return () => {
      dispatch(onNullifyBoardDetail());
    };
  }, [dispatch, pathname]);

  const onGoToBoardList = () => {
    navigate(-1);
  };

  if (!boardDetail) {
    return null;
  }

  return (
    <AppsContainer
      fullView
      title={
        <>
          <Box
            component='span'
            sx={{
              cursor: 'pointer',
              mr: 2,
              color: 'primary.main',
            }}
            onClick={onGoToBoardList}
          >
            Scrum Board
          </Box>
          &gt; {boardDetail.name}
        </>
      }
    >
      <BoardDetailView boardDetail={boardDetail} />
    </AppsContainer>
  );
};

export default BoardDetail;
