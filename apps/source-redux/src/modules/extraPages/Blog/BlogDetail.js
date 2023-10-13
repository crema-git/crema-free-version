import AppLoader from '@crema/components/AppLoader';
import AppAnimate from '@crema/components/AppAnimate';
import { BlogDetail } from '@crema/modules/extraPages/Blog';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { isEmptyObject } from '@crema/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogDetail } from '../../../redux/actions';

const BlogDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedBlog = useSelector(({ blogs }) => blogs.selectedBlog);
  const { loading } = useSelector(({ common }) => common);

  useEffect(() => {
    dispatch(getBlogDetail(id));
  }, [dispatch, id]);

  return loading ? (
    <AppLoader />
  ) : (
    !isEmptyObject(selectedBlog?.blogDetail) && (
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <BlogDetail
          blogSidebar={selectedBlog.blogSidebar}
          blogDetail={selectedBlog.blogDetail}
        />
      </AppAnimate>
    )
  );
};
export default BlogDetailPage;
