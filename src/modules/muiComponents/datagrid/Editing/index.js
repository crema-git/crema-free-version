import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicEditingGrid from './BasicEditingGrid';
import BasicEditingGridSource from '!raw-loader!./BasicEditingGrid';

import IsCellEditableGrid from './IsCellEditableGrid';
import IsCellEditableGridSource from '!raw-loader!./IsCellEditableGrid';

import CellEditControlGrid from './CellEditControlGrid';
import CellEditControlGridSource from '!raw-loader!./CellEditControlGrid';

import ValidateRowModelControlGrid from './ValidateRowModelControlGrid';
import ValidateRowModelControlGridSource from '!raw-loader!./ValidateRowModelControlGrid';

import ValidateServerNameGrid from './ValidateServerNameGrid';
import ValidateServerNameGridSource from '!raw-loader!./ValidateServerNameGrid';

import RenderRatingEditCellGrid from './RenderRatingEditCellGrid';
import RenderRatingEditCellGridSource from '!raw-loader!./RenderRatingEditCellGrid';

import StartEditButtonGrid from './StartEditButtonGrid';
import StartEditButtonGridSource from '!raw-loader!./StartEditButtonGrid';

import BasicRowEditingGrid from './BasicRowEditingGrid';
import BasicRowEditingGridSource from '!raw-loader!./BasicRowEditingGrid';

import RowEditControlGrid from './RowEditControlGrid';
import RowEditControlGridSource from '!raw-loader!./RowEditControlGrid';

import ConditionalValidationGrid from './ConditionalValidationGrid';
import ConditionalValidationGridSource from '!raw-loader!./ConditionalValidationGrid';

const Editing = () => {
  return (
    <>
      <AppComponentHeader
        title='Editing'
        description='The data grid has built-in edit capabilities that you can customize to your needs.'
        refUrl='https://mui.com/components/data-grid/editing/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='BasicEditingGrid'
            component={BasicEditingGrid}
            source={BasicEditingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='IsCellEditableGrid'
            component={IsCellEditableGrid}
            source={IsCellEditableGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CellEditControlGrid'
            component={CellEditControlGrid}
            source={CellEditControlGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValidateRowModelControlGrid'
            component={ValidateRowModelControlGrid}
            source={ValidateRowModelControlGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValidateServerNameGrid'
            component={ValidateServerNameGrid}
            source={ValidateServerNameGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RenderRatingEditCellGrid'
            component={RenderRatingEditCellGrid}
            source={RenderRatingEditCellGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='StartEditButtonGrid'
            component={StartEditButtonGrid}
            source={StartEditButtonGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='BasicRowEditingGrid'
            component={BasicRowEditingGrid}
            source={BasicRowEditingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RowEditControlGrid'
            component={RowEditControlGrid}
            source={RowEditControlGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ConditionalValidationGrid'
            component={ConditionalValidationGrid}
            source={ConditionalValidationGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Editing;
