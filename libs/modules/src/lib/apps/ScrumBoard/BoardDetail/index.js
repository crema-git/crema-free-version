import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import AppsContainer from '@crema/components/AppsContainer';
import BoardDetailView from './BoardDetailView';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetDataApi } from '@crema/hooks/APIHooks';

const BoardDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [{ apiData: boardDetail }, { setData, setQueryParams }] = useGetDataApi(
    '/api/scrumboard/board/',
    undefined,
    { id: id },
    false
  );

  useEffect(() => {
    setQueryParams({ id });
    return () => {
      setQueryParams(null);
    };
  }, [id]);

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
            component="span"
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
      <BoardDetailView boardDetail={boardDetail} setData={setData} />
    </AppsContainer>
  );
};

export default BoardDetail;
