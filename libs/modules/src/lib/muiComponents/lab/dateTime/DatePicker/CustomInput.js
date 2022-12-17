import * as React from 'react';
import Box from '@mui/material/Box';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider, DesktopDatePicker} from '@mui/x-date-pickers';

export default function CustomInput() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label='Custom input'
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={({inputRef, inputProps, InputProps}) => (
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <input ref={inputRef} {...inputProps} />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  );
}
