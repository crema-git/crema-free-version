import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemButton from "@mui/material/ListItemButton";

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function ListDividers() {
  return (
    (<List sx={style} component='nav' aria-label='mailbox folders'>
      <ListItemButton>
        <ListItemText primary='Inbox' />
      </ListItemButton>
      <Divider />
      <ListItemButton divider>
        <ListItemText primary='Drafts' />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary='Trash' />
      </ListItemButton>
      <Divider light />
      <ListItemButton>
        <ListItemText primary='Spam' />
      </ListItemButton>
    </List>)
  );
}
