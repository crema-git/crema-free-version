import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicModal from './BasicModal';
import BasicModalSource from '!raw-loader!./BasicModal';

import KeepMountedModal from './KeepMountedModal';
import KeepMountedModalSource from '!raw-loader!./KeepMountedModal';

import NestedModal from './NestedModal';
import NestedModalSource from '!raw-loader!./NestedModal';

import TransitionsModal from './TransitionsModal';
import TransitionsModalSource from '!raw-loader!./TransitionsModal';

const Modal = () => {
  return (
    <>
      <AppComponentHeader
        title="Modal"
        description="The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else."
        refUrl="https://mui.com/components/modal/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic Modal"
            component={BasicModal}
            source={BasicModalSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="KeepMountedModal"
            component={KeepMountedModal}
            source={KeepMountedModalSource}
            description="The content of modal is unmounted when closed. If you need to make the content available to search engines or render expensive component trees inside your modal while optimizing for interaction responsiveness it might be a good idea to change this default behavior by enabling the keepMounted prop."
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Nested Modal"
            component={NestedModal}
            source={NestedModalSource}
            description="Modals can be nested, for example a select within a dialog, but stacking of more than two modals, or any two modals with a backdrop is discouraged. "
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Transitions Modal"
            component={TransitionsModal}
            source={TransitionsModalSource}
            description=""
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Modal;
