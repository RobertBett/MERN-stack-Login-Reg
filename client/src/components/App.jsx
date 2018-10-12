import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonAdd from '@material-ui/icons/PersonAdd';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
  mainColor: {
    backgroundColor: '#f44336',
  },
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  icon: {
    width: 30,
    height: 30,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#f44336',
    width: 50,
    height: 50,
  },
  margin: {
    marginTop: theme.spacing.unit * 6,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 6,
    '&:hover': { backgroundColor: '#f44336' },
  },
});

const TabContainer = props => (
  <div>
    {props.children}
  </div>
);

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class App extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <main className={classNames(classes.layout, classes.margin)}>
        <AppBar position="static" color="inherit">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab label="Sign in" icon={<LockIcon />} />
            <Tab label="Create an Account" icon={<PersonAdd />} />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer className={classes.margin}>
            <Paper className={classes.paper}>
              <Avatar className={classNames(classes.avatar, classes.margin)}>
                <LockIcon className={classes.icon} />
              </Avatar>
              <Typography component="h3" variant="h5">
            Sign in
              </Typography>
              <form className={classes.form}>
                <FormControl color="inherit" margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input id="email" name="email" autoComplete="email" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  size="medium"
                  variant="extendedFab"
                  color="primary"
                  className={classNames(classes.submit, classes.mainColor)}
                >
              Sign in
                </Button>
              </form>
            </Paper>
          </TabContainer>
        )}

      </main>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
