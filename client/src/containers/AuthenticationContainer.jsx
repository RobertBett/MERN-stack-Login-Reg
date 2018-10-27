import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Person from '@material-ui/icons/Person';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonAdd from '@material-ui/icons/PersonAdd';
import AppBar from '@material-ui/core/AppBar';
import Login from '../components/Authentication/Login';
import Registration from '../components/Authentication/Registration';
import { styles } from '../Utilities/styles';
import { signin, signup } from '../store/actions/index';

class LoginReg extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

    state = {
      loading: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      value: 0,
      showPassword: false,
    };


    handleChange = (event, value) => {
      this.setState({ value });
    };

    handleForm = (event) => {
      this.setState({
        [event.target.id]: event.target.value,
      });
    }

    handleButtonClick = (event) => {
      event.preventDefault();

      const {
        email, password, firstName, lastName, confirmPassword,
      } = this.state;

      const formData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };

      if (password !== confirmPassword) { alert('passwords dont Match'); }
      if (firstName && lastName && confirmPassword) {
        this.props.signup(formData);
      } else { this.props.signin(formData); }

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

    handleClickShowPassword = () => {
      this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
      const { classes } = this.props;
      const {
        value, password, email, firstName, lastName, confirmPassword,
      } = this.state;
      return (
        <main className={classNames(classes.layout, classes.margin)}>
          <AppBar position="static" color="inherit">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Sign in" icon={<Person />} />
              <Tab label="Create an Account" icon={<PersonAdd />} />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <Login
              email={email}
              password={password}
              classes={classes}
              loading={this.state.loading}
              showPassword={this.state.showPassword}
              handleForm={this.handleForm}
              handleSubmit={this.handleButtonClick}
              handleClickShowPassword={this.handleClickShowPassword}
            />
          )}
          {value === 1 && (
            <Registration
              firstName={firstName}
              lastName={lastName}
              password={password}
              confirmPassword={confirmPassword}
              email={email}
              classes={classes}
              loading={this.state.loading}
              handleForm={this.handleForm}
              showPassword={this.state.showPassword}
              handleSubmit={this.handleButtonClick}
              handleClickShowPassword={this.handleClickShowPassword}
            />
          )}
        </main>
      );
    }
}
const mapStateToProps = state => ({
  authenticated: state.authenticated,
});

const mapDispatchToProps = dispatch => ({
  signin: formData => dispatch(signin(formData)),
  signup: formData => dispatch(signup(formData)),
});

LoginReg.propTypes = {
  signup: PropTypes.func,
  signin: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginReg));
