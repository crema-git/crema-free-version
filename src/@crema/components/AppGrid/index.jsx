import React from 'react';
import GridView from './GridView';
import PropTypes from 'prop-types';
import GridFooter from './GridFooter';

const AppGrid = ({ footerProps, data = [], ...rest }) => {
  return (
    <GridView
      {...rest}
      data={data}
      ListFooterComponent={
        footerProps ? <GridFooter loading={footerProps.loading} footerText={footerProps.footerText} /> : null
      }
    />
  );
};

export default AppGrid;
AppGrid.propTypes = {
  loading: PropTypes.bool,
  border: PropTypes.bool,
  footerProps: PropTypes.shape({
    loading: PropTypes.bool,
    footerText: PropTypes.string,
  }),
  containerStyle: PropTypes.object,
  ListEmptyComponent: PropTypes.node,
  ListFooterComponent: PropTypes.node,
  data: PropTypes.array,
  onEndReached: PropTypes.func,
};
