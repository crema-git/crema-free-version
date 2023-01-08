import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import AppGridContainer from '@crema/components/AppGridContainer';
import { Fonts } from '@crema/constants/AppEnums';
import AppInfoView from '@crema/components/AppInfoView';
import { Zoom } from '@mui/material';
import {
  AddBoardButton,
  AddNewBoard,
  BoardItem,
} from '@crema/modules/apps/ScrumBoard';
import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewBoard,
  onEditBoardDetail,
  onGetBoardList,
} from '../../../../toolkit/actions';

const BoardList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardList = useSelector(({ scrumboardApp }) => scrumboardApp.boardList);

  const [isAddBoardOpen, setAddBoardOpen] = useState(false);

  const [selectedBoard, setSelectedBoard] = useState(null);

  useEffect(() => {
    dispatch(onGetBoardList());
  }, [dispatch]);

  const onCloseAddBoardModal = () => {
    setAddBoardOpen(false);
  };

  const onAddButtonClick = () => {
    setSelectedBoard(null);
    setAddBoardOpen(true);
  };

  const onEditButtonClick = (board) => {
    setSelectedBoard(board);
    setAddBoardOpen(true);
  };

  const onAddBoard = (name) => {
    if (selectedBoard) {
      const board = { ...selectedBoard, name };
      dispatch(onEditBoardDetail(board));
    } else {
      dispatch(onAddNewBoard({ name }));
    }
  };

  const onViewBoardDetail = (board) => {
    navigate(`/apps/scrum-board/${board.id}`);
  };

  return (
    <>
      <Zoom direction='up' in mountOnEnter unmountOnExit>
        <Box
          sx={{
            pt: 4,
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <Box
            component='h2'
            sx={{
              my: { xs: 5, sm: 5, xl: 8 },
              color: 'text.primary',
              fontWeight: Fonts.BOLD,
              textAlign: 'center',
              fontSize: 16,
            }}
          >
            <IntlMessages id='scrumboard.scrumboardApp' />
          </Box>
          <AppGridContainer
            sx={{
              justifyContent: 'center',
            }}
          >
            {boardList && boardList.length > 0
              ? boardList.map((board) => {
                  return (
                    <BoardItem
                      key={board.id}
                      board={board}
                      onEditButtonClick={onEditButtonClick}
                      onViewBoardDetail={onViewBoardDetail}
                    />
                  );
                })
              : null}
            <AddBoardButton onAddButtonClick={onAddButtonClick} />
          </AppGridContainer>
        </Box>
      </Zoom>

      {isAddBoardOpen ? (
        <AddNewBoard
          isAddBoardOpen={isAddBoardOpen}
          onCloseAddBoardModal={onCloseAddBoardModal}
          onAddBoard={onAddBoard}
          selectedBoard={selectedBoard}
        />
      ) : null}
      <AppInfoView />
    </>
  );
};

export default BoardList;
