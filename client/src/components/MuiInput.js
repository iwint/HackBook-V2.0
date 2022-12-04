import React from 'react';
import { Grid, TextField } from '@mui/material';
import { Field as FormikField } from 'formik';

const MuiInput = ({
  lname,
  required,
  field,
  form: { touched, errors },
  ...props
}) => {
  return (
    <div>
      <Grid>
        <label style={{ color: '#2B3674' }}>
          {lname}
          {required ? <span style={{ color: '#4285F4' }}>*</span> : null}
        </label>
      </Grid>

      <TextField
        sx={{ width: '100%' }}
        helperText={touched[field.name] && errors[field.name]}
        error={!!(touched[field.name] && errors[field.name])}
        {...field}
        {...props}
      />
    </div>
  );
};

const Input = (props) => {
  return <FormikField {...props} component={MuiInput} />;
};

export default Input;
