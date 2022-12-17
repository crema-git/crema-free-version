import React from 'react';

import Custom from './Custom';
import CustomSource from '!raw-loader!./Custom';

import ReactImageTimeline from './ReactImageTimeline';
import ReactImageTimelineSource from '!raw-loader!./ReactImageTimeline';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

const Timeline = () => {
  return (
    <>
      <AppComponentHeader
        title='Timeline'
        description='A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion.'
        refUrl='https://cookpete.com/react-player/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom'
            maxHeight={700}
            component={Custom}
            source={CustomSource}
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='React Image Timeline'
            maxHeight={700}
            component={ReactImageTimeline}
            source={ReactImageTimelineSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Timeline;
