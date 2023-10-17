import React from 'react';
import Grid from '@mui/material/Grid';

import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import AnimationEntrance from './AnimationEntrance';
import AnimationEntranceSource from '!raw-loader!./AnimationEntrance';
import AnimationExit from './AnimationExit';
import AnimationExitSource from '!raw-loader!./AnimationExit';
import Insert from './Insert';
import InsertSource from '!raw-loader!./Insert';
import Container from './Container';
import ContainerSource from '!raw-loader!./Container';
import CustomContent from './CustomContent';
import CustomContentSource from '!raw-loader!./CustomContent';
import Type from './Type';
import TypeSource from '!raw-loader!./Type';
import {ReactNotifications} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const ReactNotificationEx = () => {
  return (
    <div className='app-container'>
      <AppComponentHeader
        title='React Notifications'
        description='Delightful and highly customisable React Component to notify your users.'
        refUrl='https://teodosii.github.io/react-notifications-component//'
      />

      <ReactNotifications
        types={[
          {
            htmlClasses: ['notification-awesome'],
            name: 'awesome',
          },
        ]}
        isMobile={true}
      />
      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Animation Entrance'
            description='Entrance animation can be customised by specifying CSS classes'
            component={AnimationEntrance}
            source={AnimationEntranceSource}
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Animation Exit'
            description='Exit animation can be customised by specifying CSS classes'
            component={AnimationExit}
            source={AnimationExitSource}
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Container'
            description='Container can be set from predefined values top-left, top-right, top-center, bottom-left, bottom-right, bottom-center'
            component={Container}
            source={ContainerSource}
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Content'
            description="With react-notifications-component notification's content can be customised to suit your needs."
            component={CustomContent}
            source={CustomContentSource}
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Insert'
            description='Insertion in react-notifications can be done either at the top or at the bottom of the container'
            component={Insert}
            source={InsertSource}
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Type'
            description='Type can be set from predefined values success, default, warning, info, danger or custom to suit your needs'
            component={Type}
            source={TypeSource}
          />
        </Grid>
      </AppGridContainer>
    </div>
  );
};

export default ReactNotificationEx;
