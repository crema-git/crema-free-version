import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicList from './BasicList';
import BasicListSource from '!raw-loader!./BasicList';

import NestedList from './NestedList';
import NestedListSource from '!raw-loader!./NestedList';

import FolderList from './FolderList';
import FolderListSource from '!raw-loader!./FolderList';

import InteractiveList from './InteractiveList';
import InteractiveListSource from '!raw-loader!./InteractiveList';

import SelectedListItem from './SelectedListItem';
import SelectedListItemSource from '!raw-loader!./SelectedListItem';

import AlignItemsList from './AlignItemsList';
import AlignItemsListSource from '!raw-loader!./AlignItemsList';

import CheckboxList from './CheckboxList';
import CheckboxListSource from '!raw-loader!./CheckboxList';

import CheckboxListSecondary from './CheckboxListSecondary';
import CheckboxListSecondarySource from '!raw-loader!./CheckboxListSecondary';

import SwitchListSecondary from './SwitchListSecondary';
import SwitchListSecondarySource from '!raw-loader!./SwitchListSecondary';

import PinnedSubheaderList from './PinnedSubheaderList';
import PinnedSubheaderListSource from '!raw-loader!./PinnedSubheaderList';

import InsetList from './InsetList';
import InsetListSource from '!raw-loader!./InsetList';

import GutterlessList from './Gutterlesslist';
import GutterlessListSource from '!raw-loader!./Gutterlesslist';

import VirtualizedList from './VirtualizedList';
import VirtualizedListSource from '!raw-loader!./VirtualizedList';

import CustomizedList from './CustomizedList';
import CustomizedListSource from '!raw-loader!./CustomizedList';

const Lists = () => {
  return (
    <>
      <AppComponentHeader
        title='Lists'
        description='Lists are continuous, vertical indexes of text or images.'
        refUrl='https://mui.com/components/lists/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic Lists'
            component={BasicList}
            source={BasicListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Nested List'
            component={NestedList}
            source={NestedListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Folder List'
            component={FolderList}
            source={FolderListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Selected ListItem'
            component={SelectedListItem}
            source={SelectedListItemSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Interactive List'
            component={InteractiveList}
            source={InteractiveListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='AlignItems List'
            component={AlignItemsList}
            source={AlignItemsListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Checkbox List'
            component={CheckboxList}
            source={CheckboxListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Checkbox ListSecondary'
            component={CheckboxListSecondary}
            source={CheckboxListSecondarySource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Switch ListSecondary'
            component={SwitchListSecondary}
            source={SwitchListSecondarySource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pinned Subheader List'
            component={PinnedSubheaderList}
            source={PinnedSubheaderListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized List'
            component={CustomizedList}
            source={CustomizedListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Inset List'
            component={InsetList}
            source={InsetListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Gutter less List'
            component={GutterlessList}
            source={GutterlessListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Virtualized List'
            component={VirtualizedList}
            source={VirtualizedListSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Lists;
