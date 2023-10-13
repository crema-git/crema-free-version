import React from 'react';

const AppBar = React.lazy(() => import('./AppBar'));
const Accordion = React.lazy(() => import('./Accordion'));
const Card = React.lazy(() => import('./Card'));
const Paper = React.lazy(() => import('./Paper'));

export {AppBar, Accordion, Card, Paper};
