import React, {useEffect} from 'react';
import AppLoader from '@crema/components/AppLoader';
import Grid from '@mui/material/Grid';
import BlogSidebarCard from '../BlogSidebarCard';
import BlogDetailHeader from './BlogDetailHeader';
import BlogDetailContent from './BlogDetailContent';
import BlogComment from './BlogComment';
import PropTypes from 'prop-types';
import BlogContent from '../BlogContent';
import AppAnimate from '@crema/components/AppAnimate';
import AppGridContainer from '@crema/components/AppGridContainer';
import {useGetDataApi} from '@crema/hooks/APIHooks';
import {isEmptyObject} from '@crema/helpers/ApiHelper';
import {useParams} from 'react-router-dom';

const BlogDetail = () => {
  const {id} = useParams();
  const [{apiData, loading}, {setQueryParams}] = useGetDataApi(
    '/pages/blogs/detail',
    {},
    {id: id},
    false,
  );

  useEffect(() => {
    setQueryParams({id: id});
  }, [id]);

  return loading ? (
    <AppLoader />
  ) : (
    !isEmptyObject(apiData?.blogDetail) && (
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <AppGridContainer>
          <Grid item xs={12}>
            <BlogDetailHeader
              title={apiData.blogDetail.blogDetailContent.title}
              blogDetailHeader={apiData.blogDetail.blogDetailHeader}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            xl={3}
            sx={{
              order: {md: 2},
              position: {md: 'sticky'},
              top: {md: 70},
              bottom: {md: 0},
              zIndex: 2,
              alignSelf: {md: 'flex-start'},
            }}
          >
            <BlogSidebarCard blogSidebar={apiData.blogSidebar} />
          </Grid>
          <Grid item xs={12} md={8} lg={8} xl={9} sx={{order: {md: 1}}}>
            <BlogDetailContent
              blogDetailContent={apiData.blogDetail.blogDetailContent}
            />
            <BlogComment comment={apiData.blogDetail.blogComment} />
          </Grid>
        </AppGridContainer>
      </AppAnimate>
    )
  );
};

export default BlogDetail;

BlogContent.propTypes = {
  blogSidebar: PropTypes.object.isRequired,
  blogDetail: PropTypes.object.isRequired,
};
