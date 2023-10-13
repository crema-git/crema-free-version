import AppLoader from '@crema/components/AppLoader';
import AppAnimate from '@crema/components/AppAnimate';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { isEmptyObject } from '@crema/helpers';
import CreateBlog from '../CreateBlog';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogDetail } from '../../../../redux/actions';

const BlogEditPage = () => {
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
        <CreateBlog selectedBlog={selectedBlog.blogDetail} />
      </AppAnimate>
    )
  );
};
export default BlogEditPage;
