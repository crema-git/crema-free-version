import React from 'react';
import AppList from '@crema/components/AppList';
import PostItem from './PostItem';
import PropTypes from 'prop-types';

const PostsList = ({ wallData, postList, setPostList }) => {
  return (
    <AppList
      data={postList}
      renderRow={(post, index) => (
        <PostItem
          key={index}
          post={post}
          wallData={wallData}
          setPostList={setPostList}
        />
      )}
    />
  );
};

export default PostsList;

PostsList.propTypes = {
  wallData: PropTypes.object,
  postList: PropTypes.array,
  setPostList: PropTypes.func,
};
