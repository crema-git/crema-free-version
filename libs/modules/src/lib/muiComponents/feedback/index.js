import React from 'react';

const Alert = React.lazy(() => import('./Alert'));
const Backdrop = React.lazy(() => import('./Backdrop'));
const Dialog = React.lazy(() => import('./Dialog'));
const Progress = React.lazy(() => import('./Progress'));
const Skeleton = React.lazy(() => import('./Skeleton'));
const Snackbar = React.lazy(() => import('./Snackbar'));

export { Alert, Backdrop, Dialog, Progress, Skeleton, Snackbar };
