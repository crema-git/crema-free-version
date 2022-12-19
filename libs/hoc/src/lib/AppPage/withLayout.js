import React from 'react';
import {Layouts} from "@crema/components";
import {useLayoutContext} from "@crema/context/LayoutContextProvider";

const withLayout = (ComposedComponent) => (props) => {
  const {navStyle} = useLayoutContext();
  const AppLayout = Layouts[navStyle];

  // const {updateNavStyle} = useLayoutActionsContext();
  // const {updateMenuStyle, setSidebarBgImage} = useSidebarActionsContext();
  // const router = useRouter();

  // useEffect(() => {
  //   if (router.query.layout) updateNavStyle(router.query.layout);
  //   if (router.query.menuStyle) updateMenuStyle(router.query.menuStyle);
  //   if (router.query.sidebarImage) setSidebarBgImage(true);
  // }, []);

  return (
    <AppLayout>
      <ComposedComponent {...props} />
    </AppLayout>
  );
};

export default withLayout;
