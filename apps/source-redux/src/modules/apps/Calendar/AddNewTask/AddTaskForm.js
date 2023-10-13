import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Form } from 'formik';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { DatePicker } from '@mui/x-date-pickers';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppTextField from '@crema/components/AppTextField';
import { Fonts } from '@crema/constants/AppEnums';
import { styled } from '@mui/material/styles';

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: 20,
  marginBottom: 20,
  [theme.breakpoints.up('xl')]: {
    marginTop: 32,
    marginBottom: 32,
  },
}));
const AddTaskForm = (props) => {
  const { values, setFieldValue, isSubmitting, setTaskLabels, taskLabels } =
    props;

  const labelList = useSelector(({ calendarApp }) => calendarApp.labelList);

  const priorityList = useSelector(
    ({ calendarApp }) => calendarApp.priorityList,
  );

  const staffList = useSelector(({ calendarApp }) => calendarApp.staffList);

  const inputLabel = React.useRef(null);

  const { messages } = useIntl();

  return (
    <Form
      style={{
        width: '100%',
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <AppTextField
          sx={{
            width: '100%',
            fontWeight: Fonts.LIGHT,
            marginBottom: 5,
          }}
          variant='outlined'
          label={<IntlMessages id='todo.taskTitle' />}
          name='title'
        />

        <Box mb={5}>
          <AppGridContainer spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl
                sx={{
                  width: '100%',

                  '& .MuiOutlinedInput-input': {
                    paddingTop: 2,
                    paddingBottom: 1.5,
                    minHeight: 42,
                  },
                }}
                variant='outlined'
              >
                <InputLabel
                  ref={inputLabel}
                  id='assigned-to-select-outlined-label'
                >
                  <IntlMessages id='common.staff' />
                </InputLabel>
                <Select
                  labelId='assigned-to-select-outlined-label'
                  name='assignedTo'
                  label={<IntlMessages id='common.staff' />}
                  onChange={(event) =>
                    setFieldValue('assignedTo', event.target.value)
                  }
                  sx={{
                    width: '100%',
                  }}
                >
                  {staffList.map((staff) => {
                    return (
                      <MenuItem
                        value={staff.id}
                        key={staff.id}
                        sx={{
                          cursor: 'pointer',
                          inputVariant: 'outlined',
                        }}
                      >
                        <Box display='flex' alignItems='center'>
                          {staff.image ? (
                            <Avatar
                              sx={{
                                marginRight: 2,
                              }}
                              src={staff.image}
                            />
                          ) : (
                            <Avatar
                              sx={{
                                marginRight: 2,
                              }}
                            >
                              {staff.name.toUpperCase()}
                            </Avatar>
                          )}
                          <span>{staff.name}</span>
                        </Box>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box width={1}>
                <DatePicker
                  autoOk
                  format='YYYY/MM/DD'
                  variant='inline'
                  inputVariant='outlined'
                  label={<IntlMessages id='common.startDate' />}
                  name='date'
                  value={values.startDate}
                  renderInput={(params) => <TextField {...params} />}
                  onChange={(value) => setFieldValue('startDate', value)}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box width={1}>
                <DatePicker
                  autoOk
                  format='YYYY/MM/DD'
                  variant='inline'
                  inputVariant='outlined'
                  label={<IntlMessages id='common.endDate' />}
                  name='endDate'
                  value={values.endDate}
                  renderInput={(params) => <TextField {...params} />}
                  onChange={(value) => setFieldValue('endDate', value)}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl
                sx={{
                  width: '100%',
                }}
                variant='outlined'
              >
                <InputLabel
                  ref={inputLabel}
                  id='demo-simple-select-outlined-label'
                >
                  <IntlMessages id='common.priority' />
                </InputLabel>
                <Select label='priority' name='priority'>
                  {priorityList.map((priority) => {
                    return (
                      <MenuItem
                        value={priority.type}
                        key={priority.id}
                        sx={{
                          cursor: 'pointer',
                          inputVariant: 'outlined',
                        }}
                      >
                        {priority.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                multiple
                id='tags-outlined'
                options={labelList}
                getOptionLabel={(option) => option.name}
                value={taskLabels}
                onChange={(event, value) => setTaskLabels(value)}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='outlined'
                    label={<IntlMessages id='common.label' />}
                    fullWidth
                  />
                )}
              />
            </Grid>
          </AppGridContainer>
        </Box>

        <Box mb={5}>
          <AppTextField
            name='content'
            multiline
            sx={{
              width: '100%',
              backgroundColor: 'background.paper',
              color: 'text.primary',
            }}
            rows='6'
            variant='outlined'
            placeholder={messages['common.description']}
          />
        </Box>

        <StyledDivider />
      </div>
      <div style={{ textAlign: 'right' }}>
        <Button
          sx={{
            position: 'relative',
            minWidth: 100,
          }}
          color='primary'
          variant='outlined'
          disabled={isSubmitting}
          type='submit'
        >
          <IntlMessages id='common.save' />
        </Button>
      </div>
    </Form>
  );
};

export default AddTaskForm;

AddTaskForm.defaultProps = {
  isSubmitting: false,
};

AddTaskForm.propTypes = {
  values: PropTypes.object.isRequired,
  taskLabels: PropTypes.array.isRequired,
  setTaskLabels: PropTypes.func,
  setFieldValue: PropTypes.func,
  isSubmitting: PropTypes.bool,
};
