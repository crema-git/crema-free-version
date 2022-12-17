import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicModal from './BasicModal';
import BasicModalSource from '!raw-loader!./BasicModal';

import ModalUnstyledDemo from './ModalUnstyledDemo';
import ModalUnstyledDemoSource from '!raw-loader!./ModalUnstyledDemo';

import NestedModal from './NestedModal';
import NestedModalSource from '!raw-loader!./NestedModal';

import TransitionsModal from './TransitionsModal';
import TransitionsModalSource from '!raw-loader!./TransitionsModal';

const Modal = () => {
  return (
    <>
      <AppComponentHeader
        title='Modal'
        description='The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.'
        refUrl='https://mui.com/components/modal/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic Modal'
            component={BasicModal}
            source={BasicModalSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ModalUnstyledDemo'
            component={ModalUnstyledDemo}
            source={ModalUnstyledDemoSource}
            description='The modal also comes with an unstyled version. Its ideal for doing heavy customizations and minimizing bundle size.'
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Nested Modal'
            component={NestedModal}
            source={NestedModalSource}
            description='Modals can be nested, for example a select within a dialog, but stacking of more than two modals, or any two modals with a backdrop is discouraged. '
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Transitions Modal'
            component={TransitionsModal}
            source={TransitionsModalSource}
            description=''
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Modal;
