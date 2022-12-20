import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicChips from './BasicChip';
import BasicChipsSource from '!raw-loader!./BasicChip';
import ClickableChips from './ClickableChips';
import ClickableChipsSource from '!raw-loader!./ClickableChips';
import DeletableChips from './DeletableChips';
import DeletableChipsSource from '!raw-loader!./DeletableChips';
import ClickableAndDeletableChips from './ClickableDeletable';
import ClickableAndDeletableChipsSource from '!raw-loader!./ClickableDeletable';
import ClickableLinkChips from './ClickableLink';
import ClickableLinkChipsSource from '!raw-loader!./ClickableLink';
import CustomDeleteIconChips from './CustomDeleteIcon';
import CustomDeleteIconChipsSource from '!raw-loader!./CustomDeleteIcon';
import AvatarChips from './ChipAdornments';
import AvatarChipsSource from '!raw-loader!./ChipAdornments';
import IconChips from './IconChip';
import IconChipsSource from '!raw-loader!./IconChip';
import ColorChips from './ColorChip';
import ColorChipsSource from '!raw-loader!./ColorChip';
import SizesChips from './SizesChip';
import SizesChipsSource from '!raw-loader!./SizesChip';
import ChipsArray from './ChipArray';
import ChipsArraySource from '!raw-loader!./ChipArray';

const Chips = () => {
  return (
    <>
      <AppComponentHeader
        title="Chip"
        description="Chips are compact elements that represent an input, attribute, or action."
        refUrl="https://mui.com/components/chips/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic chip"
            component={BasicChips}
            source={BasicChipsSource}
            noScrollbar
            description="The Chip component supports outlined and filled styling."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Clickable"
            component={ClickableChips}
            source={ClickableChipsSource}
            noScrollbar
            description="Chips with the onClick prop defined change appearance on focus, hover, and click."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Deletable"
            component={DeletableChips}
            source={DeletableChipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Clickable and deletable"
            component={ClickableAndDeletableChips}
            source={ClickableAndDeletableChipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Clickable link"
            component={ClickableLinkChips}
            source={ClickableLinkChipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Custom delete icon"
            component={CustomDeleteIconChips}
            source={CustomDeleteIconChipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Custom deAvatar chip"
            component={AvatarChips}
            source={AvatarChipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Icon chip"
            component={IconChips}
            source={IconChipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Color chip"
            component={ColorChips}
            source={ColorChipsSource}
            noScrollbar
            description="You can use the color prop to define a color from theme palette."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Sizes chip"
            component={SizesChips}
            source={SizesChipsSource}
            noScrollbar
            description="You can use the size prop to define a small Chip."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Chip array"
            component={ChipsArray}
            source={ChipsArraySource}
            noScrollbar
            description="An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no onClick prop is defined, the Chip can be focused, but does not gain depth while clicked or touched."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Chips;
