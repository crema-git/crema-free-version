import React from 'react';
import {useField} from 'formik';
import TextField from '@mui/material/TextField';
// import PropTypes from "prop-types";

const AppTextField = (props) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export default AppTextField;
// AppTextField.propTypes = {
//   props: PropTypes.object.isRequired,
// }
