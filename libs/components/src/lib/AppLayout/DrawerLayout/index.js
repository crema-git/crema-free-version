import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import AppContentView from '../../AppContentView';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import {useLayoutContext} from "@crema/context/LayoutContextProvider";
import AppThemeSetting from '../../AppThemeSetting';
import DrawerLayoutWrapper from './DrawerLayoutWrapper';
import MainContent from './MainContent';
import {LayoutType} from '@crema/constants/AppEnums';
import AppSidebar from './AppSidebar';
import DrawerLayoutContainer from './DrawerLayoutContainer';
import {useLocation} from 'react-router-dom';

const DrawerLayout = () => {
  const {pathname} = useLocation();
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const {footer, layoutType, headerType, footerType} = useLayoutContext();

  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  return (
    <DrawerLayoutContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <DrawerLayoutWrapper
        className={clsx('drawerLayoutWrapper', {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
          appMainFixedHeader: headerType === 'fixed',
        })}
      >
        <AppSidebar
          isNavCollapsed={isNavCollapsed}
          toggleNavCollapsed={toggleNavCollapsed}
        />

        <MainContent>
          <AppHeader toggleNavCollapsed={toggleNavCollapsed} />
          <AppContentView />
          <AppFixedFooter />
        </MainContent>
        <AppThemeSetting />
      </DrawerLayoutWrapper>
    </DrawerLayoutContainer>
  );
};

export default DrawerLayout;
