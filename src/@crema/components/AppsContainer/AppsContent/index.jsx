import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import SimpleBarReact from "simplebar-react";

const AppsContentContainer = styled(SimpleBarReact)(() => {
  return {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "column",
    "& .simplebar-content": {
      height: "100%",
    },
  };
});

const AppsContent = ({ isDetailView = false, fullView, children, ...rest }) => {
  return (
    <AppsContentContainer
      {...rest}
      sx={[
        isDetailView
          ? {
              height: {
                xs: {
                  xs: 60,
                },
              },
            }
          : {
              height: {
                xs: {
                  xs: 129,
                },
              },
            },
        fullView
          ? {
              height: {
                sm: {
                  sm: 0,
                },
              },
            }
          : {
              height: {
                sm: {
                  sm: 60,
                },
              },
            },
      ]}
    >
      {children}
    </AppsContentContainer>
  );
};

export default AppsContent;

AppsContent.propTypes = {
  children: PropTypes.node,
  fullView: PropTypes.bool,
  isDetailView: PropTypes.bool,
};
