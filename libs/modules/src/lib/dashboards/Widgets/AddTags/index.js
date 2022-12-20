import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import AddNewTag from './AddNewTag';
import PropTypes from 'prop-types';
import { blue, green, orange, red, teal } from '@mui/material/colors';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { darken } from '@mui/material';

const colorList = [
  { id: 9001, color: blue[600] },
  { id: 9002, color: red[600] },
  { id: 9003, color: green[600] },
  { id: 9004, color: orange[600] },
  { id: 9005, color: teal[600] },
  { id: 9006, color: blue[600] },
];

const AddTags = (props) => {
  const { data } = props;

  const [tags, setTags] = useState(data);

  const handleDelete = (tagToDelete) => () => {
    setTags((tags) => tags.filter((tag) => tag.id !== tagToDelete.id));
  };

  const onAddNewTag = (newTag) => {
    let tag = {
      label: newTag,
      key: Math.floor(Math.random() * 10000),
      color: colorList[Math.floor(Math.random() * colorList.length)].color,
    };
    setTags((tags) => tags.concat(tag));
  };

  const { messages } = useIntl();

  return (
    <AppCard sxStyle={{ height: 1 }} title={messages['dashboard.addTags']}>
      <Box
        sx={{
          p: 2,
          borderRadius: 1,
          backgroundColor: (theme) =>
            darken(theme.palette.background.default, 0.03),
        }}
      >
        {tags.map((item) => {
          return (
            <Chip
              key={item.id}
              sx={{
                backgroundColor: item.color,
                fontSize: 14,
                margin: 2,
                padding: '8px 4px',
                color: (theme) => theme.palette.primary.contrastText,
              }}
              label={item.label}
              onDelete={handleDelete(item)}
            />
          );
        })}

        <AddNewTag onAddNewTag={onAddNewTag} />
      </Box>
    </AppCard>
  );
};

export default AddTags;

AddTags.defaultProps = {
  data: [],
};

AddTags.propTypes = {
  data: PropTypes.array,
};
