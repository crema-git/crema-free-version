import React, { useEffect } from 'react';
import AppList from '@crema/components/AppList';
import PostItem from './PostItem';
import { useDispatch, useSelector } from 'react-redux';
import { onGetPostsList } from '../../../../redux/actions';

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetPostsList());
  }, [dispatch]);

  const postList = useSelector(({ wall }) => wall.postList);
  const wallData = useSelector(({ wall }) => wall.wallData);

  console.log('postList', postList);
  return (
    <AppList
      data={postList}
      renderRow={(post, index) => (
        <PostItem key={index} post={post} wallData={wallData} />
      )}
    />
  );
};

export default PostsList;
