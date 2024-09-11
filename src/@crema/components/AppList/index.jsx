import React from 'react';
import ListView from './ListView';
import PropTypes from 'prop-types';
import ListFooter from './ListFooter';

const AppList = ({ footerProps, data = [], ...props }) => {
  return (
    <ListView
      {...props}
      data={data}
      ListFooterComponent={
        footerProps ? <ListFooter loading={footerProps.loading} footerText={footerProps.footerText} /> : null
      }
    />
  );
};

export default AppList;
AppList.propTypes = {
  border: PropTypes.bool,
  containerStyle: PropTypes.object,
  ListEmptyComponent: PropTypes.node,
  ListFooterComponent: PropTypes.node,
  data: PropTypes.array,
  onEndReached: PropTypes.func,
  renderRow: PropTypes.func,
  footerProps: PropTypes.shape({
    loading: PropTypes.bool,
    footerText: PropTypes.string,
  }),
};
