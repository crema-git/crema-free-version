import React from 'react';
import {rechartsConfigs} from './RechartRoutes';
import ColorPicker from '../../app/thirdParty/reactColor';
import GoogleMap from '../../app/thirdParty/googleMap';
import ReactNotificationEx from '../../app/thirdParty/reactNotification';
import ReactDropzone from '../../app/thirdParty/reactDropzone';
import ReactPlayer from '../../app/thirdParty/reactPlayer';
import Calendar from '../../app/thirdParty/calendar';
import ReactSlick from '../../app/thirdParty/reactSlick';
import Timeline from '../../app/thirdParty/timeLine';
import FroalaEditor from '../../app/thirdParty/froalaEditor';
import FileStack from '../../app/thirdParty/filestack';
import FusionCharts from '../../app/thirdParty/fusionCharts';

export const thirdPartyConfigs = [
  ...rechartsConfigs,
  {
    path: '/third-party/react-color',
    element: <ColorPicker />,
  },
  {
    path: '/third-party/google-map',
    element: <GoogleMap />,
  },
  {
    path: '/third-party/react-notification',
    element: <ReactNotificationEx />,
  },
  {
    path: '/third-party/react-dropzone',
    element: <ReactDropzone />,
  },
  {
    path: '/third-party/react-player',
    element: <ReactPlayer />,
  },
  {
    path: '/third-party/calendar',
    element: <Calendar />,
  },
  {
    path: '/third-party/slider',
    element: <ReactSlick />,
  },
  {
    path: '/third-party/froala-editor',
    element: <FroalaEditor />,
  },
  {
    path: '/third-party/filestack',
    element: <FileStack />,
  },
  {
    path: '/third-party/fusion-charts',
    element: <FusionCharts />,
  },
  {
    path: '/third-party/time-line',
    element: <Timeline />,
  },
];
