import React, { useCallback, useEffect, useState } from 'react';
import AddCard from './List/AddCard';
import AppsContent from '@crema/components/AppsContent';
import Board from 'react-trello';
import CardDetail from './List/CardDetail';
import ListHeader from './List/ListHeader';
import AddCardButton from './List/AddCardButton';
import AddNewList from './AddNewList';
import NewListButton from './NewListButton';
import PropTypes from 'prop-types';
import { Box, useTheme } from '@mui/material';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@crema/hooks/APIHooks';

const BoardWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: 1,
        '& .smooth-dnd-container.horizontal': {
          height: 1,
        },
      }}
    >
      {children}
    </Box>
  );
};
BoardWrapper.propTypes = {
  children: PropTypes.node,
};
const BoardDetailView = (props) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const theme = useTheme();
  const [list, setList] = useState(null);

  const [isAddCardOpen, setAddCardOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const { boardDetail, setData } = props;

  const getBoardData = useCallback(() => {
    return {
      ...boardDetail,
      lanes: boardDetail.list,
    };
  }, [boardDetail]);

  const [boardData, setBoardData] = useState(getBoardData());

  useEffect(() => {
    setBoardData(getBoardData());
  }, [boardDetail, getBoardData]);

  const shouldReceiveNewData = (nextData) => {
    setBoardData(nextData);
  };

  const onCloseAddCard = () => {
    setAddCardOpen(false);
  };

  const onClickAddCard = (listId) => {
    setList(boardData.lanes.find((item) => item.id === listId));
    setSelectedCard(null);
    setAddCardOpen(true);
  };

  const onAddList = (name) => {
    postDataApi('/api/scrumboard/add/list', infoViewActionsContext, {
      boardId: boardDetail?.id,
      list: {
        name: name,
      },
    })
      .then((data) => {
        setData(data);
        infoViewActionsContext.showMessage('List Added Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const getCardById = (lane, cardId) =>
    lane.cards.find((item) => item.id === cardId);

  const onEditCardDetail = (cardId) => {
    console.log('onEditCardDetail');
    const selectedList = boardData.lanes.find((item) => {
      const correctCard = item.cards.find((card) => card.id === cardId);
      if (correctCard) return item;
      return undefined;
    });
    const selectedCard = getCardById(selectedList, cardId);
    setSelectedCard(selectedCard);
    setList(selectedList);
    setAddCardOpen(true);
  };

  const handleDragCard = (
    cardId,
    sourceLaneId,
    targetLaneId,
    position,
    cardDetails
  ) => {
    if (sourceLaneId !== targetLaneId) {
      const boardId = boardDetail.id;
      putDataApi('/api/cards/update/category', infoViewActionsContext, {
        cardId: cardDetails.id,
        sourceLaneId: sourceLaneId,
        categoryId: targetLaneId,
        position: position,
        boardId: boardId,
      })
        .then((data) => {
          setData(data);
          infoViewActionsContext.showMessage('Card Updated Successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };

  const onEditBoardList = (boardId, list) => {
    putDataApi('/api/scrumboard/edit/list', infoViewActionsContext, {
      boardId: boardId,
      list: list,
    })
      .then((data) => {
        setData(data);
        infoViewActionsContext.showMessage('List Edited Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onDeleteSelectedList = (boardId, laneId) => {
    postDataApi('/api/scrumboard/delete/list', infoViewActionsContext, {
      boardId: boardId,
      listId: laneId,
    })
      .then((data) => {
        setData(data);
        infoViewActionsContext.showMessage('List Deleted Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <AppsContent
      sx={{
        flex: 1,
        '& .simplebar-wrapper': {
          my: '0 !important',
          height: '100%',
        },
        '& .simplebar-content': {
          height: '100%',
          maxHeight: '100%',
          py: '0 !important',
        },
      }}
    >
      <Board
        laneStyle={{
          borderRadius: 16,
          maxHeight: '98%',
          backgroundColor: theme.palette.background.default,
          width: 350,
        }}
        editable
        canAddLanes
        data={boardData}
        onDataChange={shouldReceiveNewData}
        handleDragEnd={handleDragCard}
        onCardAdd={(card, laneId) => {
          onClickAddCard(laneId);
        }}
        onCardClick={(cardId, metadata, laneId) => {
          onEditCardDetail(cardId, laneId);
        }}
        onLaneAdd={(name) => onAddList(name)}
        onLaneUpdate={(laneId, data) => {
          const lane = boardData.lanes.find((item) => item.id === laneId);
          onEditBoardList(boardDetail.id, { ...lane, name: data.title });
        }}
        onLaneDelete={(laneId) => onDeleteSelectedList(boardDetail.id, laneId)}
        t={(listId) => onClickAddCard(listId)}
        components={{
          BoardWrapper: BoardWrapper,
          Card: CardDetail,
          LaneHeader: ListHeader,
          AddCardLink: AddCardButton,
          NewCardForm: AddCard,
          NewLaneForm: AddNewList,
          NewLaneSection: NewListButton,
        }}
      />
      <AddCard
        isAddCardOpen={isAddCardOpen}
        onCloseAddCard={onCloseAddCard}
        list={list}
        board={boardDetail}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        setData={setData}
      />
    </AppsContent>
  );
};

export default BoardDetailView;

BoardDetailView.propTypes = {
  boardDetail: PropTypes.object,
  setData: PropTypes.func,
};
