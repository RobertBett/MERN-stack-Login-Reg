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

class AuthenticationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

    state = {
      loading: false,

      firstName: '',
      firstNameInValid: false,

      lastName: '',
      lastNameInValid: false,

      email: '',
      emailInValid: false,

      password: '',
      passwordMild: false,
      passwordWeak: false,
      passwordMedium: false,
      passwordStrong: false,

      confirmPassword: '',
      confirmPasswordInValid: false,

      value: 0,
      showPassword: false,
      passwordNotEqual: false,
    };


    handleChange = (event, value) => {
      this.setState({ value });
    };

    handleForm = (event) => {
      this.setState({
        [event.target.id]: event.target.value,
      });
      const minLength = 1;
      const passwordLength = 6;
      const { value } = event.target;

      switch (event.target.id) {
      case 'firstName':
        this.setState({ firstNameInValid: !value.length >= minLength });
        break;
      case 'lastName':
        this.setState({ lastNameInValid: !value.length >= minLength });
        break;
      case 'email':
        this.setState({ emailInValid: (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) });
        break;
      case 'password':
        /* eslint-disable */
        this.setState({
          passwordWeak: (value.length < passwordLength && value.length >0),
          passwordMild: (value.length >= passwordLength && !(value.match('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'))),
          passwordMedium: (value.match('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})')),
          passwordStrong: (value.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')),
        });
        /* eslint-enable */
        break;
      case 'confirmPassword':
        this.setState({ confirmPasswordInValid: value !== this.state.password }); // eslint-disable-line
        break;
      default:
        break;
      }
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
      // / IF FIRST NAME AND LAST NAME AND CONFIRM PASSWORD EXISTS IT HAS TO BE A SIGN UP
      if (firstName && lastName && confirmPassword) {
        if (password !== confirmPassword) {
          this.setState({ passwordNotEqual: true });
        } else {
          this.props.signup(formData);
        }
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
      const { classes, wrongPassword } = this.props;
      console.log(wrongPassword,['WRONG PASSWORD'])
      const {
        value, password, email, firstName, lastName, confirmPassword,
        loading, showPassword, firstNameInValid, lastNameInValid, confirmPasswordInValid,
        emailInValid, passwordNotEqual, passwordWeak, passwordMedium, passwordStrong,
        passwordMild,
      } = this.state;

      if (this.props.authenticated) {
        this.props.history.push('/dashboard');
      }
      console.log(wrongPassword,['WHATS IN THIS'])
      return (
        <main className={classNames(classes.layout, classes.margin)}>
          <AppBar position="static" color="inherit">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
              className={classNames(classes.InputError, classes.TabRoot)}
            >
              <Tab className={classNames(classes.TabRoot)} label="Sign in" icon={<Person />} />
              <Tab className={classNames(classes.TabRoot)} label="Create an Account" icon={<PersonAdd />} />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <Login
              email={email}
              password={password}
              classes={classes}
              loading={loading}
              showPassword={showPassword}
              handleForm={this.handleForm}
              handleSubmit={this.handleButtonClick}
              handleClickShowPassword={this.handleClickShowPassword}
              wrongPassword={wrongPassword}
            />
          )}
          {value === 1 && (
            <Registration
              firstName={firstName}
              firstNameInValid={firstNameInValid}
              lastName={lastName}
              lastNameInValid={lastNameInValid}
              password={password}
              passwordWeak={passwordWeak}
              passwordMild={passwordMild}
              passwordMedium={passwordMedium}
              passwordStrong={passwordStrong}
              confirmPasswordInValid={confirmPasswordInValid}
              confirmPassword={confirmPassword}
              email={email}
              emailInValid={emailInValid}
              classes={classes}
              loading={loading}
              handleForm={this.handleForm}
              showPassword={showPassword}
              handleSubmit={this.handleButtonClick}
              handleClickShowPassword={this.handleClickShowPassword}
              emailAlready={this.props.emailAlready}
              passwordNotEqual={passwordNotEqual}
            />
          )}
        </main>
      );
    }
}
const mapStateToProps = state => ({
  authenticated: state.Auth.authenticated,
  emailAlready: state.Auth.emailAlready,
  wrongPassword: state.Auth.wrongPassword,
});

const mapDispatchToProps = dispatch => ({
  signin: formData => dispatch(signin(formData)),
  signup: formData => dispatch(signup(formData)),
});

AuthenticationContainer.propTypes = {
  emailAlready: PropTypes.bool.isRequired,
  wrongPassword: PropTypes.bool,
  signup: PropTypes.func.isRequired,
  signin: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  authenticated: PropTypes.string,
  history: PropTypes.object,
};

export default connect(mapStateToProps,
  mapDispatchToProps)(withStyles(styles)(AuthenticationContainer));
