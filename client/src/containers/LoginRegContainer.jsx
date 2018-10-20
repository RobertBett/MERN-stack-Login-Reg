import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Person from '@material-ui/icons/Person';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonAdd from '@material-ui/icons/PersonAdd';
import AppBar from '@material-ui/core/AppBar';
import Login from '../components/LoginReg/Login';
import Registration from '../components/LoginReg/Registration';
import { styles } from '../Utilities/styles';

class LoginReg extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

    state = {
      loading: false,
      value: 0,
    };


    handleChange = (event, value) => {
      this.setState({ value });
    };

    handleButtonClick = (event) => {
      console.log(event, 'HELLOOOO');
      event.preventDefault();
      if (!this.state.loading) {
        this.setState(
          {
            loading: true,
          },
          () => {
            this.timer = setTimeout(() => {
              this.setState({
                loading: false,
              });
            }, 2000);
          },
        );
      }
    };

    render() {
      const { classes } = this.props;
      const { value } = this.state;
      return (
        <main className={classNames(classes.layout, classes.margin)}>
          <AppBar position="static" color="inherit">
            <Tabs
              className="MuiTab-textColorPrimary-59.MuiTab-selected-61"
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab classes={{ root: classes.cssLabel }} label="Sign in" icon={<Person />} />
              <Tab label="Create an Account" icon={<PersonAdd />} />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <Login
              classes={classes}
              loading={this.state.loading}
              handleSubmit={this.handleButtonClick}
            />
          )}
          {value === 1 && (
            <Registration
              classes={classes}
              loading={this.state.loading}
              handleSubmit={this.handleButtonClick}
            />
          )}
        </main>
      );
    }
}

LoginReg.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginReg);
