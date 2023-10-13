import React from 'react';

const Box = React.lazy(() => import('./Box'));
const Container = React.lazy(() => import('./Container'));
const Grid = React.lazy(() => import('./Grid'));
const Grid2 = React.lazy(() => import('./Grid2'));
const Stack = React.lazy(() => import('./Stack'));
const ImageList = React.lazy(() => import('./ImageList'));

export {Box, Container, Grid, Grid2, Stack, ImageList};
