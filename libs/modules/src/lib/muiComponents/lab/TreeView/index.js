import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import FileSystemNavigator from './FileSystemNavigator';
import FileSystemNavigatorSource from '!raw-loader!./FileSystemNavigator';

import MultiSelectTreeView from './MultiSelectTreeView';
import MultiSelectTreeViewSource from '!raw-loader!./MultiSelectTreeView';

import ControlledTreeView from './ControlledTreeView';
import ControlledTreeViewSource from '!raw-loader!./ControlledTreeView';

import RichObjectTreeView from './RichObjectTreeView';
import RichObjectTreeViewSource from '!raw-loader!./RichObjectTreeView';

import IconExpansionTreeView from './IconExpansionTreeView';
import IconExpansionTreeViewSource from '!raw-loader!./IconExpansionTreeView';

import BarTreeView from './BarTreeView';
import BarTreeViewSource from '!raw-loader!./BarTreeView';

import CustomizedTreeView from './CustomizedTreeView';
import CustomizedTreeViewSource from '!raw-loader!./CustomizedTreeView';

import GmailTreeView from './GmailTreeView';
import GmailTreeViewSource from '!raw-loader!./GmailTreeView';

import DisabledTreeItems from './DisabledTreeItems';
import DisabledTreeItemsSource from '!raw-loader!./DisabledTreeItems';

const TreeView = () => {
  return (
    <>
      <AppComponentHeader
        title='TreeView'
        description='A tree view widget presents a hierarchical list.'
        refUrl='https://mui.com/components/tree-view/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='File System Navigator'
            component={FileSystemNavigator}
            source={FileSystemNavigatorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Expansion Tree View'
            component={IconExpansionTreeView}
            source={IconExpansionTreeViewSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Multi Select Tree View'
            component={MultiSelectTreeView}
            source={MultiSelectTreeViewSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Bar Tree View'
            component={BarTreeView}
            source={BarTreeViewSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Tree View'
            component={CustomizedTreeView}
            source={CustomizedTreeViewSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Rich Object Tree View'
            component={RichObjectTreeView}
            source={RichObjectTreeViewSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Controlled Tree View'
            component={ControlledTreeView}
            source={ControlledTreeViewSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='GmailTreeView'
            component={GmailTreeView}
            source={GmailTreeViewSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='DisabledTreeItems'
            component={DisabledTreeItems}
            source={DisabledTreeItemsSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default TreeView;
