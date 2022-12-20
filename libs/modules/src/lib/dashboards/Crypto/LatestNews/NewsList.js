import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import AppScrollbar from '@crema/components/AppScrollbar';
import AppList from '@crema/components/AppList';

const NewsList = (props) => {
  const { newsData } = props;

  return (
    <AppScrollbar>
      <List>
        <AppList
          data={newsData}
          renderRow={(news) => {
            return (
              <ListItem
                key={news.id}
                className="item-hover"
                sx={{
                  px: 5,
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <ListItemText
                  sx={{
                    flex: '1 1 0',
                  }}
                  primary={
                    <Box
                      component="span"
                      sx={{
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 14,
                      }}
                    >
                      <Box
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        {news.created}
                      </Box>
                      <Box
                        sx={{
                          ml: 2,
                          color: 'primary.main',
                        }}
                      >
                        {news.by}
                      </Box>
                    </Box>
                  }
                  secondary={
                    <Box
                      component="span"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: Fonts.MEDIUM,
                        fontSize: 14,
                      }}
                    >
                      {news.news}
                    </Box>
                  }
                />
                <Box
                  sx={{
                    ml: { sm: 3, xl: 5 },
                    width: { xs: '100%', sm: 'auto' },
                    '& .newsImg': {
                      width: { xs: '100%', sm: '10rem' },
                      display: 'block',
                    },
                  }}
                >
                  <img className="newsImg" src={news.image} alt="bitcoin" />
                </Box>
              </ListItem>
            );
          }}
        />
      </List>
    </AppScrollbar>
  );
};

export default NewsList;

NewsList.defaultProps = {
  newsData: [],
};

NewsList.propTypes = {
  newsData: PropTypes.array,
};
