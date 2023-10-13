import React from 'react';

const Avatar = React.lazy(() => import('./Avatar'));
const Badges = React.lazy(() => import('./Badges'));
const Chips = React.lazy(() => import('./Chips'));
const Divider = React.lazy(() => import('./Divider'));
const Lists = React.lazy(() => import('./Lists'));
const Table = React.lazy(() => import('./Table'));
const Tooltip = React.lazy(() => import('./Tooltip'));
const Typography = React.lazy(() => import('./Typography'));

export {Avatar, Badges, Chips, Divider, Lists, Table, Tooltip, Typography};
