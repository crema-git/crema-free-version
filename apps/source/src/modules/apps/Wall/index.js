import React from 'react';
import AppGridContainer from '@crema/components/AppGridContainer';
import { Grid } from '@mui/material';
import AppsContainer from '@crema/components/AppsContainer';
import AppScrollbar from '@crema/components/AppScrollbar';
import { useIntl } from 'react-intl';
import { styled } from '@mui/material/styles';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import {
  About,
  CreatePost,
  FriendRequests,
  Photos,
  PostsList,
  RecentNews,
  Stories,
  Suggestions,
  SuggestTeam,
  VideoCall,
  WhatsHappen,
  WhoToFollow,
} from '@crema/modules/apps/Wall';

const LeftSidebar = styled(Grid)(({ theme }) => ({
  '@media screen and (min-width: 600px) and (max-width: 1023px)': {
    flexBasis: '40%',
    maxWidth: '40%',
  },
  '@media screen and (min-width: 1200px) and (max-width: 1299px)': {
    flexBasis: '28%',
    maxWidth: '28%',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
const RightSidebar = styled(Grid)(() => ({
  '@media screen and (max-width: 1020px)': {
    display: 'none',
  },
  '@media screen and (min-width: 1200px) and (max-width: 1299px)': {
    flexBasis: '28%',
    maxWidth: '28%',
  },
}));
const ContentWrapper = styled(Grid)(() => ({
  height: '100%',
  '@media screen and (min-width: 600px) and (max-width: 1023px)': {
    flexBasis: '60%',
    maxWidth: '60%',
  },
  '@media screen and (min-width: 1200px) and (max-width: 1299px)': {
    flexBasis: '44%',
    maxWidth: '44%',
  },
}));

const Wall = () => {
  const [{ apiData: wallData }] = useGetDataApi('/wall', undefined);
  const [{ apiData: postList }, { setData: setPostList }] = useGetDataApi(
    '/wall/posts',
    []
  );
  const { messages } = useIntl();

  return (
    <AppsContainer
      title={messages['sidebar.apps.wall']}
      cardStyle={{ background: 'none', boxShadow: 'none', border: '0 none' }}
      fullView
    >
      {wallData && (
        <AppGridContainer style={{ height: 'calc(100% + 32px)' }}>
          <LeftSidebar item xs={12} sm={6} md={3} style={{ height: '100%' }}>
            <AppScrollbar style={{ height: '100%' }}>
              <VideoCall data={wallData.videoCall} />
              <About about={wallData.about} />
              <SuggestTeam data={wallData.suggestTeam} />
              <Photos photos={wallData.photos} />
              <Suggestions suggestions={wallData.suggestions} />
            </AppScrollbar>
          </LeftSidebar>
          <ContentWrapper item xs={12} sm={6} md={6} style={{ height: '100%' }}>
            <AppScrollbar style={{ height: '100%' }}>
              <CreatePost wallData={wallData} setPostList={setPostList} />
              <PostsList
                wallData={wallData}
                postList={postList}
                setPostList={setPostList}
              />
            </AppScrollbar>
          </ContentWrapper>
          <RightSidebar item xs={12} sm={6} md={3} style={{ height: '100%' }}>
            <AppScrollbar style={{ height: '100%' }}>
              <Stories stories={wallData.stories} />
              <WhatsHappen whatsHappen={wallData.whatsHappen} />
              <WhoToFollow whoToFollow={wallData.whoToFollow} />
              <FriendRequests friendRequests={wallData.friendRequests} />
              <RecentNews recentNews={wallData.recentNews} />
            </AppScrollbar>
          </RightSidebar>
        </AppGridContainer>
      )}
    </AppsContainer>
  );
};

export default Wall;
