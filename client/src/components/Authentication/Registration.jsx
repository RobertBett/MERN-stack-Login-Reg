import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PersonAdd from '@material-ui/icons/PersonAdd';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TabContainer from '../../Utilities/TabContainer';


const Registration = ({
  classes, loading, handleSubmit,
  handleClickShowPassword, showPassword,
  firstName, lastName, email, password, handleForm,
  confirmPassword,
}) => (
  <TabContainer className={classNames(classes.InputError)}>
    <Paper className={classes.paper}>
      <Avatar className={classNames(classes.avatar, classes.margin)}>
        <PersonAdd />
      </Avatar>
      <Typography component="h1" variant="h5">
        Create an account
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl margin="normal" required>
          <InputLabel FormLabelClasses={{ root: classes.cssLabel, focused: classes.cssFocused }} htmlFor="firstName">First Name</InputLabel>
          <Input
            onChange={handleForm}
            value={firstName}
            name="firstName"
            type="firstName"
            id="firstName"
            autoComplete="firstName"
            classes={{ underline: classes.cssUnderline }}
          />
          <FormHelperText className={classNames(classes.InputError)} id="component-error-text">First Name Cannot be Blank</FormHelperText>
        </FormControl>
        <FormControl margin="normal" required>
          <InputLabel FormLabelClasses={{ root: classes.cssLabel, focused: classes.cssFocused }} htmlFor="lastName">Last Name</InputLabel>
          <Input
            onChange={handleForm}
            value={lastName}
            name="lastName"
            type="lastName"
            id="lastName"
            autoComplete="lastName"
            classes={{ underline: classes.cssUnderline }}
          />
          <FormHelperText className={classNames(classes.InputError)} id="component-error-text">Last Name Cannot be Blank</FormHelperText>
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel FormLabelClasses={{ root: classes.cssLabel, focused: classes.cssFocused }} htmlFor="email">
          Email Address
          </InputLabel>
          <Input
            onChange={handleForm}
            classes={{ underline: classes.cssUnderline }}
            value={email}
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <FormHelperText className={classNames(classes.InputError)} id="component-error-text">Email is Already in Use </FormHelperText>
          <FormHelperText className={classNames(classes.InputError)} id="component-error-text">Email is Invalid </FormHelperText>
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel FormLabelClasses={{ root: classes.cssLabel, focused: classes.cssFocused }} htmlFor="password">Password</InputLabel>
          <Input
            onChange={handleForm}
            value={password}
            name="password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            classes={{ underline: classes.cssUnderline }}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel FormLabelClasses={{ root: classes.cssLabel, focused: classes.cssFocused }} htmlFor="password">Confirm Password</InputLabel>
          <Input
            onChange={handleForm}
            value={confirmPassword}
            name="password"
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            autoComplete="current-password"
            classes={{ underline: classes.cssUnderline }}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )}
          />
        </FormControl>
        <Button
          disabled={loading}
          type="submit"
          fullWidth
          size="medium"
          variant="extendedFab"
          color="primary"
          className={classNames(classes.submit, classes.mainColor)}
        >
          {loading && (
            <CircularProgress
              size={30}
              className={classes.fabProgress}
              thickness={7}
            />
          )}
        Create Account
        </Button>
      </form>
    </Paper>
  </TabContainer>
);

Registration.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool,
  showPassword: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleForm: PropTypes.func,
  handleClickShowPassword: PropTypes.func,

};

export default Registration;
