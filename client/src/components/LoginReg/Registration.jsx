import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PersonAdd from '@material-ui/icons/PersonAdd';
import CircularProgress from '@material-ui/core/CircularProgress';
import TabContainer from '../../Utilities/TabContainer';


const Registration = ({ classes, loading, handleSubmit }) => (
  <TabContainer className={classes.margin}>
    <Paper className={classes.paper}>
      <Avatar className={classNames(classes.avatar, classes.margin)}>
        <PersonAdd />
      </Avatar>
      <Typography component="h1" variant="h5">
        Create an account
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl margin="normal" required>
          <InputLabel FormLabelClasses={{ root: classes.cssLabel, focused: classes.cssFocused }} htmlFor="firstname">First Name</InputLabel>
          <Input
            name="firstname"
            type="firstname"
            id="firstname"
            autoComplete="firstname"
            classes={{ underline: classes.cssUnderline }}
          />
        </FormControl>
        <FormControl margin="normal" required>
          <InputLabel FormLabelClasses={{ root: classes.cssLabel, focused: classes.cssFocused }} htmlFor="lastname">Last Name</InputLabel>
          <Input
            name="lastname"
            type="lastname"
            id="lastname"
            autoComplete="lastname"
            classes={{ underline: classes.cssUnderline }}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel FormLabelClasses={{ root: classes.cssLabel, focused: classes.cssFocused }} htmlFor="email">
          Email Address
          </InputLabel>
          <Input classes={{ underline: classes.cssUnderline }} id="email" name="email" autoComplete="email" autoFocus />
        </FormControl>
        <FormControl margin="normal" required>
          <InputLabel FormLabelClasses={{ root: classes.cssLabel, focused: classes.cssFocused }} htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            classes={{ underline: classes.cssUnderline }}
          />
        </FormControl>
        <FormControl margin="normal" required>
          <InputLabel FormLabelClasses={{ root: classes.cssLabel, focused: classes.cssFocused }} htmlFor="password">Confirm Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="confirmpassword"
            autoComplete="current-password"
            classes={{ underline: classes.cssUnderline }}
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
              thickness={5}
            />
          )}
        Create Account
        </Button>
      </form>
    </Paper>
  </TabContainer>
);

Registration.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,

};

export default Registration;
