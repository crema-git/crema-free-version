import * as React from 'react';
import FocusTrap from "@mui/base/FocusTrap";
import Stack from "@mui/material/Stack";

export default function ContainedToggleTrappedFocus() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <FocusTrap open={open} disableRestoreFocus disableAutoFocus>
        <Stack alignItems='center' spacing={2}>
          <button type='button' onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Open'}
          </button>
          {open && (
            <label>
              First name: <input type='text' />
            </label>
          )}
        </Stack>
      </FocusTrap>
    </React.Fragment>
  );
}
