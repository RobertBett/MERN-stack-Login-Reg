import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import classNames from 'classnames';

import { connect } from 'react-redux';
import requireAuth from './requireAuth';
import { styles } from '../Utilities/styles';
import { logout } from '../store/actions';

class Dashboard extends React.Component {
  state={
    open: false,
  }

  handleLogout=() => {
    this.props.logout();
    console.log('[CDJKBERBOVUEBVOU]');
    sessionStorage.removeItem('userInfo');
    this.props.history.push('/');
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  logoutAlert() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText>Are you sure you want to Logout?</DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} className={classNames(classes.textButtons)} color="inherit">
              Cancel
            </Button>
            <Button onClick={this.handleLogout} className={classNames(classes.textButtons)} color="inherit" autoFocus>
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const user = JSON.parse(sessionStorage.getItem('userInfo'));
    console.log(user);

    if (!this.props.authenticated) {
      this.props.history.push('/');
    }
    return (
      <div className={classes.dashboardRoot}>
        <AppBar position="static" className={classNames(classes.mainColor)}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            {user && (
              <Typography variant="h6" color="inherit" className={classes.grow}>
                { `Welcome! ${user.firstName}, ${user.lastName}`}
              </Typography>
            )}
            <Button onClick={this.handleClickOpen} color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        {this.logoutAlert()}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  authenticated: state.Auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

Dashboard.propTypes = {
  authenticated: PropTypes.string,
  history: PropTypes.object,
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps,
  mapDispatchToProps)(withStyles(styles)(requireAuth(Dashboard)));
