import { useGetDataApi } from '@crema/hooks/APIHooks';
import AppLoader from '@crema/components/AppLoader';
import { BlogContent } from '@crema/modules/extraPages/Blog';
import { isEmptyObject } from '@crema/helpers';
import AppAnimate from '@crema/components/AppAnimate';

const Blogs = () => {
  const [{ apiData, loading }] = useGetDataApi('/pages/blogs');

  return loading ? (
    <AppLoader />
  ) : (
    !isEmptyObject(apiData.blogSidebar) && (
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <BlogContent
          blogSidebar={apiData.blogSidebar}
          blogContent={apiData.blogContent}
        />
      </AppAnimate>
    )
  );
};
export default Blogs;
