import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import ListDividers from './ListDividers';
import ListDividersSource from '!raw-loader!./ListDividers';
import InsetDividers from './InsetDividers';
import InsetDividersSource from '!raw-loader!./InsetDividers';
import SubheaderDividers from './SubheaderDividers';
import SubheaderDividersSource from '!raw-loader!./SubheaderDividers';
import MiddleDividers from './MiddleDivider';
import MiddleDividersSource from '!raw-loader!./MiddleDivider';
import DividerText from './DividersText';
import DividerTextSource from '!raw-loader!./DividersText';
import VerticalDividers from './VerticalDivider';
import VerticalDividersSource from '!raw-loader!./VerticalDivider';
import VerticalDividersWithText from './VerticalDividerWithText';
import VerticalDividerWithTextSource from '!raw-loader!./VerticalDividerWithText';

const Divider = () => {
  return (
    <>
      <AppComponentHeader
        title="Divider"
        description="A divider is a thin line that groups content in lists and layouts."
        refUrl="https://mui.com/components/dividers/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="List dividers"
            component={ListDividers}
            source={ListDividersSource}
            noScrollbar
            description="The divider renders as an <hr> by default. You can save rendering this DOM element by using the divider prop on the ListItem component."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Inset dividers"
            component={InsetDividers}
            source={InsetDividersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Subheader dividers"
            component={SubheaderDividers}
            source={SubheaderDividersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Middle divider"
            component={MiddleDividers}
            source={MiddleDividersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Dividers with text"
            component={DividerText}
            source={DividerTextSource}
            noScrollbar
            description="You can also render a divider with content."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Vertical divider"
            component={VerticalDividers}
            source={VerticalDividersSource}
            noScrollbar
            description="You can also render a divider vertically using the orientation prop."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Vertical divider with text"
            component={VerticalDividersWithText}
            source={VerticalDividerWithTextSource}
            noScrollbar
            description="You can also render a vertical divider with content."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Divider;
