import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TabContainer from '../../Utilities/TabContainer';
import { FormHelperText } from '@material-ui/core';

const Login = ({
  email,
  password,
  classes,
  loading,
  handleSubmit,
  handleClickShowPassword,
  showPassword,
  handleForm,
  wrongPassword
}) => (
  <TabContainer className={classes.margin}>
    <Paper className={classes.paper}>
      <Avatar className={classNames(classes.avatar, classes.margin)}>
        <Person className={classes.icon} />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl color="inherit" margin="normal" required fullWidth>
          <InputLabel FormLabelClasses={{ root: classes.cssLabel, focused: classes.cssFocused }} htmlFor="email">
          Email Address
          </InputLabel>
          <Input
            onChange={handleForm}
            value={email}
            classes={{ underline: classes.cssUnderline }}
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
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
          {console.log(wrongPassword,['HELLO'])}
          {wrongPassword && <FormHelperText className={classNames(classes.InputError)} id="component-error-text">Whoops incorect Email or Password 😳</FormHelperText>}
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
              className={classNames(classes.fabProgress, classes.fabProgress2)}
              thickness={7}
            />
          )}
      Sign in
        </Button>
      </form>
    </Paper>
  </TabContainer>
);

Login.propTypes = {
  handleForm: PropTypes.func,
  password: PropTypes.string,
  email: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool,
  showPassword: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleClickShowPassword: PropTypes.func,
};

export default Login;
