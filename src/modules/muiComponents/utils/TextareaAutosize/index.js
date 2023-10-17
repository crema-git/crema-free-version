import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import EmptyTextarea from './EmptyTextarea';
import EmptyTextareaSource from '!raw-loader!./EmptyTextarea';

import MinHeightTextarea from './MinHeightTextarea';
import MinHeightTextareaSource from '!raw-loader!./MinHeightTextarea';

import MaxHeightTextarea from './MaxHeightTextarea';
import MaxHeightTextareaSource from '!raw-loader!./MaxHeightTextarea';

const TextareaAutosize = () => {
  return (
    <>
      <AppComponentHeader
        title='Textarea Autosize'
        description='A textarea component for React which grows with content.'
        refUrl='https://mui.com/components/textarea-autosize/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Empty TextareaAutosize area'
            component={EmptyTextarea}
            source={EmptyTextareaSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='MinHeightTextarea'
            component={MinHeightTextarea}
            source={MinHeightTextareaSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='MaxHeightTextarea'
            component={MaxHeightTextarea}
            source={MaxHeightTextareaSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default TextareaAutosize;
