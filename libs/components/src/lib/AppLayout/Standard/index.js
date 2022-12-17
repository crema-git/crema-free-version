import React, {useEffect, useState} from 'react';
import AppSidebar from './AppSidebar';
import AppThemeSetting from '../../AppThemeSetting';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import StandardWrapper from './StandardWrapper';
import AppFixedFooter from './AppFixedFooter';
import {useLayoutContext} from "@crema/context/LayoutContextProvider";
import {LayoutType} from '@crema/constants/AppEnums';
import StandardContainer from './StandardContainer';
import AppContentView from '../../AppContentView';
import {useLocation} from 'react-router-dom';

const Standard = () => {
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
    <StandardContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <StandardWrapper
        className={clsx('standardWrapper', {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
        })}
      >
        <AppHeader toggleNavCollapsed={toggleNavCollapsed} />
        <Box className='mainContent'>
          <AppSidebar
            isNavCollapsed={isNavCollapsed}
            toggleNavCollapsed={toggleNavCollapsed}
          />
          <AppContentView />
          <AppFixedFooter />
        </Box>
        <AppThemeSetting />
      </StandardWrapper>
    </StandardContainer>
  );
};

export default Standard;
