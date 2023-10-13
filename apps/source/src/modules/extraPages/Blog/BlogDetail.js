import { useGetDataApi } from '@crema/hooks/APIHooks';
import AppLoader from '@crema/components/AppLoader';
import AppAnimate from '@crema/components/AppAnimate';
import { BlogDetail } from '@crema/modules/extraPages/Blog';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { isEmptyObject } from '@crema/helpers';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [{ apiData, loading }, { setQueryParams }] = useGetDataApi(
    '/pages/blogs/detail',
    {},
    { id: id },
    false,
  );

  useEffect(() => {
    setQueryParams({ id: id });
  }, [id]);

  return loading ? (
    <AppLoader />
  ) : (
    !isEmptyObject(apiData?.blogDetail) && (
      <BlogDetail
        blogSidebar={apiData.blogSidebar}
        blogDetail={apiData.blogDetail}
      />
    )
  );
};
export default BlogDetailPage;
