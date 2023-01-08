import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import AppTooltip from '@crema/components/AppTooltip';
import { MessageItem } from '@crema/modules/apps/Mail';
import { useDispatch } from 'react-redux';
import { onUpdateSelectedMail } from '../../../../../toolkit/actions';

const MailDetailBody = (props) => {
  const dispatch = useDispatch();
  const { selectedMail } = props;

  const onSubmitMail = (message, index) => {
    let messages = selectedMail.messages;
    messages.splice(index + 1, 0, message);
    dispatch(onUpdateSelectedMail({ ...selectedMail, messages }));
  };

  const onChangeStarred = (message, isStarred) => {
    const messages = selectedMail.messages.map((data) =>
      data.messageId === message.messageId ? { ...message, isStarred } : data,
    );
    dispatch(onUpdateSelectedMail({ ...selectedMail, messages }));
  };
  return (
    <Box sx={{ px: 5, py: 1 }}>
      {selectedMail ? (
        <>
          <Box
            sx={{
              pt: 1,
              pb: 3,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component='span'
              sx={{
                fontSize: { xs: 16, sm: 18 },
                marginRight: 3,
                paddingLeft: { xs: 0, sm: 12.5 },
              }}
            >
              {selectedMail.subject}
            </Box>
            <AppTooltip title={selectedMail.label.name}>
              <span
                style={{
                  color: selectedMail.label.color,
                  height: 22,
                  cursor: 'pointer',
                }}
              >
                <LabelOutlinedIcon />
              </span>
            </AppTooltip>
          </Box>
          {selectedMail.messages.map((message, index) => (
            <MessageItem
              key={index}
              index={index}
              mailLength={selectedMail.messages.length}
              message={message}
              onSubmitMail={onSubmitMail}
              onChangeStarred={onChangeStarred}
            />
          ))}
        </>
      ) : null}
    </Box>
  );
};

export default MailDetailBody;

MailDetailBody.propTypes = {
  selectedMail: PropTypes.object.isRequired,
  onUpdateSelectedMail: PropTypes.func,
};
