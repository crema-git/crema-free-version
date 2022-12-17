import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import AppContentView from '../../AppContentView';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import {useLayoutContext} from "@crema/context/LayoutContextProvider";
import AppThemeSetting from '../../AppThemeSetting';
import HorDefaultWrapper from './HorDefaultWrapper';
import MainContent from './MainContent';
import {LayoutType} from '@crema/constants/AppEnums';
import HorDefaultContainer from './HorDefaultContainer';
import {useLocation} from 'react-router-dom';

const HorDefault = () => {
  const {pathname} = useLocation();
  const {footer, layoutType, footerType} = useLayoutContext();
  const [isNavCollapsed, setNavCollapsed] = useState(false);

  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  return (
    <HorDefaultContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <HorDefaultWrapper
        className={clsx('horDefaultWrapper', {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
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
      </HorDefaultWrapper>
    </HorDefaultContainer>
  );
};

export default HorDefault;
