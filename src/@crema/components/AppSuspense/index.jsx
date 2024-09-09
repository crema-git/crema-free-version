import React from "react";
import PropTypes from "prop-types";
import AppLoader from "../AppLoader";

const AppSuspense = (props) => {
  return (
    <React.Suspense fallback={<AppLoader />}>{props.children}</React.Suspense>
  );
};

export default AppSuspense;

AppSuspense.propTypes = {
  children: PropTypes.node.isRequired,
};
